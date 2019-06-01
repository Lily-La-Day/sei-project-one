
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

  // const randoTetronimo = () => {
  //
  // }

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

 // adder = TLZISJ0[0].zero[i]
squares[playerIndex + adder].classList.add('player')

rando = TLZISJ0[randomNum].zero[i]
console.log(randomNum)
console.log(rando)
randoShape = squares[playerIndex + rando].classList.add('player')
}
      // squares[playerIndex + TLZISJ0[1].zero[i].classList.add('player')]



      // squares[playerIndex].classList.add('player')
      // squares[playerIndex - 10].classList.add('player')
      // squares[playerIndex - 11].classList.add('player')
      // squares[playerIndex + 10].classList.add('player')
      playerPos = [playerIndex, playerIndex - 10, playerIndex - 11,
         playerIndex + 9 ]
      playerIndex = playerPos[0]


      return playerIndex


    }




    const teeRight = (shapes) => {
      one = tee.right[0]
      two = tee.right[1]
      three = tee.right[2]
      four = tee.right[3]
      squares[playerIndex + one].classList.add('player')
      squares[playerIndex + two].classList.add('player')
      // Elle + 1
      squares[playerIndex + three].classList.add('player')
      // Elle -1
      squares[playerIndex + four].classList.add('player')
      // Elle -10
      playerPos = [playerIndex + one, playerIndex + two, playerIndex + three , playerIndex + four]
      playerIndex = playerPos[0]
      // console.log(playerIndex)
      return playerIndex

    }


    // const makeTee = (playerIndex) => {
    //
    //   squares[playerIndex].classList.add('player')
    //   squares[playerIndex - 11].classList.add('player')
    //   squares[playerIndex - 1].classList.add('player')
    //   squares[playerIndex + 9].classList.add('player')
    //   playerPos = [playerIndex, playerIndex - 11, playerIndex - 1, playerIndex + 9 ]
    //   playerIndex = playerPos[0]
    //
    //   return playerIndex
    //
    //
    // }

    // const makeElle = (playerIndex) => {
    //
    //   squares[playerIndex].classList.add('player')
    //   squares[playerIndex - 10].classList.add('player')
    //   squares[playerIndex - 11].classList.add('player')
    //   squares[playerIndex + 10].classList.add('player')
    //   playerPos = [playerIndex, playerIndex - 10, playerIndex - 11, playerIndex + 9 ]
    //   playerIndex = playerPos[0]
    //
    //   return playerIndex
    //
    //
    // }

    const makeZed = (playerIndex) => {

      squares[playerIndex].classList.add('player')
      squares[playerIndex - 1].classList.add('player')
      squares[playerIndex + 10].classList.add('player')
      squares[playerIndex + 11].classList.add('player')
      playerPos = [playerIndex, playerIndex - 1, playerIndex - 10, playerIndex + 11 ]
      playerIndex = playerPos[0]

      return playerIndex


    }

    const makeEye = (playerIndex) => {

      squares[playerIndex].classList.add('player')
      squares[playerIndex - 1].classList.add('player')
      squares[playerIndex - 2].classList.add('player')
      squares[playerIndex + 1].classList.add('player')
      playerPos = [playerIndex, playerIndex - 1, playerIndex - 2, playerIndex + 1 ]
      playerIndex = playerPos[0]

      return playerIndex


    }


    const makeOh = (playerIndex) => {

      squares[playerIndex].classList.add('player')
      squares[playerIndex - 1].classList.add('player')
      squares[playerIndex - 10].classList.add('player')
      squares[playerIndex - 11].classList.add('player')
      playerPos = [playerIndex, playerIndex - 1, playerIndex - 10, playerIndex + 11 ]
      playerIndex = playerPos[0]

      return playerIndex


    }




    //0, -11, -1, 9
    //0, -1, +1, 10
    //0, -9, +1, +11
    //0, -1, +1, -10


    const teeDown = () => {
      squares[playerIndex].classList.add('player')
      squares[playerIndex - 1].classList.add('player')
      squares[playerIndex  + 1].classList.add('player')
      squares[playerIndex + 10].classList.add('player')
      playerPos = [playerIndex, playerIndex - 1, playerIndex + 1, playerIndex + 10 ]
      playerIndex = playerPos[0]
      // console.log(playerIndex)
      return playerIndex
    }

    const teeLeft = () => {
      squares[playerIndex].classList.add('player')
      squares[playerIndex - 9].classList.add('player')
      // Elle + 1
      squares[playerIndex + 1].classList.add('player')
      // Elle -1
      squares[playerIndex + 11].classList.add('player')
      // Elle - 9
      playerPos = [playerIndex, playerIndex - 9, playerIndex + 1, playerIndex + 11 ]
      playerIndex = playerPos[0]
      // console.log(playerIndex)
      return playerIndex

    }



    const teeUp = () => {
      squares[playerIndex].classList.add('player')
      squares[playerIndex - 1].classList.add('player')
      squares[playerIndex  + 1].classList.add('player')
      squares[playerIndex -10 ].classList.add('player')
      playerPos[0] = playerIndex
      playerPos[1] = playerIndex - 1
      playerPos[2] = playerIndex + 1
      playerPos[3] = playerIndex -10
      playerIndex = playerPos[0]
      // console.log(playerIndex)
      return playerIndex
    }

    function rotatePress(e) {

      switch(e.keyCode) {
        case 49:
        // console.log(playerPos)

        clear()
        teeRight()

        break

        case 50:
        // console.log(playerPos)
        clear()
        teeDown()

        break


        case 51:
        // console.log(playerPos)
        clear()
        teeLeft()

        break


        case 52:
        clear()
        teeUp()
        // console.log(playerPos)
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
            // console.log(playerIndex)
            // console.log(playerPos)
            // playerPos.forEach(pos=>pos++)
            // console.log(playerPos)
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
          // console.log(playerIndex)
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
          makeTee(14)
        }





      }

      setInterval(moveDown, 300000000)


      // setInterval(moveDown, 100)

      // squares[playerPos[0]].classList.add('player')
      // squares[playerPos[1]].classList.add('player')
      // squares[playerPos[2]].classList.add('player')
      // squares[playerPos[3]].classList.add('player')

      window.addEventListener('keydown', leftRight)
      window.addEventListener('keydown', rotatePress)
    }




    init()




    // let shapes = [
    // 			[
    // 				[0,0,1],
    // 				[1,1,1],
    // 				[0,0,0]
    // 			],
    // 			[
    // 				[1,0,0], // 0, 1, 0 // 0, 0, 0 // 0, 1, 1
    // 				[1,1,1], // 0, 1, 0 // 1, 1, 1 // 0, 1, 0
    // 				[0,0,0]  // 1, 1, 0 // 0, 0, 1 // 0, 1, 0
    // 			],
    // 			[
    // 				[0,1,1], // 0, 1, 0 // 1, 1, 0 // 0, 0, 1
    // 				[1,1,0], // 0, 1, 1 // 0, 1, 1 // 0, 1, 1
    // 				[0,0,0]  // 0, 0, 1 // 0, 0, 0 // 0, 1, 0
    // 			],
    // 			[
    // 				[1,1,0],
    // 				[0,1,1],
    // 				[0,0,0]
    // 			],
    // 			[
    // 				[0,1,0],
    // 				[1,1,1],
    // 				[0,0,0]
    // 			],
    // 			[
    // 				[1,1],
    // 				[1,1]
    // 			],
    // 			[
    // 				[0,0,0,0],
    // 				[1,1,1,1],
    // 				[0,0,0,0],
    // 				[0,0,0,0]
    // 			]
    // 		];
    //

    //
    // fixedSquares.filter(square=> {
    //   return playerPos.every(pos => {
    //     pos !== square
    //   })
    // })


  })
