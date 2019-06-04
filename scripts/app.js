window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 35
  let playerPos = 0
  let playerPosArr = []
  let fixedSquares = []
  let shapeName = ''
  const randomNum = Math.floor(Math.random()*7)
  let player = ''

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



  //function to make grid, 20 x 10 with an extra hidden row to account for
  //difficulty with shifting rows
  init()

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
        if(playerPosArr === this.start) {
          console.log('ninety')
          playerPosArr = ninety
        } else if (equalityCheck(playerPosArr, ninety)) {
          console.log('oneEighty', playerPosArr, ninety)
          playerPosArr = oneEighty
        } else if (equalityCheck(playerPosArr,oneEighty)){
          console.log('twoSeventy', playerPosArr,oneEighty)
          playerPosArr = twoSeventy
        } else if (equalityCheck(playerPosArr, twoSeventy)){
          console.log('threeSixty', playerPosArr, threeSixty)
          playerPosArr = threeSixty
        } else if (equalityCheck(playerPosArr, threeSixty)){
          console.log('ninety', playerPosArr, threeSixty)
          playerPosArr = ninety
        }
        return playerPosArr
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

    const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, +1, +11], [0, -10, +1, +9],
    [0, +1, +10, +9], [0, -10, +1, +11])

    const jay = new Tetronimo('Jay', [14, 15, 13, 25], [0, +1, -1, +11], [0, -10, -9, +10],
    [0, -1, +1, -11], [0, +10, +9, -10] )

    const oh = new Tetronimo('Oh', [14, 13, 4, 3], [0, 0, 0, 0], [0, 0, 0, 0],
    [0, 0, 0, 0], [0, 0, 0, 0] )




    const TLZISJ0 = [tee, elle, zed, eye, ess, jay, oh ]



    const makeShape = (playerIndex) => {
      for (let i = 0; i < 4; i++) {
        playerPos = TLZISJ0[randomNum].start[i]
        playerPosArr = TLZISJ0[randomNum].start
        // console.log(TLZISJ0[randomNum].start[i])
        for(let i = 0; i < squares.length; i ++) {

          squares[playerPos].classList.add('player')
          player = TLZISJ0[randomNum].name
        }

      }
      return player
    }

    makeShape()
    // console.log(playerPosArr)


    const update = () => {
      playerPosArr.forEach(pos =>
        squares[pos].classList.add('player'))
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



      const moveDown = () => {
        clear()
        if (onBoardCheck(playerPosArr)) {
          playerPosArr[0] += width
          playerPosArr[1] += width
          playerPosArr[2] += width
          playerPosArr[3] += width
          squares[playerPosArr[0]].classList.add('player')
          squares[playerPosArr[1]].classList.add('player')
          squares[playerPosArr[2]].classList.add('player')
          squares[playerPosArr[3]].classList.add('player')
          playerIndex = playerPosArr[0]
          return playerPosArr
        } else {
          spaceCheck(playerPos)

          squares[playerPosArr[0]].classList.add('fixed')
          squares[playerPosArr[1]].classList.add('fixed')
          squares[playerPosArr[2]].classList.add('fixed')
          squares[playerPosArr[3]].classList.add('fixed')

        }

      }

      const moveDownAuto = () => moveDown()

      const moveDownPress = (e) => {
        switch(e.keyCode) {
          case 40: moveDown()
      }
    }




      setInterval(moveDownAuto, 1000)

      window.addEventListener('keydown', rotateShape)
      window.addEventListener('keydown', leftRight)
  window.addEventListener('keydown', moveDownPress)

      function right() {
        console.log(playerPos)
        clear()
        playerPosArr[0] ++
        playerPosArr[1] ++
        playerPosArr[2] ++
        playerPosArr[3] ++

        }


      function left() {
        console.log(playerPos)
        clear()
        playerPosArr[0] --
        playerPosArr[1] --
        playerPosArr[2] --
        playerPosArr[3] --

          }


        const onBoardCheck = (playerPosArr) => {
          return playerPosArr.every(pos =>
            pos >= 0 && pos < 180

          )
        }

        console.log(playerPosArr)

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
        const boardLeftCheck = (playerPosArr) => {
          return playerPosArr.every(isNotNineMoreThanRoundNumber)
        }

        const boardRightCheck = (playerPosArr) => {
          return playerPosArr.every(isNotNineLessThanRoundNumber)
        }

        function leftRight(e) {
          console.log(playerPosArr)
          // let playerShouldMove = true
          switch(e.keyCode) {
            case 39:
            if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPosArr))){
              right()
            }
            break
            case 37:
            if ((playerIndex % width > 0)&&(boardRightCheck(playerPosArr))){
              left()
            }
            break
            // default: playerShouldMove = false
          }
          // if (playerShouldMove) movePlayer()
        }


        function init() {
          const grid = document.querySelector('.grid')
          for (let i = 0; i < width * (width*2) + (width); i ++) {
            const square = document.createElement('div')
            square.classList.add('grid-item')
            square.innerHTML = i
            square.dataset.index = i
            squares.push(square)
            grid.append(square)

          }
          for (let i = 0; i < 20; i ++) {
            squares[i].classList.opacity = 0.5
          }
          for (let i = 200; i < 210 ; i ++) {
            squares[i].style.opacity = 0
          }


        }













      })
