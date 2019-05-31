window.addEventListener('DOMContentLoaded', (event) => {

  const width = 10
  const squares = []
  let playerIndex = 25
  let playerPos = []

  function movePlayer() {
    clear()
    // squares.forEach(square => square.classList.remove('player'))
    squares[playerIndex].classList.add('player')
    console.log(`the player should now move to position ${playerIndex}`)

  }

  // const teeFunc = () => {
  //   // if (document.querySelector('.player')) {
  //   //   console.log('active')
  //
  //   squares[playerIndex + 10].classList.add('player')
  //   squares[playerIndex + 11].classList.add('player')
  //   squares[playerIndex + 9].classList.add('player')
  //
  // }

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
  }

  const teeLeft = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 9].classList.add('player')
    squares[playerIndex + 1].classList.add('player')
    squares[playerIndex + 11].classList.add('player')
    playerPos = [playerIndex, playerIndex - 9, playerIndex + 1, playerIndex + 11 ]
  }

  const teeDown = () => {
    squares[playerIndex].classList.add('player')
    squares[playerIndex - 1].classList.add('player')
    squares[playerIndex  + 1].classList.add('player')
    squares[playerIndex + 10].classList.add('player')
    playerPos = [playerIndex, playerIndex - 1, playerIndex + 1, playerIndex + 10 ]
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
  }

  function rotatePress(e) {

    switch(e.keyCode) {
      case 49:
      console.log(playerPos)
      clear()
      teeRight()

      break

      case 50:
      console.log(playerPos)
      clear()
      teeDown()

      break


      case 51:
      console.log(playerPos)
      clear()
      teeLeft()

      break


      case 52:
      clear()
      teeUp()
      console.log(playerPos)
      break



    }
  }



  function leftRight(e) {

    let playerShouldMove = true

    switch(e.keyCode) {
      case 39:
      if (playerIndex % width < width - 1){
        // console.log(playerIndex)
        playerIndex ++
      }
      break
      case 37:
      if (playerIndex % width > 0){
        // console.log(playerIndex)
        playerIndex --
      }
      // break
      // case 38:
      // if (playerIndex - width >= 0){
      //   console.log(playerIndex)
      //
      //   playerIndex -= width
      // }
      // break
      // case 40:
      // if (playerIndex + width < width * width * 2){
      //   console.log(playerIndex)
      //   playerIndex += width
      // }
      break
      default: playerShouldMove = false
      console.log(playerIndex)
    }
    if (playerShouldMove) movePlayer()

  }







  function init() {

    //parent grid div
    const grid = document.querySelector('.grid')


    console.log(grid)


    for (let i = 0; i < width * (width*2); i ++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.innerHTML = i
      squares.push(square)
      grid.append(square)

    }
    squares[playerIndex].classList.add('player')

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
