window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  let nextPos = [0,0,0,0]

  let fixedSquares = []
  let shapeName = ''
  let scoreTracker = 0
  let fixedSquaresTwo = [...document.querySelectorAll('[class*="fixed"]')]
  let score = document.querySelector('.score')


  const scoreFunction = () => {
    // console.log(scoreTracker)
    return score.innerHTML = scoreTracker


  }

  const onBoardCheck = (playerPos) => {
    return playerPos.every(pos =>
      pos >= 0 && pos < 200

    )
  }

  function isNotNineMoreThanRoundNumber(currentValue) {
    if ((currentValue - 9) %10 !== 0) {
      return currentValue
    }
  }

  function isNotNineLessThanRoundNumber(currentValue) {
    if ((currentValue + 10) %10 !== 0) {
      return currentValue
    }
  }
  const boardLeftCheck = (playerPos) => {
    return playerPos.every(isNotNineMoreThanRoundNumber)
  }

  const boardRightCheck = (playerPos) => {
    return playerPos.every(isNotNineLessThanRoundNumber)
  }
  const winFunction = () => {
    topRow = [...document.querySelectorAll('[data-row="-1"]')].filter(square => square.className === 'grid-item player fixed')
    let fixedSquaresTwo = [...document.querySelectorAll('[class*="fixed"]')]
    if (topRow.length > 0){
      console.log('you lose')
      score.innerHTML = 'YOU LOSE'
    }
  }

  const update = () => {
    playerPos.forEach(pos =>
      squares[pos].classList.add('player'))
    }





    function movePlayer() {
      clear()
      squares[playerPos[0]].classList.add('player')
      squares[playerPos[1]].classList.add('player')
      squares[playerPos[2]].classList.add('player')
      squares[playerPos[3]].classList.add('player')
      playerIndex = playerPos[0]
    }

    //clears squares as tetromino moves
    const clear = () => {
      squares.forEach(square =>
        square.classList.remove('player')
      )
    }

    const equalityCheck = (arrayOne, arrayTwo) => {

      for(let i = 0; i < arrayOne.length; i++) {
        for(let j = 0; j < arrayTwo.length; j++) {
          if (arrayOne.sort()[i] === arrayTwo.sort()[j]){
            return true

          } else {
            return false
          }


        }
      }


    }



    function rowClear() {

      const rows =[[],[]]

      rows[0] = squares.filter((el, index) =>
      (index < 200 && index > 189 && el.classList.contains('fixed'))
    )
    rows[1] = squares.filter((el, index) =>
    (index < 190 && index > 179 && el.classList.contains('fixed'))
  )
  rows[2] = squares.filter((el, index) =>
  (index < 180 && index > 169 && el.classList.contains('fixed'))
)
rows[3] = squares.filter((el, index) =>
(index < 170 && index > 159 && el.classList.contains('fixed'))
)
rows[4] = squares.filter((el, index) =>
(index < 160 && index > 149 && el.classList.contains('fixed'))
)
rows[5] = squares.filter((el, index) =>
(index < 150 && index > 139 && el.classList.contains('fixed'))
)
rows[6] = squares.filter((el, index) =>
(index < 140 && index > 129 && el.classList.contains('fixed'))
)
rows[7] = squares.filter((el, index) =>
(index < 130 && index > 119 && el.classList.contains('fixed'))
)

rows[9] = squares.filter((el, index) =>
(index < 120 && index > 109 && el.classList.contains('fixed'))
)
rows[10] = squares.filter((el, index) =>
(index < 110 && index > 99 && el.classList.contains('fixed'))
)
rows[11] = squares.filter((el, index) =>
(index < 100 && index > 89 && el.classList.contains('fixed'))
)
rows[12] = squares.filter((el, index) =>
(index < 90 && index > 79 && el.classList.contains('fixed'))
)
rows[13] = squares.filter((el, index) =>
(index < 80 && index > 69 && el.classList.contains('fixed'))
)
rows[14] = squares.filter((el, index) =>
(index < 70 && index > 59 && el.classList.contains('fixed'))
)
rows[15] = squares.filter((el, index) =>
(index < 60 && index > 49 && el.classList.contains('fixed'))
)
rows[16] = squares.filter((el, index) =>
(index < 50 && index > 39 && el.classList.contains('fixed'))
)
rows[17] = squares.filter((el, index) =>
(index < 40 && index > 29 && el.classList.contains('fixed'))
)
rows[18] = squares.filter((el, index) =>
(index < 30 && index > 19 && el.classList.contains('fixed'))
)
rows[19] = squares.filter((el, index) =>
(index < 20 && index > 9 && el.classList.contains('fixed'))
)
rows[20] = squares.filter((el, index) =>
(index < 10 && index > 0 && el.classList.contains('fixed'))
)
rows[21] = squares.filter((el, index) =>
(index < 210 && index > 199 && el.classList.contains('fixed'))
)

// console.log(rows[21])

rows.forEach((row) => {
  if(row.length === 10){

    console.log('row is full')
    scoreTracker += 1
    for(let i = 0; i < squares.length; i++) {
      if(squares[i].className === 'grid-item fixed') {
        // console.log(squares[i])
        squares[i+10].classList.add('fixed-two')
        squares[i].classList.remove('fixed')
        row = []
        if (squares[i].className === 'grid-item fixed-two') {
          scoreTracker += 1
          // console.log('second row')
          // console.log(squares[i])
          squares[i+10].classList.add('fixed-three')
          squares[i].classList.remove('fixed-two')
          row = []
          if (squares[i].className === 'grid-item fixed-three') {
            scoreTracker += 1
            // console.log('second row')
            // console.log(squares[i])
            squares[i+10].classList.add('fixed-four')
            squares[i].classList.remove('fixed-three')
            row = []

          }
        }
      }
    }
  }

})
}


