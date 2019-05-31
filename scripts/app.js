window.addEventListener('DOMContentLoaded', (event) => {

  const width = 10
  const squares = []
  let playerIndex = 25
  let playerPos = [0,0,0,0]
  let newPos = [0,0,0,0]


  function movePlayer() {
    // console.log(playerPos)
    clear()
    // squares.forEach(square => square.classList.remove('player'))
    // console.log(newPos)
    // squares[playerIndex].classList.add('player')
    squares[playerPos[0]].classList.add('player')
    squares[playerPos[1]].classList.add('player')
    squares[playerPos[2]].classList.add('player')
    squares[playerPos[3]].classList.add('player')
    // console.log(`the player should now move to position ${playerIndex}`)

  }
  const clear = () => {
    squares.forEach(square =>
      square.classList.remove('player')
    )
  }

  const teeRight = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 11].classList.add('player')
    squares[playerIndex - 1].classList.add('player')
    squares[playerIndex + 9].classList.add('player')
    playerPos = [playerIndex, playerIndex - 11, playerIndex - 1, playerIndex + 9 ]
    return playerPos
  }

  const teeLeft = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 9].classList.add('player')
    squares[playerIndex + 1].classList.add('player')
    squares[playerIndex + 11].classList.add('player')
    playerPos = [playerIndex, playerIndex - 9, playerIndex + 1, playerIndex + 11 ]
    return playerPos
  }

  const teeDown = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 1].classList.add('player')
    squares[playerIndex  + 1].classList.add('player')
    squares[playerIndex + 10].classList.add('player')
    playerPos = [playerIndex, playerIndex - 1, playerIndex + 1, playerIndex + 10 ]
    return playerPos
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
    return playerPos
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



  function leftRight(e) {
    if (onBoardCheck(playerPos)) {
      let playerShouldMove = true

      switch(e.keyCode) {
        case 39:
        if (playerIndex % width < width - 1){
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
        if (playerIndex % width > 0){

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

    // const onBoardCheck = (playerPos) => {
    //   return playerPos.every(pos =>
    //     pos >= 0 && pos < 190
    //
    //   )
    // }

    const moveDown = () => {

      // clear()
      if (onBoardCheck(playerPos)) {
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
        } else {

          squares[playerPos[0]].classList.add('fixed')
          squares[playerPos[1]].classList.add('fixed')
          squares[playerPos[2]].classList.add('fixed')
          squares[playerPos[3]].classList.add('fixed')

        



      }





    }

    setInterval(moveDown, 1000)


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


})
