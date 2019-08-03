const height = 20
const width = 10
const active = 1 //true
let direction = ''
const startPoint = [5, 0]


let tetronimos = []

const fixedSquares = []


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
  const elle = [[1,2], [1, 0], [1, 1], [2,1]]
  const zed = [[0,0], [1,0], [1,1], [2,1]]
  const jay = [[2,0], [0, 1], [1, 1], [0,1]]
  const oh = [[0, 0], [0, 1], [1, 0], [1, 1]]
  tetronimos = [eye, tee, elle, jay, oh, jay, zed, ess]
  console.log(tetronimos)
}

const makeTetronimo = () => {
  const random = Math.floor(Math.random() * tetronimos.length)
  const tetronimo = tetronimos[random]

  activated =
  {
    shape: tetronimo,
    location: startPoint,
    position: getPosition(tetronimo, startPoint)
  }

  console.log(activated)

}


const getPosition = (shape, location) => {
  const indeces = []
  for(let i = 0; i < shape.length; i++) {
    const x = shape[i][0] + location[0]
    // console.log(shape[i][0], location[0])
    const y = shape[i][1] + location[1]
    // console.log(shape[i][1], location[1])


    const square = document.querySelector('[data-y="' + y + '"][data-x="' + x + '"]')
    indeces.push(square.dataset.index)

  }

  return indeces

}

const makeShape = () => {
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
    const block = document.querySelector('[data-x="' + x + '"][data-y="' + y + '"]')
    block.classList.remove('fixed')

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

      break
    case 37:
      direction='left'
      break
    case 39:
      direction='right'
      break
  }
  makeShape()
}



document.addEventListener('keydown', handlePress)




window.addEventListener('load', function(){
  init()
  makeTetronimos()
  makeTetronimo()
  makeShape()
})
