window.addEventListener('DOMContentLoaded', (event) => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  // let newPos = [0,0,0,0]
  let fixedSquares = []


  //basic function to update squares to be coloured as tetonimo moves on board
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

  const makeTee = (playerIndex) => {

    squares[playerIndex].classList.add('player')
    squares[playerIndex - 11].classList.add('player')
    squares[playerIndex - 1].classList.add('player')
    squares[playerIndex + 9].classList.add('player')
    playerPos = [playerIndex, playerIndex - 11, playerIndex - 1, playerIndex + 9 ]
    playerIndex = playerPos[0]

    return playerIndex


  }

  const teeRight = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 11].classList.add('player')
    squares[playerIndex - 1].classList.add('player')
    squares[playerIndex + 9].classList.add('player')
    playerPos = [playerIndex, playerIndex - 11, playerIndex - 1, playerIndex + 9 ]
    playerIndex = playerPos[0]
    // console.log(playerIndex)
    return playerIndex

  }

  const teeLeft = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 9].classList.add('player')
    squares[playerIndex + 1].classList.add('player')
    squares[playerIndex + 11].classList.add('player')
    playerPos = [playerIndex, playerIndex - 9, playerIndex + 1, playerIndex + 11 ]
    playerIndex = playerPos[0]
    // console.log(playerIndex)
    return playerIndex

  }

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
  makeTee(playerIndex)



  const moveDown = () => {
// console.log(spaceCheck(playerPos))
    // clear()
    if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
          clear()
          console.log('moving down')
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
          console.log(fixedSquares)
          //Call function to make new tetronimo
          makeTee(14)
}





  }

  setInterval(moveDown, 1000)
32

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
