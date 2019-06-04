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
     const ninety = this.ninety.map(num=> playerIndex + num)
     const oneEighty = this.oneEighty.map(num=> playerIndex + num)
     const twoSeventy = this.twoSeventy.map(num=> playerIndex + num)
     const threeSixty = this.threeSixty.map(num=> playerIndex + num)
     if(playerPosArr === this.start) {
       playerPosArr = this.ninety.map(num=> playerIndex + num)
     } else if (equalityCheck(playerPosArr,ninety)) {
       playerPosArr = oneEighty
     } else if (equalityCheck(playerPosArr,oneEighty)){
       playerPosArr = twoSeventy
     } else if (equalityCheck(playerPosArr, twoSeventy)){
       playerPosArr = threeSixty
     } else if (equalityCheck(playerPosArr, threeSixty)){
       playerPosArr = ninety
   }
 }

 }


const tee = new Tetronimo('Tee', [14, 3, 13, 23], [0, -11, -1, 9], [0, -1, +1, 10],
[0, -9, +1, +11], [0, -1, +1, -10] )

const elle = new Tetronimo('Elle', [14, 4, 24, 25],  [0, 2, 1, -8], [0, -1, +1, 10],
[0, -9, +1, +11], [0, -1, +1, -10] )

const zed = new Tetronimo('Zed', [14, 4, 3, 15], [0, -10, -11, 1], [0, 1, +10, -9],
[0, -1, +10, +11], [0, -10, -1, 9] )

const eye = new Tetronimo('Eye', [14, 15, 13, 12],[0, 1, -1, -2], [0, -10, -20, +10],
[0, -1, 1, 2], [0, -10, +10, +20] )

const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, -9, -1], [0, -10, +1, +9],
[0, +1, +10, +9], [0, -10, +1, +11] )

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

  makeShape(35)
  // console.log(playerPosArr)
const update = () => {
  playerPosArr.forEach(pos =>
    squares[pos].classList.add('player'))
}

  const rotateShape = () => {

    switch(player) {
      case 'Tee':
      tee.turn(playerIndex)
      update()
      break
      case 'Elle':
      elle.turn(playerIndex)
      update()
      break
      case 'Zed':
      zed.turn(playerIndex)
      update()
      break
      case 'Eye':
      eye.turn(playerIndex)
      update()
      break
      case 'Ess':
      ess.turn(playerIndex)
      update()
      break
      case 'Jay':
      jay.turn(playerIndex)
      update()
      break
      case 'Oh':
      oh.turn(playerIndex)
      update()
      break
    }
//
//       case 'Zed':
//       TLZISJ0[2].turn(playerIndex)
//       playerPosArr.forEach(pos =>
//         squares[pos].classList.add('player'))
//
//         break
//
//               case '':
//               TLZISJ0[2].turn(playerIndex)
//               playerPosArr.forEach(pos =>
//                 squares[pos].classList.add('player'))
//
//       }
    }
    // }
    // playerPos =TLZISJ0[0].turnTwoSeventy(playerIndex)
    // for(let i = 0; i < 4; i++){
    //   playerPos = TLZISJ0[0].turnTwoSeventy(playerIndex)[i]
    //   for(let i = 0; i < squares.length; i ++) {
    //
    //     squares[playerPos].classList.add('player')
    //
    //   }
    // }






    function rotatePress(e) {

      switch(e.keyCode) {
        case 32:
        clear()
        rotateShape()

      }
    }





    window.addEventListener('keydown', rotatePress)

    console.log(player)



    //     case 37:
    //     if ((playerIndex % width > 0)&&(boardRightCheck(playerPos))){
    //
    //       playerPos[0] --
    //       playerPos[1] --
    //       playerPos[2] --
    //       playerPos[3] --
    //     }
    //     break
    //
    //     default: playerShouldMove = false
    //
    //   }
    //
    //
    //
    //
    // }





    // const moveDown = () => {
    //
    //   // console.log(spaceCheck(playerPos))
    //   // clear()
    //   if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
    //     clear()
    //     // console.log('moving down')
    //     playerPos[0] += width
    //     playerPos[1] += width
    //     playerPos[2] += width
    //     playerPos[3] += width
    //     squares[playerPos[0]].classList.add('player')
    //     squares[playerPos[1]].classList.add('player')
    //     squares[playerPos[2]].classList.add('player')
    //     squares[playerPos[3]].classList.add('player')
    //     playerIndex = playerPos[0]
    //     return playerPos
    //   } else {
    //     spaceCheck(playerPos)
    //
    //     squares[playerPos[0]].classList.add('fixed')
    //     squares[playerPos[1]].classList.add('fixed')
    //     squares[playerPos[2]].classList.add('fixed')
    //     squares[playerPos[3]].classList.add('fixed')
    //
    //
    //
    //     fixedSquares = fixedSquares.concat(playerPos)
    //
    //
    //     rowClear()
    //
    //     // console.log(playerIndex)
    //     //Call function to make new tetronimo
    //     // makeShape(14)
    //   }
    // }



    function init() {
      const grid = document.querySelector('.grid')
      for (let i = 0; i < width * (width*2) + (width*3); i ++) {
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
      for (let i = 229; i > 219 ; i --) {
        squares[i].style.opacity = 0
      }


    }













  })
