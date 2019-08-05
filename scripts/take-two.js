const height = 20
const width = 10
let activated = null
let direction = ''
let tetronimos = []
let fixedSquares = []
const playing = true

//draws grid and sets x and y values that allow us to track grid areas
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
//co-ords for different tetronimo shapes
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



//creates a random tetronimo in a random color, and places in middle of top of grid
const makeTetronimo = () => {

  const random = Math.floor(Math.random() * tetronimos.length)
  const randomColor = '#'+Math.floor(Math.random()*16777215+0.4).toString(16)
  const tetronimo = tetronimos[random]
  const center = Math.floor(width / 2)
  const area = [center, 0]

  activated =
  {
    tetronimo: tetronimo,
    area: area,
    color: randomColor,
    position: getPosition(tetronimo, area)
  }

  if (makeStop()) {
    !playing
  }

}

//gets the current position of active piece
const getPosition = (tetronimo, area) => {
  const indeces = []
  for(let i = 0; i < tetronimo.length; i++) {
    const x = tetronimo[i][0] + area[0]
    const y = tetronimo[i][1] + area[1]
    console.log('position is', x, y)
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    indeces.push(square.dataset.index)

  }

  return indeces

}


//changes activated area of grid depending on direction of movement
const moveTetronimo = () => {
  shouldStop()
  const tetronimo = activated.tetronimo
  const area = activated.area
  clear()
  switch(direction) {
    case 'down' :
      activated.area[1]++
      break
    case 'left':
      activated.area[0]--
      break
    case 'right':
      activated.area[0]++
      break
  }
  for(let i = 0; i < tetronimo.length; i++) {
    const x = tetronimo[i][0] + area[0]
    const y = tetronimo[i][1] + area[1]
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    square.classList.add('fixed')
    square.style.backgroundColor = activated.color
  }
  activated.indexes = getPosition(activated.tetronimo, activated.area)
}

//de-activates area of grid
function clear() {
  const tetronimo = activated.tetronimo
  const area = activated.area
  for(let i = 0; i < tetronimo.length; i++) {
    const x = tetronimo[i][0] + area[0]
    const y = tetronimo[i][1] + area[1]
    const square = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    square.classList.remove('fixed')
    square.style.backgroundColor=''

  }
}

//determines whether there is grid space for tetronimo to move into
const shouldStop = () => {
  const squares = activated.tetronimo
  const pos = activated.area
  let stop = false
  for(let i = 0; i < squares.length; i++) {
    const square = squares[i]
    const x = square[0] + pos[0]
    let y = square[1] + pos[1]
    if (direction === 'down')  y++
    const newSquare = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    if (y === height || fixedSquares.indexOf(newSquare.dataset.index) > -1) {
      stop = true
      break
    }
  }
  //if the piece does not have space to move into the grid areas are set as active,
  // the piece is fixed and a new tetronimo is generated
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


//function to handle keycodes according to direction or rotation
const handlePress = (e) => {
  e.preventDefault()
  // console.log(e.keyCode)
  switch(e.keyCode) {
    case 40 :
      direction='down'
      // console.log(direction)
      break
    case 37:
      direction='left'
      break
    case 39:
      direction='right'
      break
    case 38:
      direction='rotate'
      rotate()
      break
  }
  if (!checkSides())
    moveTetronimo()
}

//rotate function, gets new x, y co-ords using get width function
const rotate = () => {
  const nextPos = []
  const tetronimo = activated.tetronimo
  for(let i = 0; i < tetronimo.length; i++) {
    const x = tetronimo[i][0]
    const y = tetronimo[i][1]
    const newx = (getWidth() - y)
    const newy = x
    nextPos.push([newx, newy])
  }
  clear()
  activated.tetronimo = nextPos
  activated.indexes = getPosition(nextPos, activated.area)
}
//
// const getWidth = () => {
//
//   let width = activated.tetronimo.forEach((square) => {
//     square = activated.tetronimo
//     if (square[0] > width)
//       width = square[0]
//   })
//   return width
// }


const getWidth = () => {
  let width = 0
  for(let i = 0; i < activated.tetronimo.length; i++) {
    const square = activated.tetronimo[i]
    if (square[0] > width)
      width = square[0]
  }

  return width
}

const checkSides = () => {
  const squares = activated.tetronimo
  const pos = activated.area
  const stop = false
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
      stop
      break
    }

    if (x < 0 && direction === 'left') {
      !stop
      break
    } else if (x === width && direction === 'right') {
      !stop
      break
    }
  }

  return stop
}




function makeStop() {
  const squares = activated.tetronimo
  const pos = activated.area
  let stop = false
  for(let i = 0; i < squares.length; i++) {
    const square = squares[i]
    const x = square[0] + pos[0]
    let y = square[1] + pos[1]
    if (direction === 'down') y++
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
  const area = fixedSquares.indexOf(index)
  fixedSquares.splice(area, 1)
}

document.addEventListener('keydown', handlePress)

window.addEventListener('load', function(){
  init()
  makeTetronimos()
  makeTetronimo()
  moveTetronimo()
})
