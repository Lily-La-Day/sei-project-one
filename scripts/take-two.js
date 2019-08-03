const height = 20
const width = 10
const active = true
const direction = ''


const tetronimos = new Array()

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
      square.dataset.active = false
      row.append(square)
      count ++
    }
    grid.append(row)
  }


}

window.addEventListener('load', function(){
  init()
})
