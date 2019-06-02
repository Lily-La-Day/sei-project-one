
window.addEventListener('DOMContentLoaded', (event) => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  let fixedSquares = []
  let shapeName = ''
  // const rows


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


  let TLZISJ0 = [
    {
      Name: 'Tee',
      start: [14, 3, 13, 23],
      zero: [0, -11, -1, 9],
      ninety: [0, -1, +1, 10],
      oneEighty: [0, -9, +1, +11],
      twoSeventy: [0, -1, +1, -10]
    },

    {
      Name: 'Elle',     //NOT RIGHT
      start: [14, 3, 13, 23],
      zero: [0, -11, -1, 9],
      ninety: [0, -1, +1, 10],
      oneEighty: [0, -9, +1, +11],
      twoSeventy: [0, -1, +1, -10]
    },


    {
      Name: 'Zed',
      start: [14, 4, 3, 15],
      zero: [0, -10, -11, 1],
      ninety: [0, 1, +10, -9],
      oneEighty: [0, -1, +10, +11],
      twoSeventy: [0, -10, -1, +9]
    },

    {
      Name: 'Eye',
      start: [14, 15, 13, 12],
      zero: [0, 1, -1, -2],
      ninety: [0, -10, -20, +10],
      oneEighty: [0, -1, 1, 2],
      twoSeventy: [0, -10, +10, +20]
    },

    {
      Name: 'Ess',
      start: [14, 4, 5, 13],
      zero: [0, -10, -9, -1],
      ninety: [0, -10, +1, +9],
      oneEighty: [0, +1, +10, +9],
      twoSeventy: [0, -10, +1, +11]

    },

   {
      Name: 'Jay',
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

  const makeShape = (playerIndex) => {
    let rando = 0
    // const adder = 0
    const randomNum = Math.floor(Math.random()*6)
    for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {

      // squares[playerIndex + adder].classList.add('player')

      rando = TLZISJ0[randomNum].zero[i]
      // const shapeName =TLZISJ0[randomNum].Name

      squares[playerIndex + rando].classList.add('player')
      playerPos.unshift(playerIndex+rando)
      playerPos = playerPos.slice(0,4)
    }
    playerIndex = playerPos[3]
   shapeName = TLZISJ0[randomNum].Name
   // console.log(randomNum)

return shapeName

  }


  function rowClear () {
const row1 = []

console.log(fixedSquares.map(square=>
  square === 193

))
// console.log(fixedSquares)
  // (parseFloat(square.innerHTML) > 190) {
  // row1.push(square)
  // console.log(row1)
}


//Need to find a way to get shapename out of makeshape function
//WORK THIS OUT FIRST THING IN THE MORNING!!!
function rotate90() {
if (shapeName === 'Tee'){
  playerPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])
console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Elle'){
  playerPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])
  console.log(playerIndex)
// console.log(`new position should be ${playerPos}`)
} else if (shapeName === 'Zed'){
  playerPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
playerPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])
    console.log(playerIndex)
  console.log(playerPos)
} else if (shapeName === 'Eye'){
  playerPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])
    console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Ess'){
  playerPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])
    console.log(playerIndex)
  console.log(playerPos)

} else if (shapeName === 'Jay'){
  playerPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])
    console.log(playerIndex)
  console.log(playerPos)

}  else if (shapeName === 'Oh'){
  playerPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
  playerPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
  playerPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
  playerPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
  console.log(playerIndex)
  console.log(playerPos)

}
}21

function rotate180() {
if (shapeName === 'Tee'){
  playerPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Elle'){
  playerPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
  console.log(playerIndex)
// console.log(`new position should be ${playerPos}`)
} else if (shapeName === 'Zed'){
  playerPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
playerPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
    console.log(playerIndex)
  console.log(playerPos)
} else if (shapeName === 'Eye'){
  playerPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
    console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Ess'){
  playerPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
    console.log(playerIndex)
  console.log(playerPos)

} else if (shapeName === 'Jay'){
  playerPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
    console.log(playerIndex)
  console.log(playerPos)

}  else if (shapeName === 'Oh'){
  playerPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
  playerPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
  playerPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
  playerPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
  console.log(playerIndex)
  console.log(playerPos)

}
}

