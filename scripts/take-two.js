const height = 20
const width = 10
const active = 1 //true
const direction = ''
const startPoint = [5, 0]


let tetronimos = new Array()

const fixedSquares = new Array()


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
      square.dataset.x = square.dataset.y = y
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
  const elle = [[2,0], [0, 1], [1, 1], [2,1]]
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
  { shape: tetronimo,
    location: startPoint
  }

  console.log(activated)





}



window.addEventListener('load', function(){
  init()
  makeTetronimos()
  makeTetronimo()
})