class Tetronimo{

  constructor(name, start, ninety, oneEighty,
    twoSeventy, threeSixty) {

      this.name = name
      this.start = start
      this.ninety = ninety
      this.oneEighty = oneEighty
      this.twoSeventy = twoSeventy
      this.threeSixty = threeSixty

    }

    create(playerIndex) {
      return this.start
    }

    turn(playerIndex) {
      const start = this.start
      const ninety = this.ninety.map(num=> playerIndex + num)
      const oneEighty = this.oneEighty.map(num=> playerIndex + num)
      const twoSeventy = this.twoSeventy.map(num=> playerIndex + num)
      const threeSixty = this.threeSixty.map(num=> playerIndex + num)
      if(playerPos === this.start) {
        console.log('ninety')
        playerPos = ninety
      } else if (equalityCheck(playerPos, ninety)) {
        console.log('oneEighty', playerPos, ninety)
        playerPos = oneEighty
      } else if (equalityCheck(playerPos,oneEighty)){
        console.log('twoSeventy', playerPos,oneEighty)
        playerPos = twoSeventy
      } else if (equalityCheck(playerPos, twoSeventy)){
        console.log('threeSixty', playerPos, twoSeventy)
        playerPos = threeSixty
      } else if (equalityCheck(playerPos, threeSixty)){
        console.log('ninety', playerPos, threeSixty)
        playerPos = ninety
      } else {
        playerPos = ninety
      }
      // console.log(playerPos)

      return playerPos
    }

  }


  const tee = new Tetronimo('Tee', [14, 3, 13, 23], [0, -11, -1, 9], [0, -1, +1, 10],
  [0, -9, +1, +11], [0, -1, +1, -10] )

  const elle = new Tetronimo('Elle', [14, 4, 24, 25],  [0, 10, 1, 2], [0, -1, +9, 19],
  [0, 10, 9, 8], [0, -1, +1, -10] )

  const zed = new Tetronimo('Zed', [14, 4, 3, 15], [0, -10, -11, 1], [0, 1, +10, -9],
  [0, -1, +10, +11], [0, -10, -1, 9] )

  const eye = new Tetronimo('Eye', [14, 15, 13, 12],[0, 1, -1, -2], [0, -10, -20, +10],
  [0, -1, 1, 2], [0, -10, +10, +20] )

  const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, +1, +11],  [0, +1, +10, +9],
  [0, +1, +10, +9], [0, -10, +1, +11])

  const jay = new Tetronimo('Jay', [14, 15, 13, 25], [0, +1, -1, +11], [0, -10, -9, +10],
  [0, -1, +1, -11], [0, +10, +9, -10] )

  const oh = new Tetronimo('Oh', [14, 13, 4, 3], [0, 0, 0, 0], [0, 0, 0, 0],
  [0, 0, 0, 0], [0, 0, 0, 0] )




  const TLZISJ0 = [tee, elle, zed, eye, ess, jay, oh ]



  const makeShape = () => {
    const randomNum = Math.floor(Math.random()* 7)
    for (let i = 0; i < 4; i++) {
      playerPosIndex = TLZISJ0[randomNum].start[i]
      playerPos = TLZISJ0[randomNum].start
      for(let i = 0; i < squares.length; i ++) {

        squares[playerPosIndex].classList.add('player')
        player = TLZISJ0[randomNum].name
        console.log(player)
      }

    }
    return player
  }

  const rotateShape = (e) => {
    switch(e.keyCode) {
      case 32:
      switch(player) {
        case 'Tee':
        clear()
        tee.turn(playerIndex)
        update()
        break
        case 'Elle':
        clear()
        elle.turn(playerIndex)
        update()
        break
        case 'Zed':
        clear()
        zed.turn(playerIndex)
        update()
        break
        case 'Eye':
        clear()
        eye.turn(playerIndex)
        update()
        break
        case 'Ess':
        clear()
        ess.turn(playerIndex)
        update()
        break
        case 'Jay':
        clear()
        jay.turn(playerIndex)
        update()
        break
        case 'Oh':
        clear()
        oh.ninety
        update()
        break
      }
    }
  }

  // const rotateShape = (e) => {
  //
  //   switch(e.keyCode) {
  //     case 32:
  //     switch(rotateTracker) {
  //       case 0 :
  //       clear()
  //       rotate90()
  //       break
  //       case 90 :
  //       clear()
  //       rotate180()
  //       break
  //       case 180:
  //       clear()
  //       rotate270()
  //       break
  //       case 270 :
  //       clear()
  //       rotate360()
  //       break
  //       case 360 :
  //       clear()
  //       rotate90()
  //       break
  //
  //
  //     }
  //   }
  // }

  playerPosAfter = (func) => {

    console.log(playerPos.map(func, playerPos))


  }





  function checkBelow(blockIndex){

    // console.log(playerPos)
    return fixedSquares.includes(blockIndex + 10)
  }

  function checkLeft(blockIndex){
    return fixedSquares.includes(blockIndex - 1)
  }

  function checkRight(blockIndex){
    return fixedSquares.includes(blockIndex + 1)
  }

  // //function to check if player pos is same as index of any div with the class fixed
  const spaceCheck = (playerPos) => {
    function checkLeft(blockIndex){
      return fixedSquares.includes(blockIndex - 1)
    }

    function checkRight(blockIndex){
      cosole.log(blockIndex)
      return fixedSquares.includes(blockIndex + 1)
    }
    let checker = true
    playerPos.forEach(block => {
      if(checkBelow(block)) checker = false
    })

    return checker
  }



  function leftRight(e) {

    if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
      // console.log(playerPos)

      let playerShouldMove = true

      switch(e.keyCode) {
        case 39:
        if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPos))){
          playerPos[0] ++
          playerPos[1] ++
          playerPos[2] ++
          playerPos[3] ++
        }
        break
        case 37:
        if ((playerIndex % width > 0)&&(boardRightCheck(playerPos))){

          playerPos[0] --
          playerPos[1] --
          playerPos[2] --
          playerPos[3] --
        }
        break

        default: playerShouldMove = false

      }

      if (playerShouldMove) movePlayer()
    }

  }






  function init() {
    const grid = document.querySelector('.grid')
    for (let i = 0; i < width * (width*2) + width + width; i ++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.innerHTML = i

      square.dataset.index = i
      squares.push(square)
      grid.append(square)


    }
    for (let i = 210; i < 220 ; i ++) {
      squares[i].dataset.row = 0
      squares[i].style.opacity = 0
    }
    for (let i = 0; i < 10 ; i ++) {
      squares[i].dataset.row = -1
      squares[i].style.opacity = 0
    }

    makeShape(playerIndex)

    let newPos = [ squares[nextPos[0]], squares[nextPos[1]],
    squares[nextPos[2]], squares[nextPos[3]] ]

    const nextPosFunc = () => {
      nextPos = playerPos.map(pos => pos += width)
      // console.log(playerPos)
      // console.log(nextPos)
      return nextPos

      // console.log(playerPos)
      // return nextPos
    }

    const newPosFunc = () => {
      // console.log(nextPos)
      newPos = [ squares[nextPos[0]], squares[nextPos[1]],
      squares[nextPos[2]], squares[nextPos[3]] ]

      if (newPos.some(pos => pos.classList.contains('fixed'))){
        console.log('should fix now')
        return false
      } else {
        return true
      }
    }

    const moveDown = () => {
      nextPosFunc()
      // newPosFunc()
      // console.log( playerPos, nextPos)
      if (newPosFunc() && onBoardCheck(playerPos)) {
        moveDownCheck()
      } else {
        // console.log(playerPos, nextPos)
        squares[playerPos[0]].classList.add('fixed')
        squares[playerPos[1]].classList.add('fixed')
        squares[playerPos[2]].classList.add('fixed')
        squares[playerPos[3]].classList.add('fixed')
        fixedSquares = fixedSquares.concat(playerPos)

        rowClear()
        winFunction()
console.log(playerIndex)

        makeShape(14)
      }

    }




    const moveDownCheck = () => {
      // console.log(playerPos, nextPos)
      clear()

      playerPos[0] += width
      playerPos[1] += width
      playerPos[2] += width
      playerPos[3] += width
      // console.log(playerPos, nextPos)
      squares[playerPos[0]].classList.add('player')
      squares[playerPos[1]].classList.add('player')
      squares[playerPos[2]].classList.add('player')
      squares[playerPos[3]].classList.add('player')
      playerIndex = playerPos[0]
      return playerPos



    }

    const moveDownAuto = () => moveDown()

    const moveDownPress = (e) => {
      switch(e.keyCode) {
        case 40: moveDown()
      }
    }

    setInterval(moveDown, 1000)
    setInterval(scoreFunction, 1000)



    window.addEventListener('keydown', leftRight)
    window.addEventListener('keydown', rotateShape )
    window.addEventListener('keydown', moveDownPress)
  }

  init()

})