function rotate270() {
if (shapeName === 'Tee'){
  playerPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Elle'){
  playerPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
  console.log(playerIndex)
// console.log(`new position should be ${playerPos}`)
} else if (shapeName === 'Zed'){
  playerPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
playerPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
    console.log(playerIndex)
  console.log(playerPos)
} else if (shapeName === 'Eye'){
  playerPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
    console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Ess'){
  playerPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
    console.log(playerIndex)
  console.log(playerPos)

} else if (shapeName === 'Jay'){
  playerPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
    console.log(playerIndex)
  console.log(playerPos)

}  else if (shapeName === 'Oh'){
  playerPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
  playerPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
  playerPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
  playerPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
  console.log(playerIndex)
  console.log(playerPos)

}
}

function rotate360() {
if (shapeName === 'Tee'){
  playerPos[0] = (playerIndex + TLZISJ0[0].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[0].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Elle'){
  playerPos[0] = (playerIndex + TLZISJ0[1].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[1].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
  console.log(playerIndex)
// console.log(`new position should be ${playerPos}`)
} else if (shapeName === 'Zed'){
  playerPos[0] = (playerIndex + TLZISJ0[2].zero[0])
playerPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[2].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
    console.log(playerIndex)
  console.log(playerPos)
} else if (shapeName === 'Eye'){
  playerPos[0] = (playerIndex + TLZISJ0[3].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[3].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[3].zero[3])
    console.log(playerIndex)
console.log(playerPos)
} else if (shapeName === 'Ess'){
  playerPos[0] = (playerIndex + TLZISJ0[4].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[4].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
    console.log(playerIndex)
  console.log(playerPos)

} else if (shapeName === 'Jay'){
  playerPos[0] = (playerIndex + TLZISJ0[5].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[5].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
    console.log(playerIndex)
  console.log(playerPos)

}  else if (shapeName === 'Oh'){
  playerPos[0] = (playerIndex + TLZISJ0[6].zero[0])
  playerPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
  playerPos[2] = (playerIndex + TLZISJ0[6].zero[2])
  playerPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
  console.log(playerIndex)
  console.log(playerPos)

}
}






  // rando = TLZISJ0[randomNum].zero[i]
  // // const shapeName =TLZISJ0[randomNum].Name
  //
  // squares[playerIndex + rando].classList.add('player')
  // playerPos.unshift(playerIndex+rando)
  // playerPos = playerPos.slice(0,4)

//   } else if (shapeName === 'Elle') {
//     console.log('L')
//   } else if (shapeName === 'Zed') {
//     console.log('Z')
//   } else if (shapeName === 'Eye') {
//     console.log('I')
//   } else if (shapeName === 'Ess') {
//     console.log('S')
//   } else if (shapeName === 'Jay') {
//     console.log('J')
//   } else if (shapeName === 'Oh') {
//     console.log('O')
//   }
// }









  function rotatePress(e) {

    switch(e.keyCode) {
      case 49:


      clear()
    rotate90()

      break

      case 50:

      clear()
      rotate180()

      break


      case 51:

      clear()
      rotate270()

      break


      case 52:
      clear()
      rotate360()

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

      pos !== fixedSquares[0] - 10 &&
      pos !== fixedSquares[1] - 10 &&
      pos !== fixedSquares[2] - 10 &&
      pos !== fixedSquares[3] - 10 &&
      pos !== fixedSquares[4] - 10 &&
      pos !== fixedSquares[5] - 10 &&
      pos !== fixedSquares[6] - 10 &&
      pos !== fixedSquares[7] - 10 &&
      pos !== fixedSquares[8] - 10 &&
      pos !== fixedSquares[9] - 10 &&
      pos !== fixedSquares[10] - 10 &&
      pos !== fixedSquares[11] - 10 &&
      pos !== fixedSquares[12] - 10 &&
      pos !== fixedSquares[13] - 10 &&
      pos !== fixedSquares[14] - 10 &&
      pos !== fixedSquares[15] - 10 &&
      pos !== fixedSquares[16] - 10 &&
      pos !== fixedSquares[17] - 10 &&
      pos !== fixedSquares[18] - 10 &&
      pos !== fixedSquares[19] - 10 &&
      pos !== fixedSquares[20] - 10 &&
      pos !== fixedSquares[21] - 10 &&
      pos !== fixedSquares[22] - 10 &&
      pos !== fixedSquares[23] - 10 &&
      pos !== fixedSquares[24] - 10 &&
      pos !== fixedSquares[25] - 10 &&
      pos !== fixedSquares[26] - 10 &&
      pos !== fixedSquares[27] - 10 &&
      pos !== fixedSquares[28] - 10 &&
      pos !== fixedSquares[29] - 10 &&
      pos !== fixedSquares[30] - 10 &&
      pos !== fixedSquares[31] - 10 &&
      pos !== fixedSquares[32] - 10 &&
      pos !== fixedSquares[33] - 10 &&
      pos !== fixedSquares[34] - 10 &&
      pos !== fixedSquares[35] - 10 &&
      pos !== fixedSquares[36] - 10 &&
      pos !== fixedSquares[37] - 10 &&
      pos !== fixedSquares[38] - 10 &&
      pos !== fixedSquares[39] - 10 &&
      pos !== fixedSquares[40] - 10 &&
      pos !== fixedSquares[41] - 10 &&
      pos !== fixedSquares[42] - 10 &&
      pos !== fixedSquares[43] - 10 &&
      pos !== fixedSquares[44] - 10 &&
      pos !== fixedSquares[45] - 10 &&
      pos !== fixedSquares[46] - 10 &&
      pos !== fixedSquares[47] - 10 &&
      pos !== fixedSquares[48] - 10 &&
      pos !== fixedSquares[49] - 10 &&
      pos !== fixedSquares[50] - 10 &&
      pos !== fixedSquares[51] - 10 &&
      pos !== fixedSquares[52] - 10 &&
      pos !== fixedSquares[53] - 10 &&
      pos !== fixedSquares[54] - 10 &&
      pos !== fixedSquares[55] - 10 &&
      pos !== fixedSquares[56] - 10 &&
      pos !== fixedSquares[57] - 10 &&
      pos !== fixedSquares[58] - 10 &&
      pos !== fixedSquares[59] - 10 &&
      pos !== fixedSquares[60] - 10 &&
      pos !== fixedSquares[61] - 10 &&
      pos !== fixedSquares[62] - 10 &&
      pos !== fixedSquares[63] - 10 &&
      pos !== fixedSquares[64] - 10 &&
      pos !== fixedSquares[65] - 10 &&
      pos !== fixedSquares[66] - 10 &&
      pos !== fixedSquares[67] - 10 &&
      pos !== fixedSquares[68] - 10 &&
      pos !== fixedSquares[69] - 10 &&
      pos !== fixedSquares[70] - 10 &&
      pos !== fixedSquares[71] - 10 &&
      pos !== fixedSquares[72] - 10 &&
      pos !== fixedSquares[73] - 10 &&
      pos !== fixedSquares[74] - 10 &&
      pos !== fixedSquares[75] - 10 &&
      pos !== fixedSquares[76] - 10 &&
      pos !== fixedSquares[77] - 10 &&
      pos !== fixedSquares[78] - 10 &&
      pos !== fixedSquares[79] - 10 &&
      pos !== fixedSquares[80] - 10 &&
      pos !== fixedSquares[81] - 10 &&
      pos !== fixedSquares[82] - 10 &&
      pos !== fixedSquares[83] - 10 &&
      pos !== fixedSquares[84] - 10 &&
      pos !== fixedSquares[85] - 10 &&
      pos !== fixedSquares[86]
    )
  }



  function leftRight(e) {
    if (onBoardCheck(playerPos)) {
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
    for (let i = 0; i < width * (width*2); i ++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.innerHTML = i
      squares.push(square)
      grid.append(square)


    }
    makeShape(playerIndex)



    const moveDown = () => {
      rowClear()
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
        // console.log(playerIndex)
        //Call function to make new tetronimo
        makeShape(14)
      }

    }

    setInterval(moveDown, 1000)

    window.addEventListener('keydown', leftRight)
    window.addEventListener('keydown', rotatePress)
  }

  init()

})

//
// function rotate() {
//   let player = ''
// TLZISJ0.forEach((tetronimo)  => {
// if (tetronimo.start.sort().some((num) => {
// playerPos.sort().some((numtwo) => {
//   num === numtwo
// }
// )
// }
// )
// ) {
// console.log(playerPos)
// }
// }
//
//
// )
//
// }


// = 'Tee') {
//   console.log('T')
// } else if (TLZISJ0[i].name = 'Elle') {
//   console.log('L')
// } else if (TLZISJ0[i].name = 'Zed') {
//   console.log('Z')
// } else if (TLZISJ0[i].name = 'Eye') {
//   console.log('I')
// } else if (TLZISJ0[i].name = 'Ess') {
//   console.log('S')
// } else if (TLZISJ0[i].name = 'Jay') {
//   console.log('J')
// } else if (TLZISJ0[i].name = 'Oh') {
//   console.log('O')
// }
