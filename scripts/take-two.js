const height = 20
const width = 10
const active = 1 //true
let direction = ''
const startPoint = [5, 0]


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
      square.dataset.active = 1 //false
      row.append(square)
      count ++
    }
    grid.append(row)
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

const makeTetronimo = () => {

  const random = Math.floor(Math.random() * tetronimos.length)
  const shape = tetronimos[random]
  const center = Math.floor(width / 2)
  const location = [center, 0]

  activated =
  {
    shape: shape,
    location: location,
    position: getPosition(shape, location)
  }

  if (makeStop()) {
    state ='2'
    document.getElementById('points').innerHTML += ' Game over'
    clearInterval(timer)
  }

}


const getPosition = (shape, location) => {
  const indeces = []

  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    // console.log(shape[i][0], location[0])
    const y = shape[i][1] + location[1]
    // console.log(shape[i][1], location[1])

    console.log('position is', x, y)
    const square = document.querySelector('[data-y="' + y + '"][data-x="' + x + '"]')
    indeces.push(square.dataset.index)

  }

  return indeces

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
    console.log(space)
    if (fixedSquares.indexOf(space.dataset.index) > -1) {
      stop = true
      break
    }

    if (x < 0 && direction=='left') {
      stop = true
      break
    } else if (x == width && direction == 'right') {
      stop = true
      break
    }
  }

  return stop
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





const makeShape = () => {
  shouldStop()
  const shape = activated.shape
  const location = activated.location
  clear()
  switch(direction) {
    case 'down' :
      activated.location[1]++
      console.log(activated)
      break
    case 'left':
      activated.location[0]--
      console.log(activated)
      break
    case 'right':
      activated.location[0]++
      console.log(activated)
      break
  }
  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    const y = shape[i][1] + location[1]
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    square.classList.add('fixed')
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

  }
}

const handlePress = (e) => {
  e.preventDefault()
  console.log(e.keyCode)
  switch(e.keyCode) {
    case 40 :
      direction='down'
      console.log(direction)
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
  if (checkSides()==false)
    makeShape()
}

function moveDown(count, start) {
  for (let i = start-1; i >= 0; i--) {
    for(let x = 0; x < width; x++) {
      const y = i + count
      const space = document.querySelector('[data-x="' + x + '"][data-y="' + i + '"]')
      const nextsquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')

      if (space.dataset.state == '1') {
        nextsquare.style.backgroundColor = space.style.backgroundColor
        nextsquare.dataset.state = '1'
        space.style.backgroundColor ='white'
        space.dataset.state = '0'
        removeIndex(space.dataset.index)
        fixedSquares.push(nextsquare.dataset.index)
      }
    }
  }
}


const clearIndex = (index) => {
  const location = fixedSquares.indexOf(index)
  fixedSquares.splice(location, 1)
}

rowCheck = () => {
  console.log('checking')
  let count = 0
  let start = 0
  for (let y = 0; y < height; y++) {
    let fixed = true
    for(let x = 0; x < width; x++) {
      const space = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
      if (space.dataset.state == '0') {
        fixed = false
        console.log(fixed)
        break
      }
    }

    if (fixed) {
      if (start == 0)
        start = y
      console.log(fixed)
      count++

      // clear out line
      for(let i = 0; i < width;i++) {
        const space = document.querySelector('[data-x="' + i + '"][data-y="' + y + '"]')
        space.dataset.state = '0'
        // space.style.backgroundColor = 'white'
        clearIndex(space.dataset.index)
      }
    }
  }



  if (count > 0) {
    // points += count
    moveDown(count, start)

  }
}

const rotate = () => {
  const newShape = new Array()
  const shape = activated.shape

  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0]
    const y = shape[i][1]
    const newx = (getWidth() - y)
    const newy = x
    newShape.push([newx, newy])
  }

  console.log(shape)
  console.log(newShape)
  clear()

  activated.shape = newShape
  activated.indexes = getPosition(newShape, activated.location)
}


const getHeight = () => {
  let y = 0
  // returns the height of current shape
  // max y found
  for(let i = 0; i < activated.shape.length; i++) {
    const square = activated.shape[i]
    if (square[1] > y)
      y = square[1]
  }

  return y
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

function step() {
  if (move==0) {
    makeTetronimo()
    makeShape()
  } else {
    // first check if next move is possible
    if (makeStop()) {
      makeTetronimo()
      makeShape()
    } else {
      clear()
      makeShape()
    }
  }
  move++
}






document.addEventListener('keydown', handlePress)




window.addEventListener('load', function(){
  init()
  makeTetronimos()
  makeTetronimo()
  makeShape()
})
