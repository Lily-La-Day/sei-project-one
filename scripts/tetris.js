window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  let nextPos = [0,0,0,0]
  let fixedSquares = []
  let shapeName = ''
  let scoreTracker = 0
  const rows =[[],[]]
  const score = document.querySelector('.score')
  const resetButton = document.querySelector('.reset')

  const scoreFunction = () => {
    return score.innerHTML = scoreTracker
  }

  //check functions

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



  const nextPosFunc = () => {
    nextPos = playerPos.map(pos => pos += width)
    return nextPos
  }

  const newPosFunc = () => {
    const newPos = [ squares[nextPos[0]], squares[nextPos[1]],
      squares[nextPos[2]], squares[nextPos[3]] ]

    if (newPos.some(pos => pos.classList.contains('fixed'))
    || !boardRightCheck(newPos) || !boardLeftCheck(newPos) ){
      console.log('should fix now')
      return false
    } else {
      return true
    }
  }


  //win function

  const winFunction = () => {
    const topRow = [...document.querySelectorAll('[data-row="-1"]')].filter(square => square.className === 'grid-item player fixed')
    if (topRow.length > 0){
      score.innerHTML = 'YOU LOSE'
      resetButton.style.display = 'block'
      resetButton.innerHTML = 'reset'

    }
  }


  //clears squares as tetromino moves
  const clear = () => {
    squares.forEach(square =>
      square.classList.remove('player')
    )
  }

  //Tetronimos

  const TLZISJ0 = [
    {
      name: 'Tee',
      start: [14, 3, 13, 23],
      zero: [0, -11, -1, 9],
      ninety: [0, -1, +1, 10],
      oneEighty: [0, -9, +1, +11],
      twoSeventy: [0, -1, +1, -10]
    },

    {
      name: 'Elle',  
      start: [14, 3, 13, 23],
      zero: [0, 10, 20, +21],
      ninety: [0, -1, -2, +8],
      oneEighty: [0, -10, -20, -21],
      twoSeventy: [0, 1, 2, -8]
    },


    {
      name: 'Zed',
      start: [14, 4, 3, 15],
      zero: [0, 1, +10, -9],
      ninety: [0, -10, -11, 1],
      oneEighty: [0, -1, +10, +11],
      twoSeventy: [0, -10, -1, 9]
    },



    {
      name: 'Eye',
      start: [14, 15, 13, 12],
      zero: [0, 1, -1, -2],
      ninety: [0, -10, -20, +10],
      oneEighty: [0, -1, 1, 2],
      twoSeventy: [0, -10, +10, +20]
    },

    {
      name: 'Ess',
      start: [14, 4, 5, 13],
      zero: [0, -10, -9, -1],
      ninety: [0, -10, +1, +11],
      oneEighty: [0, +1, +10, +9],
      twoSeventy: [0, -10, +1, +11]

    },

    {
      name: 'Jay',
      start: [14, 15, 13, 25],
      zero: [0, +1, -1, +11],
      ninety: [0, -10, -9, +10],
      oneEighty: [0, -1, +1, -11],
      twoSeventy: [0, +10, +9, -10]

    },

    {
      name: 'Oh',
      start: [14, 13, 4, 3],
      zero: [0, -1, -10, -11],
      ninety: [0, -1, -10, -11],
      oneEighty: [ 0, -1, -10, -11],
      twoSeventy: [0, -1, -10, -11]

    }

  ]
  //Function to make shape
  const makeShape = (playerIndex) => {
    let rando = 0
    const randomNum = Math.floor(Math.random()*7)
    for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {
      rando = TLZISJ0[randomNum].zero[i]
      squares[playerIndex + rando].classList.add('player')
      playerPos.unshift(playerIndex+rando)
      playerPos = playerPos.slice(0,4)
    }
    playerIndex = playerPos[0]
    shapeName = TLZISJ0[randomNum].name
    console.log(shapeName)
    return shapeName

  }

  //Clears row and shifts bricks down when row is full

  function rowClear() {
    rows[0] = squares.filter((el, index) =>
      (index < 200 && index > 189 && el.classList.contains('fixed')))
    rows[1] = squares.filter((el, index) =>
      (index < 190 && index > 179 && el.classList.contains('fixed')))
    rows[2] = squares.filter((el, index) =>
      (index < 180 && index > 169 && el.classList.contains('fixed')))
    rows[3] = squares.filter((el, index) =>
      (index < 170 && index > 159 && el.classList.contains('fixed')))
    rows[4] = squares.filter((el, index) =>
      (index < 160 && index > 149 && el.classList.contains('fixed')))
    rows[5] = squares.filter((el, index) =>
      (index < 150 && index > 139 && el.classList.contains('fixed')))
    rows[6] = squares.filter((el, index) =>
      (index < 140 && index > 129 && el.classList.contains('fixed')))
    rows[7] = squares.filter((el, index) =>
      (index < 130 && index > 119 && el.classList.contains('fixed')))
    rows[9] = squares.filter((el, index) =>
      (index < 120 && index > 109 && el.classList.contains('fixed')))
    rows[10] = squares.filter((el, index) =>
      (index < 110 && index > 99 && el.classList.contains('fixed')))
    rows[11] = squares.filter((el, index) =>
      (index < 100 && index > 89 && el.classList.contains('fixed')))
    rows[12] = squares.filter((el, index) =>
      (index < 90 && index > 79 && el.classList.contains('fixed')))
    rows[13] = squares.filter((el, index) =>
      (index < 80 && index > 69 && el.classList.contains('fixed')))
    rows[14] = squares.filter((el, index) =>
      (index < 70 && index > 59 && el.classList.contains('fixed')))
    rows[15] = squares.filter((el, index) =>
      (index < 60 && index > 49 && el.classList.contains('fixed')))
    rows[16] = squares.filter((el, index) =>
      (index < 50 && index > 39 && el.classList.contains('fixed')))
    rows[17] = squares.filter((el, index) =>
      (index < 40 && index > 29 && el.classList.contains('fixed')))
    rows[18] = squares.filter((el, index) =>
      (index < 30 && index > 19 && el.classList.contains('fixed')))
    rows[19] = squares.filter((el, index) =>
      (index < 20 && index > 9 && el.classList.contains('fixed')))
    rows[20] = squares.filter((el, index) =>
      (index < 10 && index > 0 && el.classList.contains('fixed')))
    rows[21] = squares.filter((el, index) =>
      (index < 210 && index > 199 && el.classList.contains('fixed')))

    rows.forEach((row) => {
      if(row.length === 10){
        scoreTracker += 1
        for(let i = 0; i < squares.length; i++) {
          if(squares[i].className === 'grid-item fixed') {
            console.log(squares[i])
            squares[i+10].classList.add('fixed-two')
            squares[i].classList.remove('fixed')
            squares[i].style.backgroundColor= 'white'
            row = []
            if (squares[i].className === 'grid-item fixed-two') {
              scoreTracker += 1
              squares[i+10].classList.add('fixed')
              squares[i].classList.remove('fixed-two')
              squares[i].style.backgroundColor= 'white'
              row = []

            }
          }
        }
      }

    })
  }
  //ridiculous massive rotate functions that could not be refactored without breaking
  let rotateTracker = 90

  function rotate90() {

    if (shapeName === 'Tee'){
      nextPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])

    } else if (shapeName === 'Elle'){
      nextPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])

    } else if (shapeName === 'Zed'){
      nextPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])

    } else if (shapeName === 'Eye'){
      nextPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])

    } else if (shapeName === 'Ess'){
      nextPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])


    } else if (shapeName === 'Jay'){
      nextPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])


    }  else if (shapeName === 'Oh'){
      nextPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
      nextPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
      nextPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
      nextPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
      // console.log(playerIndex)
      // console.log(nextPos)

    }
    playerIndex = nextPos[0]
    rotateTracker = 180
    return nextPos
  }


  function rotate180() {
    if (shapeName === 'Tee'){
      nextPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
    } else if (shapeName === 'Elle'){
      nextPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
    } else if (shapeName === 'Zed'){
      nextPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
    } else if (shapeName === 'Eye'){
      nextPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
    } else if (shapeName === 'Ess'){
      nextPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
    } else if (shapeName === 'Jay'){
      nextPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
    }  else if (shapeName === 'Oh'){
      nextPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
      nextPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
      nextPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
      nextPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
    }
    playerIndex = nextPos[0]
    rotateTracker = 270
    return nextPos
  }

  function rotate270() {
    if (shapeName === 'Tee'){
      nextPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
    } else if (shapeName === 'Elle'){
      nextPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
    } else if (shapeName === 'Zed'){
      nextPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
    } else if (shapeName === 'Eye'){
      nextPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
    } else if (shapeName === 'Ess'){
      nextPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
    } else if (shapeName === 'Jay'){
      nextPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
    }  else if (shapeName === 'Oh'){
      nextPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
      nextPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
      nextPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
      nextPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
    }
    playerIndex = nextPos[0]
    rotateTracker =  360
    return nextPos
  }

  function rotate360() {

    if (shapeName === 'Tee'){
      nextPos[0] = (playerIndex + TLZISJ0[0].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[0].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
    } else if (shapeName === 'Elle'){
      nextPos[0] = (playerIndex + TLZISJ0[1].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[1].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
    } else if (shapeName === 'Zed'){
      nextPos[0] = (playerIndex + TLZISJ0[2].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[2].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
    } else if (shapeName === 'Eye'){
      nextPos[0] = (playerIndex + TLZISJ0[3].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[3].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[3].zero[3])

    } else if (shapeName === 'Ess'){
      nextPos[0] = (playerIndex + TLZISJ0[4].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[4].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
    } else if (shapeName === 'Jay'){
      nextPos[0] = (playerIndex + TLZISJ0[5].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[5].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
    }  else if (shapeName === 'Oh'){
      nextPos[0] = (playerIndex + TLZISJ0[6].zero[0])
      nextPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
      nextPos[2] = (playerIndex + TLZISJ0[6].zero[2])
      nextPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
    }
    playerIndex = nextPos[0]
    rotateTracker = 90
    return nextPos
  }


  //combining rotate functions and checking space

  const rotateShape = () => {
    if (playerIndex % width < width - 1
      && boardLeftCheck(playerPos) &&
      playerIndex % width > 0 && boardRightCheck(playerPos)) {
      if (onBoardCheck(playerPos)) {
        switch(rotateTracker) {
          case 90 :
            rotate90()
            clear()
            playerPos = nextPos
            break
          case 180:
            rotate180()
            clear()
            playerPos = nextPos
            break
          case 270 :
            rotate270()
            console.log(nextPos)
            clear()
            playerPos = nextPos
            break
          case 360 :
            rotate360()
            console.log(nextPos)
            clear()
            playerPos = nextPos


        }
      }
    }
  }



  function left() {

    if (onBoardCheck(playerPos)) {
      if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPos))){
        playerPos[0] ++
        playerPos[1] ++
        playerPos[2] ++
        playerPos[3] ++
      }
    }
  }


  function right() {
    if ((playerIndex % width > 0)&&(boardRightCheck(playerPos))){
      playerPos[0] --
      playerPos[1] --
      playerPos[2] --
      playerPos[3] --
    }
  }


  //Moving if there is space

  const moveDownCheck = () => {
    clear()
    playerPos[0] += width
    playerPos[1] += width
    playerPos[2] += width
    playerPos[3] += width
    squares[playerPos[0]].classList.add('player')
    squares[playerPos[1]].classList.add('player')
    squares[playerPos[2]].classList.add('player')
    squares[playerPos[3]].classList.add('player')
    playerIndex = playerPos[0]
    return playerPos

  }



  //Function to move down or fix if no space


  const moveDown = () => {
    nextPosFunc()
    newPosFunc()

    if (newPosFunc() && onBoardCheck(playerPos)) {
      moveDownCheck()
    } else {
      squares[playerPos[0]].classList.add('fixed')
      squares[playerPos[1]].classList.add('fixed')
      squares[playerPos[2]].classList.add('fixed')
      squares[playerPos[3]].classList.add('fixed')

      const randomColor = '#'+Math.floor(Math.random()*16777215+0.4).toString(16)

      squares[playerPos[0]].style.backgroundColor = randomColor
      squares[playerPos[1]].style.backgroundColor = randomColor
      squares[playerPos[2]].style.backgroundColor = randomColor
      squares[playerPos[3]].style.backgroundColor = randomColor

      fixedSquares = fixedSquares.concat(playerPos)

      rowClear()
      winFunction()
      makeShape(14)
    }

  }

  //movedown to be on timer

  const moveDownAuto = () => moveDown()


  //event listeners

  function handleEventListeners(e) {
    switch(e.keyCode) {
      case 32:
        rotateShape()
        break
      case 39:
        left()
        break
      case 37:
        right()
        break
      case 40:
        moveDown()
        break
    }
  }


  //Making the grid

  function init() {
    const grid = document.querySelector('.grid')
    for (let i = 0; i < width * (width*2) + width + width; i ++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.dataset.index = i
      squares.push(square)
      grid.append(square)
    }
    for (let i = 210; i < 220 ; i ++) {
      squares[i].dataset.row = 0
      squares[i].style.display = 'none'
    }
    for (let i = 0; i < 10 ; i ++) {
      squares[i].dataset.row = -1
      squares[i].style.opacity = 0
    }

    makeShape(14)
  }

  //function to set speed, gets faster as score increases.

  const setInterFunc = () =>  {
    let interval = 0
    if (scoreTracker === 0) {
      interval = 800
    } else if (scoreTracker < 3)  {
      interval = 500
    } else {
      interval = 300
    }
    return interval
  }


  const interval = setInterFunc()

  setInterval(moveDownAuto, `${interval}`)

  setInterval(scoreFunction, 1000)

  //reset functions


  const reset = () => {
    scoreTracker = 0
    score.innerHTML = scoreTracker
    playerIndex = 14
    squares.forEach(square=> square.classList.remove('fixed'))
    squares.forEach(square=> square.classList.remove('fixed-two'))
    squares.forEach(square=> square.style.backgroundColor = 'white')
    resetButton.style.display = 'none'
    return makeShape(14)

  }



  init()




  window.addEventListener('keydown', handleEventListeners)
  resetButton.addEventListener('click', reset)





})
