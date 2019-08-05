const height = 20
const width = 10
let activated = null
let direction = ''
let tetronimos = []
let fixedSquares = []


const init = () => {
  const grid = document.querySelector('.grid')
  let count = 0
  grid.innerHTML = ''
  for (let y = 0; y < height; y ++){
    const row = document.createElement('div')
    row.classList.add('row')
    row.dataset.row

    for(let x = 0; x < width; x ++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.dataset.x = x
      square.dataset.y = y
      square.dataset.index = count
      square.dataset.active = 1
      row.append(square)
      count ++
    }
    grid.append(row)
  }
}



const makeTetronimo = () => {

  const random = Math.floor(Math.random() * tetronimos.length)
  const randomColor = '#'+Math.floor(Math.random()*16777215+0.4).toString(16)
  const shape = tetronimos[random]
  const center = Math.floor(width / 2)
  const location = [center, 0]

  activated =
  {
    shape: shape,
    location: location,
    color: randomColor,
    position: getPosition(shape, location)
  }

  if (makeStop()) {
    active ='2'
    document.getElementById('points').innerHTML += ' Game over'

  }

}





const getPosition = (shape, location) => {
  const indeces = []

  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    const y = shape[i][1] + location[1]
    console.log('position is', x, y)
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    indeces.push(square.dataset.index)

  }

  return indeces

}

const makeShape = () => {
  shouldStop()
  const shape = activated.shape
  const location = activated.location
  clear()
  switch(direction) {
    case 'down' :
      activated.location[1]++
      break
    case 'left':
      activated.location[0]--
      break
    case 'right':
      activated.location[0]++
      break
  }
  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    const y = shape[i][1] + location[1]
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    square.classList.add('fixed')
    square.style.backgroundColor = activated.color
  }
  activated.indexes = getPosition(activated.shape, activated.location)
}

function clear() {
  const shape = activated.shape
  const location = activated.location
  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    const y = shape[i][1] + location[1]
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    square.classList.remove('fixed')
    square.style.backgroundColor=''

  }
}

const makeTetronimos = () => {
  const eye = [[0,0],[0,1], [0,2], [0,3]]
  const tee = [[0,0], [1,0], [2,0], [1,1]]
  const ess = [[2,0], [1,0], [1,1], [0,1]]
  const elle = [[0,1], [1, 1], [2, 1], [2,0]]
  const zed = [[0,0], [1,0], [1,1], [2,1]]
  const jay = [[0,0], [1, 0], [2, 0], [2,1]]
  const oh = [[0, 0], [0, 1], [1, 0], [1, 1]]
  tetronimos = [eye, tee, elle, jay, oh, jay, zed, ess]
  console.log(tetronimos[2])
}


const shouldStop = () => {
  const squares = activated.shape
  const pos = activated.location
  let stop = false
  for(let i = 0; i < squares.length; i++) {
    const square = squares[i]
    const x = square[0] + pos[0]
    let y = square[1] + pos[1]

    if (direction === 'down')
      y++

    const newSquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')

    if (y === height || fixedSquares.indexOf(newSquare.dataset.index) > -1) {
      stop = true
      break
    }
  }

  if (stop) {
    for(let i = 0; i < squares.length; i++) {
      const square = squares[i]
      const x = square[0] + pos[0]
      const y = square[1] + pos[1]

      const newSquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
      newSquare.dataset.active = '1'
    }

    fixedSquares = fixedSquares.concat(activated.indexes)
    makeTetronimo()
    rowCheck()

  }
  return stop
}



const handlePress = (e) => {
  e.preventDefault()
  // console.log(e.keyCode)
  switch(e.keyCode) {
    case 40 :
      direction='down'
      // console.log(direction)
      break
    case 38:
      direction='rotate'
      rotate()
      break
    case 37:
      direction='left'
      break
    case 39:
      direction='right'
      break
  }
  if (checkSides() === false)
    makeShape()
}

const rotate = () => {
  const nextPos = []
  const shape = activated.shape

  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0]
    const y = shape[i][1]
    const newx = (getWidth() - y)
    const newy = x
    nextPos.push([newx, newy])
  }

  clear()

  activated.shape = nextPos
  activated.indexes = getPosition(nextPos, activated.location)
}

const getWidth = () => {
  let width = 0

  for(let i = 0; i < activated.shape.length; i++) {
    var block = activated.shape[i]
    if (block[0] > width)
      width = block[0]
  }

  return width
}

const checkSides = () => {
  const squares = activated.shape
  const pos = activated.location
  let stop = false

  for(let i = 0; i < squares.length; i++) {
    const square = squares[i]
    let x = square[0] + pos[0]
    const y = square[1] + pos[1]

    if (direction === 'left')
      x--
    else if (direction === 'right')
      x++

    const space = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    // console.log(space)
    if (fixedSquares.indexOf(space.dataset.index) > -1) {
      stop = true
      break
    }

    if (x < 0 && direction === 'left') {
      stop = true
      break
    } else if (x === width && direction === 'right') {
      stop = true
      break
    }
  }

  return stop
}




function makeStop() {
  const squares = activated.shape
  const pos = activated.location
  let stop = false
  for(let i = 0; i < squares.length; i++) {
    const square = squares[i]
    const x = square[0] + pos[0]
    let y = square[1] + pos[1]

    if (direction === 'down')
      y++

    const newSquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')

    if (y === height || fixedSquares.indexOf(newSquare.dataset.index) > -1) {
      stop = true
      break
    }


  }

  if (stop) {

    fixedSquares = fixedSquares.concat(activated.indexes)
    makeTetronimo()
    rowCheck()
  }

  return stop
}

const rowCheck = () => {
  console.log('checking')
  let count = 0
  let start = 0
  for (let y = 0; y < height; y++) {
    let fixed = true
    for(let x = 0; x < width; x++) {
      const space = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
      console.log(space)
      if (space.dataset.active === '0') {
        fixed = false
        console.log(fixed)
        break
      }
    }


    if (fixed) {
      if (start === 0)
        start = y
      console.log(fixed)
      count++
      for(let i = 0; i < width;i++) {
        const space = document.querySelector('[data-x="' + i + '"][data-y="' + y + '"]')
        space.dataset.active = '0'
        space.style.backgroundColor = 'white'
        clearIndex(space.dataset.index)
      }
    }
  }
  if (count > 0) {
    // points += count
    moveDown(count, start)

  }
}

function moveDown(count, start) {
  for (let i = start-1; i >= 0; i--) {
    for(let x = 0; x < width; x++) {
      const y = i + count
      const space = document.querySelector('[data-x="' + x + '"][data-y="' + i + '"]')
      const nextsquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')

      if (space.dataset.active === '1') {
        nextsquare.style.backgroundColor = space.style.backgroundColor
        nextsquare.dataset.active = '1'
        space.style.backgroundColor ='white'
        space.dataset.active = '0'
        clearIndex(space.dataset.index)
        fixedSquares.push(nextsquare.dataset.index)
      }
    }
  }
}


const clearIndex = (index) => {
  console.log('clearing')
  const location = fixedSquares.indexOf(index)
  fixedSquares.splice(location, 1)
}

document.addEventListener('keydown', handlePress)

window.addEventListener('load', function(){
  init()
  makeTetronimos()
  makeTetronimo()
  makeShape()
})
