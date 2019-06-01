
window.addEventListener('DOMContentLoaded', (event) => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  let fixedSquares = []


  //basic function to update squares to be coloured as tetronimo moves on board
  function movePlayer() {
    clear()
    squares[playerPos[0]].classList.add('player')
    squares[playerPos[1]].classList.add('player')
    squares[playerPos[2]].classList.add('player')
    squares[playerPos[3]].classList.add('player')
  }

  //clears squares as tetromino moves
  const clear = () => {
    squares.forEach(square =>
      square.classList.remove('player')
    )
  }



  const makeTee = (one, two, three, four) => {
    one = 0
    two = -11
    three = -1
    four = + 9
    squares[playerIndex + one].classList.add('player')
    squares[playerIndex + two].classList.add('player')
    squares[playerIndex  + three].classList.add('player')
    squares[playerIndex + four].classList.add('player')
    playerPos = [playerIndex + one, playerIndex + two, playerIndex + three,
      playerIndex + four ]
      playerIndex = playerPos[0]
      // console.log(playerIndex)
      return playerIndex
    }

    const TLZISJ0 = [
      {
        zero: [0, -11, -1, 9],
        ninety: [0, -1, +1, 10],
        twoSeventy: [0, -9, +1, +11],
        threeSixty: [0, -1, +1, -10]
      },

      {
        zero: [0, -11, -1, 9],
        ninety: [0, -1, +1, 10],
        twoSeventy: [0, -9, +1, +11],
        threeSixty: [0, -1, +1, -10]
      },


      {
        zero: [0, -10, -11, 1],
        ninety: [0, 1, +10, -9],
        twoSeventy: [0, -1, +10, +11],
        threeSixty: [0, -10, -1, +9]
      },

      {
        zero: [0, 1, -1, -2],
        ninety: [0, -10, -20, +10],
        twoSeventy: [0, -1, 1, 2],
        threeSixty: [0, -10, +10, +20]
      },

      {
        zero: [0, -10, -9, -1],
        ninety: [0, -10, +1, +9],
        twoSeventy: [0, +1, +10, +9],
        threeSixty: [0, -10, +1, +11]

      },

      {

        zero: [0, +1, -1, +11],
        ninety: [0, -10, -9, +10],
        twoSeventy: [0, -1, +1, -11],
        threeSixty: [0, +10, +9, -10]

      },

      {

        zero: [0, -1, -10, -11],
        ninety: [0, -1, -10, -11],
        twoSeventy: [ 0, -1, -10, -11],
        threeSixty: [0, -1, -10, -11]

      }




    ]

    const makeShape = (playerIndex) => {
      let rando = 0
      let randoShape
      let adder = 0

      const randomNum = Math.round(Math.random()*6)
      for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {

        squares[playerIndex + adder].classList.add('player')

        rando = TLZISJ0[randomNum].zero[i]


        randoShape = squares[playerIndex + rando].classList.add('player')

        playerPos.unshift(playerIndex+rando)
        playerPos = playerPos.slice(0,4)
      }
      playerIndex = playerPos[3]
      console.log(playerPos)
    }

function rotate90(playerIndex) {
for (let i = 0; i < TLZISJ0.length; i ++)  {
  console.log(TLZISJ0[i].ninety)

}
}


    function rotatePress(e) {

      switch(e.keyCode) {
        case 49:


        clear()
        rotate90()

        break

        case 50:

        clear()
        teeDown()

        break


        case 51:

        clear()
        teeLeft()

        break


        case 52:
        clear()
        teeUp()

        break
      }
    }


    const onBoardCheck = (playerPos) => {
      return playerPos.every(pos =>
        pos >= 0 && pos < 190

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
    // //function to check if player pos is same as index of any div with the class fixed
    const spaceCheck = (playerPos) => {
      return playerPos.every(pos =>

        pos !== fixedSquares[0]-10 &&
        pos !== fixedSquares[1] -10 &&
        pos !== fixedSquares[2] -10&&
        pos !== fixedSquares[3] -10&&
        pos !== fixedSquares[4] -10&&
        pos !== fixedSquares[5] -10&&
        pos !== fixedSquares[6] -10&&
        pos !== fixedSquares[7] -10&&
        pos !== fixedSquares[8] -10&&
        pos !== fixedSquares[9] -10&&
        pos !== fixedSquares[10]-10 &&
        pos !== fixedSquares[11] -10&&
        pos !== fixedSquares[12]-10 &&
        pos !== fixedSquares[13] -10&&
        pos !== fixedSquares[14] -10 &&
        pos !== fixedSquares[15]-10 &&
        pos !== fixedSquares[16] -10 &&
        pos !== fixedSquares[17] -10&&
        pos !== fixedSquares[18] -10&&
        pos !== fixedSquares[19] -10&&
        pos !== fixedSquares[20] -10&&
        pos !== fixedSquares[21] -10&&
        pos !== fixedSquares[22] -10&&
        pos !== fixedSquares[23] -10&&
        pos !== fixedSquares[24] -10&&
        pos !== fixedSquares[25]-10 &&
        pos !== fixedSquares[26] -10&&
        pos !== fixedSquares[27]-10 &&
        pos !== fixedSquares[28] -10&&
        pos !== fixedSquares[29] -10&&
        pos !== fixedSquares[30] -10 &&
        pos !== fixedSquares[31] -10&&
        pos !== fixedSquares[32] -10&&
        pos !== fixedSquares[33] -10&&
        pos !== fixedSquares[34] -10&&
        pos !== fixedSquares[35] -10&&
        pos !== fixedSquares[36] -10&&
        pos !== fixedSquares[37] -10&&
        pos !== fixedSquares[38] -10&&
        pos !== fixedSquares[39]-10 &&
        pos !== fixedSquares[40] -10&&
        pos !== fixedSquares[41]-10 &&
        pos !== fixedSquares[42] -10&&
        pos !== fixedSquares[43]
      )
    }



    function leftRight(e) {
      if (onBoardCheck(playerPos)) {
        console.log(playerPos)

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
      for (let i = 0; i < width * (width*2); i ++) {
        const square = document.createElement('div')
        square.classList.add('grid-item')
        square.innerHTML = i
        squares.push(square)
        grid.append(square)


      }
      makeShape(playerIndex)



    const moveDown = () => {
        // console.log(spaceCheck(playerPos))
        // clear()
      if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
          clear()
          // console.log('moving down')
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
        } else {
          spaceCheck(playerPos)
          squares[playerPos[0]].classList.add('fixed')
          squares[playerPos[1]].classList.add('fixed')
          squares[playerPos[2]].classList.add('fixed')
          squares[playerPos[3]].classList.add('fixed')
          fixedSquares = fixedSquares.concat(playerPos)
          console.log(playerPos, fixedSquares)
          //Call function to make new tetronimo
          makeShape(14)
        }

      }

      setInterval(moveDown, 1000000)

      window.addEventListener('keydown', leftRight)
      window.addEventListener('keydown', rotatePress)
    }

    init()

  })
