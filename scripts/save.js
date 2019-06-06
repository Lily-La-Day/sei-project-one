// window.addEventListener('DOMContentLoaded', () => {
//
//   const width = 10
//   const squares = []
//   let playerIndex = 14
//   let playerPosArr = [0,0,0,0]
//   let fixedSquares = []
//   let shapeName = ''
//
//
//
//
//
//   const onBoardCheck = (playerPosArr) => {
//     return playerPosArr.every(pos =>
//       pos >= 0 && pos < 190
//
//     )
//   }
//
//   function isNotNineMoreThanRoundNumber(currentValue) {
//     if ((currentValue - 9) %10 !== 0) {
//       return currentValue
//     }
//   }
//
//   function isNotNineLessThanRoundNumber(currentValue) {
//     if ((currentValue + 10) %10 !== 0) {
//       return currentValue
//     }
//   }
//   const boardLeftCheck = (playerPosArr) => {
//     return playerPosArr.every(isNotNineMoreThanRoundNumber)
//   }
//
//   const boardRightCheck = (playerPosArr) => {
//     return playerPosArr.every(isNotNineLessThanRoundNumber)
//   }
//
//
//
//
//   //basic function to update squares to be coloured as tetronimo moves on board
//   function movePlayer() {
//     clear()
//     squares[playerPosArr[0]].classList.add('player')
//     squares[playerPosArr[1]].classList.add('player')
//     squares[playerPosArr[2]].classList.add('player')
//     squares[playerPosArr[3]].classList.add('player')
//   }
//
//   //clears squares as tetromino moves
//   const clear = () => {
//     squares.forEach(square =>
//       square.classList.remove('player')
//     )
//   }
//
//
//   // const TLZISJ0 = [
//   //   {
//   //     Name: 'Tee',
//   //     start: [14, 3, 13, 23],
//   //     zero: [0, -11, -1, 9],
//   //     ninety: [0, -1, +1, 10],
//   //     oneEighty: [0, -9, +1, +11],
//   //     twoSeventy: [0, -1, +1, -10]
//   //   },
//   //
//   //   {
//   //     Name: 'Elle',     //NOT RIGHT
//   //     start: [14, 3, 13, 23],
//   //     zero: [0, -11, -1, 9],
//   //     ninety: [0, -1, +1, 10],
//   //     oneEighty: [0, -9, +1, +11],
//   //     twoSeventy: [0, -1, +1, -10]
//   //   },
//   //
//   //
//   //   {
//   //     Name: 'Zed',
//   //     start: [14, 4, 3, 15],
//   //     zero: [0, -10, -11, 1],
//   //     ninety: [0, 1, +10, -9],
//   //     oneEighty: [0, -1, +10, +11],
//   //     twoSeventy: [0, -10, -1, +9]
//   //   },
//   //
//   //   {
//   //     Name: 'Eye',
//   //     start: [14, 15, 13, 12],
//   //     zero: [0, 1, -1, -2],
//   //     ninety: [0, -10, -20, +10],
//   //     oneEighty: [0, -1, 1, 2],
//   //     twoSeventy: [0, -10, +10, +20]
//   //   },
//   //
//   //   {
//   //     Name: 'Ess',
//   //     start: [14, 4, 5, 13],
//   //     zero: [0, -10, -9, -1],
//   //     ninety: [0, -10, +1, +11],
//   //     oneEighty: [0, +1, +10, +9],
//   //     twoSeventy: [0, -10, +1, +11]
//   //
//   //   },
//   //
//   //   {
//   //     Name: 'Jay',
//   //     start: [14, 15, 13, 25],
//   //     zero: [0, +1, -1, +11],
//   //     ninety: [0, -10, -9, +10],
//   //     oneEighty: [0, -1, +1, -11],
//   //     twoSeventy: [0, +10, +9, -10]
//   //
//   //   },
//   //
//   //   {
//   //     name: 'Oh',
//   //     start: [14, 13, 4, 3],
//   //     zero: [0, -1, -10, -11],
//   //     ninety: [0, -1, -10, -11],
//   //     oneEighty: [ 0, -1, -10, -11],
//   //     twoSeventy: [0, -1, -10, -11]
//   //
//   //   }
//   //
//   // ]
//   //
//   // const makeShape = (playerIndex) => {
//   //   let rando = 0
//   //
//   //   const randomNum = Math.floor(Math.random()*7)
//   //   for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {
//   //     rando = TLZISJ0[randomNum].zero[i]
//   //     squares[playerIndex + rando].classList.add('player')
//   //     playerPos.unshift(playerIndex+rando)
//   //     playerPos = playerPos.slice(0,4)
//   //   }
//   //   playerIndex = playerPos[3]
//   //   shapeName = TLZISJ0[randomNum].Name
//   //   console.log(shapeName)
//   //   return shapeName
//   //
//   // }
//
//
//
//   function rowClear() {
//
//     const rows =[[],[]]
//
//     rows[0] = squares.filter((el, index) =>
//     (index < 200 && index > 189 && el.classList.contains('fixed'))
//   )
//   rows[1] = squares.filter((el, index) =>
//   (index < 190 && index > 179 && el.classList.contains('fixed'))
// )
// rows[2] = squares.filter((el, index) =>
// (index < 180 && index > 169 && el.classList.contains('fixed'))
// )
// rows[3] = squares.filter((el, index) =>
// (index < 170 && index > 159 && el.classList.contains('fixed'))
// )
// rows[4] = squares.filter((el, index) =>
// (index < 160 && index > 149 && el.classList.contains('fixed'))
// )
// rows[5] = squares.filter((el, index) =>
// (index < 150 && index > 139 && el.classList.contains('fixed'))
// )
// rows[6] = squares.filter((el, index) =>
// (index < 140 && index > 129 && el.classList.contains('fixed'))
// )
// rows[7] = squares.filter((el, index) =>
// (index < 130 && index > 119 && el.classList.contains('fixed'))
// )
//
// rows[9] = squares.filter((el, index) =>
// (index < 120 && index > 109 && el.classList.contains('fixed'))
// )
// rows[10] = squares.filter((el, index) =>
// (index < 110 && index > 99 && el.classList.contains('fixed'))
// )
// rows[11] = squares.filter((el, index) =>
// (index < 100 && index > 89 && el.classList.contains('fixed'))
// )
// rows[12] = squares.filter((el, index) =>
// (index < 90 && index > 79 && el.classList.contains('fixed'))
// )
// rows[13] = squares.filter((el, index) =>
// (index < 80 && index > 69 && el.classList.contains('fixed'))
// )
// rows[14] = squares.filter((el, index) =>
// (index < 70 && index > 59 && el.classList.contains('fixed'))
// )
// rows[15] = squares.filter((el, index) =>
// (index < 60 && index > 49 && el.classList.contains('fixed'))
// )
// rows[16] = squares.filter((el, index) =>
// (index < 50 && index > 39 && el.classList.contains('fixed'))
// )
// rows[17] = squares.filter((el, index) =>
// (index < 40 && index > 29 && el.classList.contains('fixed'))
// )
// rows[18] = squares.filter((el, index) =>
// (index < 30 && index > 19 && el.classList.contains('fixed'))
// )
// rows[19] = squares.filter((el, index) =>
// (index < 20 && index > 9 && el.classList.contains('fixed'))
// )
// rows[20] = squares.filter((el, index) =>
// (index < 10 && index > 0 && el.classList.contains('fixed'))
// )
//
// rows.forEach((row) => {
//   if(row.length === 10){
//     console.log('row is full')
//     for(let i = 0; i < squares.length; i++) {
//       if(squares[i].className === 'grid-item fixed') {
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-two')
//         squares[i].classList.remove('fixed')
//         row = []
//        if (squares[i].className === 'grid-item fixed-two') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-three')
//         squares[i].classList.remove('fixed-two')
//         row = []
//        if (squares[i].className === 'grid-item fixed-three') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-four')
//         squares[i].classList.remove('fixed-three')
//         row = []
//         if (squares[i].className === 'grid-item fixed-four') {
//          console.log('second row')
//          console.log(squares[i])
//          squares[i+10].classList.add('fixed-five')
//          squares[i].classList.remove('fixed-four')
//
//          row = []
//          if (squares[i].className === 'grid-item fixed-four') {
//           console.log('second row')
//           console.log(squares[i])
//           squares[i+10].classList.add('fixed-five')
//           squares[i].classList.remove('fixed-four')
//
//           row = []
//           if (squares[i].className === 'grid-item fixed-five') {
//            console.log('second row')
//            console.log(squares[i])
//            squares[i+10].classList.add('fixed-six')
//            squares[i].classList.remove('fixed-five')
//
//            row = []
//            if (squares[i].className === 'grid-item fixed-six') {
//             console.log('second row')
//             console.log(squares[i])
//             squares[i+10].classList.add('fixed-seven')
//             squares[i].classList.remove('fixed-six')
//
//             row = []
//             if (squares[i].className === 'grid-item fixed-seven') {
//              console.log('second row')
//              console.log(squares[i])
//              squares[i+10].classList.add('fixed-eight')
//              squares[i].classList.remove('fixed-seven')
//
//              row = []
//              if (squares[i].className === 'grid-item fixed-eight') {
//               console.log('second row')
//               console.log(squares[i])
//               squares[i+10].classList.add('fixed-nine')
//               squares[i].classList.remove('fixed-eight')
//
//               row = []
//               if (squares[i].className === 'grid-item fixed-nine') {
//                console.log('second row')
//                console.log(squares[i])
//                squares[i+10].classList.add('fixed-ten')
//                squares[i].classList.remove('fixed-nine')
//
//                row = []
//                if (squares[i].className === 'grid-item fixed-ten') {
//                 console.log('second row')
//                 console.log(squares[i])
//                 squares[i+10].classList.add('fixed-eleven')
//                 squares[i].classList.remove('fixed-ten')
//
//                 row = []
//
//               }
//              }
//             }
//            }
//           }
//          }
//
//         }
//        }
//       }
//     }
//   }
// }
// }
// })
// }
//
// class Tetronimo{
//
// constructor(name, start, ninety, oneEighty,
//   twoSeventy, threeSixty) {
//
//     this.name = name
//     this.start = start
//     this.ninety = ninety
//     this.oneEighty = oneEighty
//     this.twoSeventy = twoSeventy
//     this.threeSixty = threeSixty
//
//   }
//
//   create(playerIndex) {
//     return this.start
//   }
//
//   turn(playerIndex) {
//     const start = this.start
//     const ninety = this.ninety.map(num=> playerIndex + num)
//     const oneEighty = this.oneEighty.map(num=> playerIndex + num)
//     const twoSeventy = this.twoSeventy.map(num=> playerIndex + num)
//     const threeSixty = this.threeSixty.map(num=> playerIndex + num)
//     if(playerPosArr === this.start) {
//       console.log('ninety')
//       playerPosArr = ninety
//     } else if (equalityCheck(playerPosArr, ninety)) {
//       console.log('oneEighty', playerPosArr, ninety)
//       playerPosArr = oneEighty
//     } else if (equalityCheck(playerPosArr,oneEighty)){
//       console.log('twoSeventy', playerPosArr,oneEighty)
//       playerPosArr = twoSeventy
//     } else if (equalityCheck(playerPosArr, twoSeventy)){
//       console.log('threeSixty', playerPosArr, threeSixty)
//       playerPosArr = threeSixty
//     } else if (equalityCheck(playerPosArr, threeSixty)){
//       console.log('ninety', playerPosArr, threeSixty)
//       playerPosArr = ninety
//     }
//     return playerPosArr
//   }
//
// }
//
//
// const tee = new Tetronimo('Tee', [14, 3, 13, 23], [0, -11, -1, 9], [0, -1, +1, 10],
// [0, -9, +1, +11], [0, -1, +1, -10] )
//
// const elle = new Tetronimo('Elle', [14, 4, 24, 25],  [0, 10, 1, 2], [0, -1, +9, 19],
// [0, 10, 9, 8], [0, -1, +1, -10] )
//
// const zed = new Tetronimo('Zed', [14, 4, 3, 15], [0, -10, -11, 1], [0, 1, +10, -9],
// [0, -1, +10, +11], [0, -10, -1, 9] )
//
// const eye = new Tetronimo('Eye', [14, 15, 13, 12],[0, 1, -1, -2], [0, -10, -20, +10],
// [0, -1, 1, 2], [0, -10, +10, +20] )
//
// const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, +1, +11], [0, -10, +1, +11],
// [0, +1, +10, +9], [0, -10, +1, +11])
//
// const jay = new Tetronimo('Jay', [14, 15, 13, 25], [0, +1, -1, +11], [0, -10, -9, +10],
// [0, -1, +1, -11], [0, +10, +9, -10] )
//
// const oh = new Tetronimo('Oh', [14, 13, 4, 3], [0, 0, 0, 0], [0, 0, 0, 0],
// [0, 0, 0, 0], [0, 0, 0, 0] )
//
//
//
//
// const TLZISJ0 = [tee, elle, zed, eye, ess, jay, oh ]
//
//
//
// const makeShape = () => {
//   const randomNum = Math.floor(Math.random()*3 + 3)
//   for (let i = 0; i < 4; i++) {
//     playerPos = TLZISJ0[randomNum].start[i]
//     playerPosArr = TLZISJ0[randomNum].start
//     for(let i = 0; i < squares.length; i ++) {
//
//       squares[playerPos].classList.add('player')
//       player = TLZISJ0[randomNum].name
//     }
//
//   }
//   return player
// }
//
//
//
//
//
// //Need to find a way to get shapename out of makeshape function
// //WORK THIS OUT FIRST THING IN THE MORNING!!!
// // function rotate90() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate180() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate270() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate360() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// const equalityCheck = (arrayOne, arrayTwo) => {
//
// for(let i = 0; i < arrayOne.length; i++) {
//   for(let j = 0; j < arrayTwo.length; j++) {
//     if (arrayOne.sort()[i] === arrayTwo.sort()[j]){
//       return true
//
//     } else {
//       return false
//     }
//
//
//   }
// }
// }
//
//   const update = () => {
//     playerPosArr.forEach(pos =>
//       squares[pos].classList.add('player'))
//     }
//
// const rotateShape = (e) => {
//   switch(e.keyCode) {
//     case 32:
//     switch(player) {
//       case 'Tee':
//       clear()
//       tee.turn(playerIndex)
//       update()
//       break
//       case 'Elle':
//       clear()
//       elle.turn(playerIndex)
//       update()
//       break
//       case 'Zed':
//       clear()
//       zed.turn(playerIndex)
//       update()
//       break
//       case 'Eye':
//       clear()
//       eye.turn(playerIndex)
//       update()
//       break
//       case 'Ess':
//       clear()
//       ess.turn(playerIndex)
//       update()
//       break
//       case 'Jay':
//       clear()
//       jay.turn(playerIndex)
//       update()
//       break
//       case 'Oh':
//       clear()
//       oh.ninety
//       update()
//       break
//     }
//   }
// }
//
//
// function checkBelow(blockIndex){
//   return fixedSquares.includes(blockIndex + 10)
// }
//
// function checkLeft(blockIndex){
//   return fixedSquares.includes(blockIndex - 1)
// }
//
// function checkRight(blockIndex){
//   return fixedSquares.includes(blockIndex + 1)
// }
//
// // //function to check if player pos is same as index of any div with the class fixed
// const spaceCheck = (playerPos) => {
//   function checkLeft(blockIndex){
//     return fixedSquares.includes(blockIndex - 1)
//   }
//
//   function checkRight(blockIndex){
//     return fixedSquares.includes(blockIndex + 1)
//   }
//   let checker = true
//   playerPos.forEach(block => {
//     if(checkBelow(block)) checker = false
//   })
//
//   return checker
// }
//
// function right() {
//   console.log(playerPosArr)
//   clear()
//   playerPosArr[0] ++
//   playerPosArr[1] ++
//   playerPosArr[2] ++
//   playerPosArr[3] ++
//
// }
// function left() {
//   console.log(playerPosArr)
//   clear()
//   playerPosArr[0] --
//   playerPosArr[1] --
//   playerPosArr[2] --
//   playerPosArr[3] --
//
// }
//
//
//
//     function leftRight(e) {
//       switch(e.keyCode) {
//         case 39:
//         if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPosArr))){
//           right()
//         }
//         break
//         case 37:
//         if ((playerIndex % width > 0)&&(boardRightCheck(playerPosArr))){
//           left()
//         }
//
//
//       }
//
//     }
//
//
//
//
//
//
// function init() {
// const grid = document.querySelector('.grid')
//   for (let i = 0; i < width * (width*2) + width; i ++) {
//     const square = document.createElement('div')
//     square.classList.add('grid-item')
//     square.innerHTML = i
//     squares.push(square)
//     grid.append(square)
//
//
//   }
//   for (let i = 200; i < 210 ; i ++) {
//     squares[i].dataset.row = 0
//     squares[i].style.opacity = 0
//   }
//
//
//
//
//
//   const moveDown = () => {
//
//     if (onBoardCheck(playerPosArr) && spaceCheck(playerPosArr)) {
//       clear()
//       playerPosArr[0] += width
//       playerPosArr[1] += width
//       playerPosArr[2] += width
//       playerPosArr[3] += width
//       squares[playerPosArr[0]].classList.add('player')
//       squares[playerPosArr[1]].classList.add('player')
//       squares[playerPosArr[2]].classList.add('player')
//       squares[playerPosArr[3]].classList.add('player')
//       playerIndex = playerPosArr[0]
//       return playerPosArr
//     } else {
//       spaceCheck(playerPosArr)
//
//       squares[playerPosArr[0]].classList.add('fixed')
//       squares[playerPosArr[1]].classList.add('fixed')
//       squares[playerPosArr[2]].classList.add('fixed')
//       squares[playerPosArr[3]].classList.add('fixed')
//
//
//
//       fixedSquares = fixedSquares.concat(playerPosArr)
//
//       rowClear()
//       makeShape()
//     }
//
//   }
//
//   // setInterval(rowClear, 3000 )
//
//
//   const moveDownAuto = () => moveDown()
//
//   const moveDownPress = (e) => {
//     switch(e.keyCode) {
//       case 40: moveDown()
//     }
//   }
//
//   setInterval(moveDown, 500)
//
//   window.addEventListener('keydown', leftRight)
//     window.addEventListener('keydown', rotateShape)
//   window.addEventListener('keydown', moveDownPress)
// }
//
// init()
//
// })
//
//
//
//
// window.addEventListener('DOMContentLoaded', () => {
//
//   const width = 10
//   const squares = []
//   let playerIndex = 14
//   let playerPosArr = [0,0,0,0]
//   let fixedSquares = []
//   let shapeName = ''
//
//
//
//
//
//   const onBoardCheck = (playerPosArr) => {
//     return playerPosArr.every(pos =>
//       pos >= 0 && pos < 190
//
//     )
//   }
//
//   function isNotNineMoreThanRoundNumber(currentValue) {
//     if ((currentValue - 9) %10 !== 0) {
//       return currentValue
//     }
//   }
//
//   function isNotNineLessThanRoundNumber(currentValue) {
//     if ((currentValue + 10) %10 !== 0) {
//       return currentValue
//     }
//   }
//   const boardLeftCheck = (playerPosArr) => {
//     return playerPosArr.every(isNotNineMoreThanRoundNumber)
//   }
//
//   const boardRightCheck = (playerPosArr) => {
//     return playerPosArr.every(isNotNineLessThanRoundNumber)
//   }
//
//
//
//
//   //basic function to update squares to be coloured as tetronimo moves on board
//   function movePlayer() {
//     clear()
//     squares[playerPosArr[0]].classList.add('player')
//     squares[playerPosArr[1]].classList.add('player')
//     squares[playerPosArr[2]].classList.add('player')
//     squares[playerPosArr[3]].classList.add('player')
//   }
//
//   //clears squares as tetromino moves
//   const clear = () => {
//     squares.forEach(square =>
//       square.classList.remove('player')
//     )
//   }
//
//
//   // const TLZISJ0 = [
//   //   {
//   //     Name: 'Tee',
//   //     start: [14, 3, 13, 23],
//   //     zero: [0, -11, -1, 9],
//   //     ninety: [0, -1, +1, 10],
//   //     oneEighty: [0, -9, +1, +11],
//   //     twoSeventy: [0, -1, +1, -10]
//   //   },
//   //
//   //   {
//   //     Name: 'Elle',     //NOT RIGHT
//   //     start: [14, 3, 13, 23],
//   //     zero: [0, -11, -1, 9],
//   //     ninety: [0, -1, +1, 10],
//   //     oneEighty: [0, -9, +1, +11],
//   //     twoSeventy: [0, -1, +1, -10]
//   //   },
//   //
//   //
//   //   {
//   //     Name: 'Zed',
//   //     start: [14, 4, 3, 15],
//   //     zero: [0, -10, -11, 1],
//   //     ninety: [0, 1, +10, -9],
//   //     oneEighty: [0, -1, +10, +11],
//   //     twoSeventy: [0, -10, -1, +9]
//   //   },
//   //
//   //   {
//   //     Name: 'Eye',
//   //     start: [14, 15, 13, 12],
//   //     zero: [0, 1, -1, -2],
//   //     ninety: [0, -10, -20, +10],
//   //     oneEighty: [0, -1, 1, 2],
//   //     twoSeventy: [0, -10, +10, +20]
//   //   },
//   //
//   //   {
//   //     Name: 'Ess',
//   //     start: [14, 4, 5, 13],
//   //     zero: [0, -10, -9, -1],
//   //     ninety: [0, -10, +1, +11],
//   //     oneEighty: [0, +1, +10, +9],
//   //     twoSeventy: [0, -10, +1, +11]
//   //
//   //   },
//   //
//   //   {
//   //     Name: 'Jay',
//   //     start: [14, 15, 13, 25],
//   //     zero: [0, +1, -1, +11],
//   //     ninety: [0, -10, -9, +10],
//   //     oneEighty: [0, -1, +1, -11],
//   //     twoSeventy: [0, +10, +9, -10]
//   //
//   //   },
//   //
//   //   {
//   //     name: 'Oh',
//   //     start: [14, 13, 4, 3],
//   //     zero: [0, -1, -10, -11],
//   //     ninety: [0, -1, -10, -11],
//   //     oneEighty: [ 0, -1, -10, -11],
//   //     twoSeventy: [0, -1, -10, -11]
//   //
//   //   }
//   //
//   // ]
//   //
//   // const makeShape = (playerIndex) => {
//   //   let rando = 0
//   //
//   //   const randomNum = Math.floor(Math.random()*7)
//   //   for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {
//   //     rando = TLZISJ0[randomNum].zero[i]
//   //     squares[playerIndex + rando].classList.add('player')
//   //     playerPos.unshift(playerIndex+rando)
//   //     playerPos = playerPos.slice(0,4)
//   //   }
//   //   playerIndex = playerPos[3]
//   //   shapeName = TLZISJ0[randomNum].Name
//   //   console.log(shapeName)
//   //   return shapeName
//   //
//   // }
//
//
//
//   function rowClear() {
//
//     const rows =[[],[]]
//
//     rows[0] = squares.filter((el, index) =>
//     (index < 200 && index > 189 && el.classList.contains('fixed'))
//   )
//   rows[1] = squares.filter((el, index) =>
//   (index < 190 && index > 179 && el.classList.contains('fixed'))
// )
// rows[2] = squares.filter((el, index) =>
// (index < 180 && index > 169 && el.classList.contains('fixed'))
// )
// rows[3] = squares.filter((el, index) =>
// (index < 170 && index > 159 && el.classList.contains('fixed'))
// )
// rows[4] = squares.filter((el, index) =>
// (index < 160 && index > 149 && el.classList.contains('fixed'))
// )
// rows[5] = squares.filter((el, index) =>
// (index < 150 && index > 139 && el.classList.contains('fixed'))
// )
// rows[6] = squares.filter((el, index) =>
// (index < 140 && index > 129 && el.classList.contains('fixed'))
// )
// rows[7] = squares.filter((el, index) =>
// (index < 130 && index > 119 && el.classList.contains('fixed'))
// )
//
// rows[9] = squares.filter((el, index) =>
// (index < 120 && index > 109 && el.classList.contains('fixed'))
// )
// rows[10] = squares.filter((el, index) =>
// (index < 110 && index > 99 && el.classList.contains('fixed'))
// )
// rows[11] = squares.filter((el, index) =>
// (index < 100 && index > 89 && el.classList.contains('fixed'))
// )
// rows[12] = squares.filter((el, index) =>
// (index < 90 && index > 79 && el.classList.contains('fixed'))
// )
// rows[13] = squares.filter((el, index) =>
// (index < 80 && index > 69 && el.classList.contains('fixed'))
// )
// rows[14] = squares.filter((el, index) =>
// (index < 70 && index > 59 && el.classList.contains('fixed'))
// )
// rows[15] = squares.filter((el, index) =>
// (index < 60 && index > 49 && el.classList.contains('fixed'))
// )
// rows[16] = squares.filter((el, index) =>
// (index < 50 && index > 39 && el.classList.contains('fixed'))
// )
// rows[17] = squares.filter((el, index) =>
// (index < 40 && index > 29 && el.classList.contains('fixed'))
// )
// rows[18] = squares.filter((el, index) =>
// (index < 30 && index > 19 && el.classList.contains('fixed'))
// )
// rows[19] = squares.filter((el, index) =>
// (index < 20 && index > 9 && el.classList.contains('fixed'))
// )
// rows[20] = squares.filter((el, index) =>
// (index < 10 && index > 0 && el.classList.contains('fixed'))
// )
//
// rows.forEach((row) => {
//   if(row.length === 10){
//     console.log('row is full')
//     for(let i = 0; i < squares.length; i++) {
//       if(squares[i].className === 'grid-item fixed') {
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-two')
//         squares[i].classList.remove('fixed')
//         row = []
//        if (squares[i].className === 'grid-item fixed-two') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-three')
//         squares[i].classList.remove('fixed-two')
//         row = []
//        if (squares[i].className === 'grid-item fixed-three') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-four')
//         squares[i].classList.remove('fixed-three')
//         row = []
//         if (squares[i].className === 'grid-item fixed-four') {
//          console.log('second row')
//          console.log(squares[i])
//          squares[i+10].classList.add('fixed-five')
//          squares[i].classList.remove('fixed-four')
//
//          row = []
//          if (squares[i].className === 'grid-item fixed-four') {
//           console.log('second row')
//           console.log(squares[i])
//           squares[i+10].classList.add('fixed-five')
//           squares[i].classList.remove('fixed-four')
//
//           row = []
//           if (squares[i].className === 'grid-item fixed-five') {
//            console.log('second row')
//            console.log(squares[i])
//            squares[i+10].classList.add('fixed-six')
//            squares[i].classList.remove('fixed-five')
//
//            row = []
//            if (squares[i].className === 'grid-item fixed-six') {
//             console.log('second row')
//             console.log(squares[i])
//             squares[i+10].classList.add('fixed-seven')
//             squares[i].classList.remove('fixed-six')
//
//             row = []
//             if (squares[i].className === 'grid-item fixed-seven') {
//              console.log('second row')
//              console.log(squares[i])
//              squares[i+10].classList.add('fixed-eight')
//              squares[i].classList.remove('fixed-seven')
//
//              row = []
//              if (squares[i].className === 'grid-item fixed-eight') {
//               console.log('second row')
//               console.log(squares[i])
//               squares[i+10].classList.add('fixed-nine')
//               squares[i].classList.remove('fixed-eight')
//
//               row = []
//               if (squares[i].className === 'grid-item fixed-nine') {
//                console.log('second row')
//                console.log(squares[i])
//                squares[i+10].classList.add('fixed-ten')
//                squares[i].classList.remove('fixed-nine')
//
//                row = []
//                if (squares[i].className === 'grid-item fixed-ten') {
//                 console.log('second row')
//                 console.log(squares[i])
//                 squares[i+10].classList.add('fixed-eleven')
//                 squares[i].classList.remove('fixed-ten')
//
//                 row = []
//
//               }
//              }
//             }
//            }
//           }
//          }
//
//         }
//        }
//       }
//     }
//   }
// }
// }
// })
// }
//
// class Tetronimo{
//
// constructor(name, start, ninety, oneEighty,
//   twoSeventy, threeSixty) {
//
//     this.name = name
//     this.start = start
//     this.ninety = ninety
//     this.oneEighty = oneEighty
//     this.twoSeventy = twoSeventy
//     this.threeSixty = threeSixty
//
//   }
//
//   create(playerIndex) {
//     return this.start
//   }
//
//   turn(playerIndex) {
//     const start = this.start
//     const ninety = this.ninety.map(num=> playerIndex + num)
//     const oneEighty = this.oneEighty.map(num=> playerIndex + num)
//     const twoSeventy = this.twoSeventy.map(num=> playerIndex + num)
//     const threeSixty = this.threeSixty.map(num=> playerIndex + num)
//     if(playerPosArr === this.start) {
//       console.log('ninety')
//       playerPosArr = ninety
//     } else if (equalityCheck(playerPosArr, ninety)) {
//       console.log('oneEighty', playerPosArr, ninety)
//       playerPosArr = oneEighty
//     } else if (equalityCheck(playerPosArr,oneEighty)){
//       console.log('twoSeventy', playerPosArr,oneEighty)
//       playerPosArr = twoSeventy
//     } else if (equalityCheck(playerPosArr, twoSeventy)){
//       console.log('threeSixty', playerPosArr, threeSixty)
//       playerPosArr = threeSixty
//     } else if (equalityCheck(playerPosArr, threeSixty)){
//       console.log('ninety', playerPosArr, threeSixty)
//       playerPosArr = ninety
//     }
//     return playerPosArr
//   }
//
// }
//
//
// const tee = new Tetronimo('Tee', [14, 3, 13, 23], [0, -11, -1, 9], [0, -1, +1, 10],
// [0, -9, +1, +11], [0, -1, +1, -10] )
//
// const elle = new Tetronimo('Elle', [14, 4, 24, 25],  [0, 10, 1, 2], [0, -1, +9, 19],
// [0, 10, 9, 8], [0, -1, +1, -10] )
//
// const zed = new Tetronimo('Zed', [14, 4, 3, 15], [0, -10, -11, 1], [0, 1, +10, -9],
// [0, -1, +10, +11], [0, -10, -1, 9] )
//
// const eye = new Tetronimo('Eye', [14, 15, 13, 12],[0, 1, -1, -2], [0, -10, -20, +10],
// [0, -1, 1, 2], [0, -10, +10, +20] )
//
// const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, +1, +11], [0, -10, +1, +11],
// [0, +1, +10, +9], [0, -10, +1, +11])
//
// const jay = new Tetronimo('Jay', [14, 15, 13, 25], [0, +1, -1, +11], [0, -10, -9, +10],
// [0, -1, +1, -11], [0, +10, +9, -10] )
//
// const oh = new Tetronimo('Oh', [14, 13, 4, 3], [0, 0, 0, 0], [0, 0, 0, 0],
// [0, 0, 0, 0], [0, 0, 0, 0] )
//
//
//
//
// const TLZISJ0 = [tee, elle, zed, eye, ess, jay, oh ]
//
//
//
// const makeShape = () => {
//   const randomNum = Math.floor(Math.random()*3 + 3)
//   for (let i = 0; i < 4; i++) {
//     playerPos = TLZISJ0[randomNum].start[i]
//     playerPosArr = TLZISJ0[randomNum].start
//     for(let i = 0; i < squares.length; i ++) {
//
//       squares[playerPos].classList.add('player')
//       player = TLZISJ0[randomNum].name
//     }
//
//   }
//   return player
// }
//
//
//
//
//
// //Need to find a way to get shapename out of makeshape function
// //WORK THIS OUT FIRST THING IN THE MORNING!!!
// // function rotate90() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate180() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate270() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
// //
// // function rotate360() {
// //   if (shapeName === 'Tee'){
// //     playerPos[0] = (playerIndex + TLZISJ0[0].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[0].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Elle'){
// //     playerPos[0] = (playerIndex + TLZISJ0[1].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[1].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(`new position should be ${playerPos}`)
// //   } else if (shapeName === 'Zed'){
// //     playerPos[0] = (playerIndex + TLZISJ0[2].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[2].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Eye'){
// //     playerPos[0] = (playerIndex + TLZISJ0[3].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[3].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[3].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //   } else if (shapeName === 'Ess'){
// //     playerPos[0] = (playerIndex + TLZISJ0[4].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[4].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   } else if (shapeName === 'Jay'){
// //     playerPos[0] = (playerIndex + TLZISJ0[5].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[5].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }  else if (shapeName === 'Oh'){
// //     playerPos[0] = (playerIndex + TLZISJ0[6].zero[0])
// //     playerPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
// //     playerPos[2] = (playerIndex + TLZISJ0[6].zero[2])
// //     playerPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
// //     // console.log(playerIndex)
// //     // console.log(playerPos)
// //
// //   }
// // }
//
// const rotateShape = (e) => {
//   switch(e.keyCode) {
//     case 32:
//     switch(player) {
//       case 'Tee':
//       clear()
//       tee.turn(playerIndex)
//       update()
//       break
//       case 'Elle':
//       clear()
//       elle.turn(playerIndex)
//       update()
//       break
//       case 'Zed':
//       clear()
//       zed.turn(playerIndex)
//       update()
//       break
//       case 'Eye':
//       clear()
//       eye.turn(playerIndex)
//       update()
//       break
//       case 'Ess':
//       clear()
//       ess.turn(playerIndex)
//       update()
//       break
//       case 'Jay':
//       clear()
//       jay.turn(playerIndex)
//       update()
//       break
//       case 'Oh':
//       clear()
//       oh.ninety
//       update()
//       break
//     }
//   }
// }
//
//
// // function rotatePress(e) {
// //
// //   switch(e.keyCode) {
// //     case 49:
// //     clear()
// //     rotate90()
// //     break
// //     case 50:
// //     clear()
// //     rotate180()
// //     break
// //     case 51:
// //     clear()
// //     rotate270()
// //     break
// //     case 52:
// //     clear()
// //     rotate360()
// //     break
// //   }
// // }
//
// function checkBelow(blockIndex){
//   return fixedSquares.includes(blockIndex + 10)
// }
//
// function checkLeft(blockIndex){
//   return fixedSquares.includes(blockIndex - 1)
// }
//
// function checkRight(blockIndex){
//   return fixedSquares.includes(blockIndex + 1)
// }
//
// // //function to check if player pos is same as index of any div with the class fixed
// const spaceCheck = (playerPos) => {
//   function checkLeft(blockIndex){
//     return fixedSquares.includes(blockIndex - 1)
//   }
//
//   function checkRight(blockIndex){
//     return fixedSquares.includes(blockIndex + 1)
//   }
//   let checker = true
//   playerPos.forEach(block => {
//     if(checkBelow(block)) checker = false
//   })
//
//   return checker
// }
//
// function right() {
//   console.log(playerPosArr)
//   clear()
//   playerPosArr[0] ++
//   playerPosArr[1] ++
//   playerPosArr[2] ++
//   playerPosArr[3] ++
//
// }
// function left() {
//   console.log(playerPosArr)
//   clear()
//   playerPosArr[0] --
//   playerPosArr[1] --
//   playerPosArr[2] --
//   playerPosArr[3] --
//
// }
//
//
//
//     function leftRight(e) {
//       switch(e.keyCode) {
//         case 39:
//         if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPosArr))){
//           right()
//         }
//         break
//         case 37:
//         if ((playerIndex % width > 0)&&(boardRightCheck(playerPosArr))){
//           left()
//         }
//         break
//
//       }
//
//     }
//
//
//
//
//
//
// function init() {
// const grid = document.querySelector('.grid')
//   for (let i = 0; i < width * (width*2) + width; i ++) {
//     const square = document.createElement('div')
//     square.classList.add('grid-item')
//     square.innerHTML = i
//     squares.push(square)
//     grid.append(square)
//
//
//   }
//   for (let i = 200; i < 210 ; i ++) {
//     squares[i].dataset.row = 0
//     squares[i].style.opacity = 0
//   }
//
//
//
//
//
//   const moveDown = () => {
//
//     // console.log(spaceCheck(playerPosArr))
//     // clear()
//     if (onBoardCheck(playerPosArr) && spaceCheck(playerPosArr)) {
//       clear()
//       // console.log('moving down')
//       playerPosArr[0] += width
//       playerPosArr[1] += width
//       playerPosArr[2] += width
//       playerPosArr[3] += width
//       squares[playerPosArr[0]].classList.add('player')
//       squares[playerPosArr[1]].classList.add('player')
//       squares[playerPosArr[2]].classList.add('player')
//       squares[playerPosArr[3]].classList.add('player')
//       playerIndex = playerPosArr[0]
//       return playerPosArr
//     } else {
//       spaceCheck(playerPosArr)
//
//       squares[playerPosArr[0]].classList.add('fixed')
//       squares[playerPosArr[1]].classList.add('fixed')
//       squares[playerPosArr[2]].classList.add('fixed')
//       squares[playerPosArr[3]].classList.add('fixed')
//
//
//
//       fixedSquares = fixedSquares.concat(playerPosArr)
//
//       rowClear()
//
//       // console.log(playerIndex)
//       //Call function to make new tetronimo
//       makeShape()
//     }
//
//   }
//
//   // setInterval(rowClear, 3000 )
//
//
//   const moveDownAuto = () => moveDown()
//
//   const moveDownPress = (e) => {
//     switch(e.keyCode) {
//       case 40: moveDown()
//     }
//   }
//
//   setInterval(moveDown, 500)
//
//   window.addEventListener('keydown', leftRight)
//     window.addEventListener('keydown', rotateShape)
//   window.addEventListener('keydown', moveDownPress)
// }
//
// init()
//
// })
//
//
//
// window.addEventListener('DOMContentLoaded', () => {
//
//   const width = 10
//   const squares = []
//   let playerIndex = 14
//   let playerPos = [0,0,0,0]
//   let fixedSquares = []
//   let shapeName = ''
//
//
//
//
//
//   const onBoardCheck = (playerPos) => {
//     return playerPos.every(pos =>
//       pos >= 0 && pos < 190
//
//     )
//   }
//
//   function isNotNineMoreThanRoundNumber(currentValue) {
//     if ((currentValue - 9) %10 !== 0) {
//       return currentValue
//     }
//   }
//
//   function isNotNineLessThanRoundNumber(currentValue) {
//     if ((currentValue + 10) %10 !== 0) {
//       return currentValue
//     }
//   }
//   const boardLeftCheck = (playerPos) => {
//     return playerPos.every(isNotNineMoreThanRoundNumber)
//   }
//
//   const boardRightCheck = (playerPos) => {
//     return playerPos.every(isNotNineLessThanRoundNumber)
//   }
//
//
//
//
//   //basic function to update squares to be coloured as tetronimo moves on board
//   function movePlayer() {
//     clear()
//     squares[playerPos[0]].classList.add('player')
//     squares[playerPos[1]].classList.add('player')
//     squares[playerPos[2]].classList.add('player')
//     squares[playerPos[3]].classList.add('player')
//   }
//
//   //clears squares as tetromino moves
//   const clear = () => {
//     squares.forEach(square =>
//       square.classList.remove('player')
//     )
//   }
//
//
//   const TLZISJ0 = [
//     {
//       Name: 'Tee',
//       start: [14, 3, 13, 23],
//       zero: [0, -11, -1, 9],
//       ninety: [0, -1, +1, 10],
//       oneEighty: [0, -9, +1, +11],
//       twoSeventy: [0, -1, +1, -10]
//     },
//
//     {
//       Name: 'Elle',     //NOT RIGHT
//       start: [14, 3, 13, 23],
//       zero: [0, -11, -1, 9],
//       ninety: [0, -1, +1, 10],
//       oneEighty: [0, -9, +1, +11],
//       twoSeventy: [0, -1, +1, -10]
//     },
//
//
//     {
//       Name: 'Zed',
//       start: [14, 4, 3, 15],
//       zero: [0, -10, -11, 1],
//       ninety: [0, 1, +10, -9],
//       oneEighty: [0, -1, +10, +11],
//       twoSeventy: [0, -10, -1, +9]
//     },
//
//     {
//       Name: 'Eye',
//       start: [14, 15, 13, 12],
//       zero: [0, 1, -1, -2],
//       ninety: [0, -10, -20, +10],
//       oneEighty: [0, -1, 1, 2],
//       twoSeventy: [0, -10, +10, +20]
//     },
//
//     {
//       Name: 'Ess',
//       start: [14, 4, 5, 13],
//       zero: [0, -10, -9, -1],
//       ninety: [0, -10, +1, +9],
//       oneEighty: [0, +1, +10, +9],
//       twoSeventy: [0, -10, +1, +11]
//
//     },
//
//     {
//       Name: 'Jay',
//       start: [14, 15, 13, 25],
//       zero: [0, +1, -1, +11],
//       ninety: [0, -10, -9, +10],
//       oneEighty: [0, -1, +1, -11],
//       twoSeventy: [0, +10, +9, -10]
//
//     },
//
//     {
//       name: 'Oh',
//       start: [14, 13, 4, 3],
//       zero: [0, -1, -10, -11],
//       ninety: [0, -1, -10, -11],
//       oneEighty: [ 0, -1, -10, -11],
//       twoSeventy: [0, -1, -10, -11]
//
//     }
//
//   ]
//
//   const makeShape = (playerIndex) => {
//     let rando = 0
//
//     const randomNum = Math.floor(Math.random()*7)
//     for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {
//       rando = TLZISJ0[randomNum].zero[i]
//       squares[playerIndex + rando].classList.add('player')
//       playerPos.unshift(playerIndex+rando)
//       playerPos = playerPos.slice(0,4)
//     }
//     playerIndex = playerPos[3]
//     shapeName = TLZISJ0[randomNum].Name
//     console.log(shapeName)
//     return shapeName
//
//   }
//
//
//
//   function rowClear() {
//
//     const rows =[[],[]]
//
//     rows[0] = squares.filter((el, index) =>
//     (index < 200 && index > 189 && el.classList.contains('fixed'))
//   )
//   rows[1] = squares.filter((el, index) =>
//   (index < 190 && index > 179 && el.classList.contains('fixed'))
// )
// rows[2] = squares.filter((el, index) =>
// (index < 180 && index > 169 && el.classList.contains('fixed'))
// )
// rows[3] = squares.filter((el, index) =>
// (index < 170 && index > 159 && el.classList.contains('fixed'))
// )
// rows[4] = squares.filter((el, index) =>
// (index < 160 && index > 149 && el.classList.contains('fixed'))
// )
// rows[5] = squares.filter((el, index) =>
// (index < 150 && index > 139 && el.classList.contains('fixed'))
// )
// rows[6] = squares.filter((el, index) =>
// (index < 140 && index > 129 && el.classList.contains('fixed'))
// )
// rows[7] = squares.filter((el, index) =>
// (index < 130 && index > 119 && el.classList.contains('fixed'))
// )
//
// rows[9] = squares.filter((el, index) =>
// (index < 120 && index > 109 && el.classList.contains('fixed'))
// )
// rows[10] = squares.filter((el, index) =>
// (index < 110 && index > 99 && el.classList.contains('fixed'))
// )
// rows[11] = squares.filter((el, index) =>
// (index < 100 && index > 89 && el.classList.contains('fixed'))
// )
// rows[12] = squares.filter((el, index) =>
// (index < 90 && index > 79 && el.classList.contains('fixed'))
// )
// rows[13] = squares.filter((el, index) =>
// (index < 80 && index > 69 && el.classList.contains('fixed'))
// )
// rows[14] = squares.filter((el, index) =>
// (index < 70 && index > 59 && el.classList.contains('fixed'))
// )
// rows[15] = squares.filter((el, index) =>
// (index < 60 && index > 49 && el.classList.contains('fixed'))
// )
// rows[16] = squares.filter((el, index) =>
// (index < 50 && index > 39 && el.classList.contains('fixed'))
// )
// rows[17] = squares.filter((el, index) =>
// (index < 40 && index > 29 && el.classList.contains('fixed'))
// )
// rows[18] = squares.filter((el, index) =>
// (index < 30 && index > 19 && el.classList.contains('fixed'))
// )
// rows[19] = squares.filter((el, index) =>
// (index < 20 && index > 9 && el.classList.contains('fixed'))
// )
// rows[20] = squares.filter((el, index) =>
// (index < 10 && index > 0 && el.classList.contains('fixed'))
// )
//
// rows.forEach((row) => {
//   if(row.length === 10){
//     console.log('row is full')
//     for(let i = 0; i < squares.length; i++) {
//       if(squares[i].className === 'grid-item fixed') {
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-two')
//         squares[i].classList.remove('fixed')
//         row = []
//        if (squares[i].className === 'grid-item fixed-two') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-three')
//         squares[i].classList.remove('fixed-two')
//         row = []
//        if (squares[i].className === 'grid-item fixed-three') {
//         console.log('second row')
//         console.log(squares[i])
//         squares[i+10].classList.add('fixed-four')
//         squares[i].classList.remove('fixed-three')
//         row = []
//         if (squares[i].className === 'grid-item fixed-four') {
//          console.log('second row')
//          console.log(squares[i])
//          squares[i+10].classList.add('fixed-five')
//          squares[i].classList.remove('fixed-four')
//
//          row = []
//          if (squares[i].className === 'grid-item fixed-four') {
//           console.log('second row')
//           console.log(squares[i])
//           squares[i+10].classList.add('fixed-five')
//           squares[i].classList.remove('fixed-four')
//
//           row = []
//           if (squares[i].className === 'grid-item fixed-five') {
//            console.log('second row')
//            console.log(squares[i])
//            squares[i+10].classList.add('fixed-six')
//            squares[i].classList.remove('fixed-five')
//
//            row = []
//            if (squares[i].className === 'grid-item fixed-six') {
//             console.log('second row')
//             console.log(squares[i])
//             squares[i+10].classList.add('fixed-seven')
//             squares[i].classList.remove('fixed-six')
//
//             row = []
//             if (squares[i].className === 'grid-item fixed-seven') {
//              console.log('second row')
//              console.log(squares[i])
//              squares[i+10].classList.add('fixed-eight')
//              squares[i].classList.remove('fixed-seven')
//
//              row = []
//              if (squares[i].className === 'grid-item fixed-eight') {
//               console.log('second row')
//               console.log(squares[i])
//               squares[i+10].classList.add('fixed-nine')
//               squares[i].classList.remove('fixed-eight')
//
//               row = []
//               if (squares[i].className === 'grid-item fixed-nine') {
//                console.log('second row')
//                console.log(squares[i])
//                squares[i+10].classList.add('fixed-ten')
//                squares[i].classList.remove('fixed-nine')
//
//                row = []
//                if (squares[i].className === 'grid-item fixed-ten') {
//                 console.log('second row')
//                 console.log(squares[i])
//                 squares[i+10].classList.add('fixed-eleven')
//                 squares[i].classList.remove('fixed-ten')
//
//                 row = []
//
//               }
//              }
//             }
//            }
//           }
//          }
//
//         }
//        }
//       }
//     }
//   }
// }
// }
// })
// }
//
//
//
// const rotateTracker = 0
//
//
// //Need to find a way to get shapename out of makeshape function
// //WORK THIS OUT FIRST THING IN THE MORNING!!!
// function rotate90() {
//   if (shapeName === 'Tee'){
//     playerPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])
//
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Elle'){
//     playerPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])
//     // console.log(playerIndex)
//     // console.log(`new position should be ${playerPos}`)
//   } else if (shapeName === 'Zed'){
//     playerPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Eye'){
//     playerPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Ess'){
//     playerPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   } else if (shapeName === 'Jay'){
//     playerPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }  else if (shapeName === 'Oh'){
//     playerPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
//     playerPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }
//   return rotateTracker = 90
// }
//
//
// function rotate180() {
//   if (shapeName === 'Tee'){
//     playerPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Elle'){
//     playerPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(`new position should be ${playerPos}`)
//   } else if (shapeName === 'Zed'){
//     playerPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Eye'){
//     playerPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Ess'){
//     playerPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   } else if (shapeName === 'Jay'){
//     playerPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }  else if (shapeName === 'Oh'){
//     playerPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
//     playerPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }
//   return rotateTracker = 180
// }
//
// function rotate270() {
//   if (shapeName === 'Tee'){
//     playerPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Elle'){
//     playerPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(`new position should be ${playerPos}`)
//   } else if (shapeName === 'Zed'){
//     playerPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Eye'){
//     playerPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Ess'){
//     playerPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   } else if (shapeName === 'Jay'){
//     playerPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }  else if (shapeName === 'Oh'){
//     playerPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
//     playerPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }
//   return rotateTracker = 270
// }
//
// function rotate360() {
//   if (shapeName === 'Tee'){
//     playerPos[0] = (playerIndex + TLZISJ0[0].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[0].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Elle'){
//     playerPos[0] = (playerIndex + TLZISJ0[1].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[1].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
//     // console.log(playerIndex)
//     // console.log(`new position should be ${playerPos}`)
//   } else if (shapeName === 'Zed'){
//     playerPos[0] = (playerIndex + TLZISJ0[2].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[2].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Eye'){
//     playerPos[0] = (playerIndex + TLZISJ0[3].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[3].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[3].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//   } else if (shapeName === 'Ess'){
//     playerPos[0] = (playerIndex + TLZISJ0[4].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[4].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   } else if (shapeName === 'Jay'){
//     playerPos[0] = (playerIndex + TLZISJ0[5].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[5].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }  else if (shapeName === 'Oh'){
//     playerPos[0] = (playerIndex + TLZISJ0[6].zero[0])
//     playerPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
//     playerPos[2] = (playerIndex + TLZISJ0[6].zero[2])
//     playerPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
//     // console.log(playerIndex)
//     // console.log(playerPos)
//
//   }
//   return rotateTracker = 360
// }
//
//
//
// function rotatePress(e) {
//
//   switch(e.keyCode) {
//     case 49:
//     clear()
//     rotate90()
//     break
//     case 50:
//     clear()
//     rotate180()
//     break
//     case 51:
//     clear()
//     rotate270()
//     break
//     case 52:
//     clear()
//     rotate360()
//     break
//   }
// }
//
// function checkBelow(blockIndex){
//   return fixedSquares.includes(blockIndex + 10)
// }
//
// function checkLeft(blockIndex){
//   return fixedSquares.includes(blockIndex - 1)
// }
//
// function checkRight(blockIndex){
//   return fixedSquares.includes(blockIndex + 1)
// }
//
// // //function to check if player pos is same as index of any div with the class fixed
// const spaceCheck = (playerPos) => {
//   function checkLeft(blockIndex){
//     return fixedSquares.includes(blockIndex - 1)
//   }
//
//   function checkRight(blockIndex){
//     return fixedSquares.includes(blockIndex + 1)
//   }
//   let checker = true
//   playerPos.forEach(block => {
//     if(checkBelow(block)) checker = false
//   })
//
//   return checker
// }
//
//
//
// function leftRight(e) {
//   if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
//     // console.log(playerPos)
//
//     let playerShouldMove = true
//
//     switch(e.keyCode) {
//       case 39:
//       if ((playerIndex % width < width - 1)&&(boardLeftCheck(playerPos))){
//         playerPos[0] ++
//         playerPos[1] ++
//         playerPos[2] ++
//         playerPos[3] ++
//       }
//       break
//       case 37:
//       if ((playerIndex % width > 0)&&(boardRightCheck(playerPos))){
//
//         playerPos[0] --
//         playerPos[1] --
//         playerPos[2] --
//         playerPos[3] --
//       }
//       break
//
//       default: playerShouldMove = false
//
//     }
//
//     if (playerShouldMove) movePlayer()
//   }
//
// }
//
//
//
//
//
//
// function init() {
// const grid = document.querySelector('.grid')
//   for (let i = 0; i < width * (width*2) + width; i ++) {
//     const square = document.createElement('div')
//     square.classList.add('grid-item')
//     square.innerHTML = i
//     squares.push(square)
//     grid.append(square)
//
//
//   }
//   for (let i = 200; i < 210 ; i ++) {
//     squares[i].dataset.row = 0
//     squares[i].style.opacity = 0
//   }
//
//   makeShape(playerIndex)
//
//
//
//   const moveDown = () => {
//
//     // console.log(spaceCheck(playerPos))
//     // clear()
//     if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
//       clear()
//       // console.log('moving down')
//       playerPos[0] += width
//       playerPos[1] += width
//       playerPos[2] += width
//       playerPos[3] += width
//       squares[playerPos[0]].classList.add('player')
//       squares[playerPos[1]].classList.add('player')
//       squares[playerPos[2]].classList.add('player')
//       squares[playerPos[3]].classList.add('player')
//       playerIndex = playerPos[0]
//       return playerPos
//     } else {
//       spaceCheck(playerPos)
//
//       squares[playerPos[0]].classList.add('fixed')
//       squares[playerPos[1]].classList.add('fixed')
//       squares[playerPos[2]].classList.add('fixed')
//       squares[playerPos[3]].classList.add('fixed')
//
//
//
//       fixedSquares = fixedSquares.concat(playerPos)
//
//       rowClear()
//
//       // console.log(playerIndex)
//       //Call function to make new tetronimo
//       makeShape(14)
//     }
//
//   }
//
//   // setInterval(rowClear, 3000 )
//
//
//   const moveDownAuto = () => moveDown()
//
//   const moveDownPress = (e) => {
//     switch(e.keyCode) {
//       case 40: moveDown()
//     }
//   }
//
//   setInterval(moveDown, 500)
//
//   window.addEventListener('keydown', leftRight)
//   window.addEventListener('keydown', rotatePress)
//   window.addEventListener('keydown', moveDownPress)
// }
//
// init()
//
// })
//
//   scoreFunction()

window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 14
  let playerPos = [0,0,0,0]
  let fixedSquares = []
  let shapeName = ''
let scoreTracker = 0
  let score = document.querySelector('.score')




  score.innerHTML = scoreTracker




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
  topRow = [...document.querySelectorAll('[data-row="-1"]')]
    console.log(topRow)
  console.log(topRow.includes((square) => square))
if (topRow.some((square) => square.classList.contains('fixed'))) {
  console.log('you lose')
  console.log(square)
fixedSquares.forEach((square) => square.display.none)
grid.display.opacity = 0.1
score.innerHTML = 'YOU LOSE'
} else {
  console.log('you win')
}
}




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


  const TLZISJ0 = [
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
      ninety: [0, -10, +1, +11],
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
    winFunction()
    let rando = 0

    const randomNum = Math.floor(Math.random()*7)
    for (let i = 0; i < TLZISJ0[0].zero.length; i ++) {
      rando = TLZISJ0[randomNum].zero[i]
      squares[playerIndex + rando].classList.add('player')
      playerPos.unshift(playerIndex+rando)
      playerPos = playerPos.slice(0,4)
    }
    playerIndex = playerPos[3]
    shapeName = TLZISJ0[randomNum].Name
    console.log(shapeName)
    return shapeName

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

rows.forEach((row) => {
  if(row.length === 10){

    console.log('row is full')
    scoreTracker += 1
    for(let i = 0; i < squares.length; i++) {
      if(squares[i].className === 'grid-item fixed') {
        console.log(squares[i])
        squares[i+10].classList.add('fixed-two')
        squares[i].classList.remove('fixed')
        row = []
        if (squares[i].className === 'grid-item fixed-two') {
          scoreTracker += 1
          console.log('second row')
          console.log(squares[i])
          squares[i+10].classList.add('fixed-three')
          squares[i].classList.remove('fixed-two')
          row = []
          if (squares[i].className === 'grid-item fixed-three') {
            scoreTracker += 1
            console.log('second row')
            console.log(squares[i])
            squares[i+10].classList.add('fixed-four')
            squares[i].classList.remove('fixed-three')
            row = []
            if (squares[i].className === 'grid-item fixed-four') {
              scoreTracker += 1
              console.log('second row')
              console.log(squares[i])
              squares[i+10].classList.add('fixed-five')
              squares[i].classList.remove('fixed-four')

              row = []
              if (squares[i].className === 'grid-item fixed-four') {
                scoreTracker += 1
                console.log('second row')
                console.log(squares[i])
                squares[i+10].classList.add('fixed-five')
                squares[i].classList.remove('fixed-four')

                row = []
                if (squares[i].className === 'grid-item fixed-five') {
                  scoreTracker += 1
                  console.log('second row')
                  console.log(squares[i])
                  squares[i+10].classList.add('fixed-six')
                  squares[i].classList.remove('fixed-five')

                  row = []
                  if (squares[i].className === 'grid-item fixed-six') {
                    scoreTracker += 1
                    console.log('second row')
                    console.log(squares[i])
                    squares[i+10].classList.add('fixed-seven')
                    squares[i].classList.remove('fixed-six')

                    row = []
                    if (squares[i].className === 'grid-item fixed-seven') {
                      scoreTracker += 1
                      console.log('second row')
                      console.log(squares[i])
                      squares[i+10].classList.add('fixed-eight')
                      squares[i].classList.remove('fixed-seven')

                      row = []
                      if (squares[i].className === 'grid-item fixed-eight') {
                        console.log('second row')
                        console.log(squares[i])
                        squares[i+10].classList.add('fixed-nine')
                        squares[i].classList.remove('fixed-eight')

                        row = []
                        if (squares[i].className === 'grid-item fixed-nine') {
                          console.log('second row')
                          console.log(squares[i])
                          squares[i+10].classList.add('fixed-ten')
                          squares[i].classList.remove('fixed-nine')

                          row = []
                          if (squares[i].className === 'grid-item fixed-ten') {
                            console.log('second row')
                            console.log(squares[i])
                            squares[i+10].classList.add('fixed-eleven')
                            squares[i].classList.remove('fixed-ten')

                            row = []

                            if (squares[i].className === 'grid-item fixed-ten') {
                              console.log('second row')
                              console.log(squares[i])
                              squares[i+10].classList.add('fixed-eleven')
                              squares[i].classList.remove('fixed-ten')

                              row = []

                              if (squares[i].className === 'grid-item fixed-ten') {
                                console.log('second row')
                                console.log(squares[i])
                                squares[i+10].classList.add('fixed-eleven')
                                squares[i].classList.remove('fixed-ten')

                                row = []

                                if (squares[i].className === 'grid-item fixed-ten') {
                                  console.log('second row')
                                  console.log(squares[i])
                                  squares[i+10].classList.add('fixed-eleven')
                                  squares[i].classList.remove('fixed-ten')

                                  row = []

                                  if (squares[i].className === 'grid-item fixed-ten') {
                                    console.log('second row')
                                    console.log(squares[i])
                                    squares[i+10].classList.add('fixed-eleven')
                                    squares[i].classList.remove('fixed-ten')

                                    row = []
                                    if (squares[i].className === 'grid-item fixed-ten') {
                                      console.log('second row')
                                      console.log(squares[i])
                                      squares[i+10].classList.add('fixed-eleven')
                                      squares[i].classList.remove('fixed-ten')

                                      row = []
                                      if (squares[i].className === 'grid-item fixed-eleven') {
                                        console.log('second row')
                                        console.log(squares[i])
                                        squares[i+10].classList.add('fixed-twelve')
                                        squares[i].classList.remove('fixed-eleven')

                                        row = []
                                        if (squares[i].className === 'grid-item fixed-twelve') {
                                          console.log('second row')
                                          console.log(squares[i])
                                          squares[i+10].classList.add('fixed-thirteen')
                                          squares[i].classList.remove('fixed-tweleve')

                                          row = []
                                          if (squares[i].className === 'grid-item fixed-thirteen') {
                                            console.log('second row')
                                            console.log(squares[i])
                                            squares[i+10].classList.add('fixed-fourteen')
                                            squares[i].classList.remove('fixed-ten')

                                            row = []
                                            if (squares[i].className === 'grid-item fixed-fourteen') {
                                              console.log('second row')
                                              console.log(squares[i])
                                              squares[i+10].classList.add('fixed-fifteen')
                                              squares[i].classList.remove('fixed-fourteen')

                                              row = []
                                              if (squares[i].className === 'grid-item fixed-fifteen') {
                                                console.log('second row')
                                                console.log(squares[i])
                                                squares[i+10].classList.add('fixed-sixteen')
                                                squares[i].classList.remove('fixed-fifteen')

                                                row = []
                                                if (squares[i].className === 'grid-item fixed-sixteen') {
                                                  console.log('second row')
                                                  console.log(squares[i])
                                                  squares[i+10].classList.add('fixed-seventeen')
                                                  squares[i].classList.remove('fixed-sixteen')

                                                  row = []
                                                  if (squares[i].className === 'grid-item fixed-seventeen') {
                                                    console.log('second row')
                                                    console.log(squares[i])
                                                    squares[i+10].classList.add('fixed-eighteen')
                                                    squares[i].classList.remove('fixed-seventeen')

                                                    row = []


                                                  }

                                                }

                                              }

                                            }

                                          }

                                        }

                                      }

                                    }

                                  }
                                }
                              }
                            }

                          }

                        }
                      }
                    }
                  }
                }

              }
            }
          }
        }
      }

    }
  }
})

}





//Need to find a way to get shapename out of makeshape function
//WORK THIS OUT FIRST THING IN THE MORNING!!!
let rotateTracker = 0


//Need to find a way to get shapename out of makeshape function
//WORK THIS OUT FIRST THING IN THE MORNING!!!
function rotate90() {
  if (shapeName === 'Tee'){
    playerPos[0] = (playerIndex + TLZISJ0[0].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[0].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[0].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[0].ninety[3])

    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Elle'){
    playerPos[0] = (playerIndex + TLZISJ0[1].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[1].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[1].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[1].ninety[3])
    // console.log(playerIndex)
    // console.log(`new position should be ${playerPos}`)
  } else if (shapeName === 'Zed'){
    playerPos[0] = (playerIndex + TLZISJ0[2].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[2].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[2].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[2].ninety[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Eye'){
    playerPos[0] = (playerIndex + TLZISJ0[3].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[3].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[3].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[3].ninety[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Ess'){
    playerPos[0] = (playerIndex + TLZISJ0[4].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[4].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[4].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[4].ninety[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  } else if (shapeName === 'Jay'){
    playerPos[0] = (playerIndex + TLZISJ0[5].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[5].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[5].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[5].ninety[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }  else if (shapeName === 'Oh'){
    playerPos[0] = (playerIndex + TLZISJ0[6].ninety[0])
    playerPos[1] = (playerIndex+ TLZISJ0[6].ninety[1])
    playerPos[2] = (playerIndex + TLZISJ0[6].ninety[2])
    playerPos[3] = (playerIndex+ TLZISJ0[6].ninety[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }
  return rotateTracker = 90
}


function rotate180() {
  if (shapeName === 'Tee'){
    playerPos[0] = (playerIndex + TLZISJ0[0].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[0].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[0].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[0].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Elle'){
    playerPos[0] = (playerIndex + TLZISJ0[1].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[1].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[1].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[1].oneEighty[3])
    // console.log(playerIndex)
    // console.log(`new position should be ${playerPos}`)
  } else if (shapeName === 'Zed'){
    playerPos[0] = (playerIndex + TLZISJ0[2].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[2].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[2].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[2].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Eye'){
    playerPos[0] = (playerIndex + TLZISJ0[3].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[3].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[3].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[3].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Ess'){
    playerPos[0] = (playerIndex + TLZISJ0[4].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[4].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[4].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[4].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  } else if (shapeName === 'Jay'){
    playerPos[0] = (playerIndex + TLZISJ0[5].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[5].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[5].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[5].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }  else if (shapeName === 'Oh'){
    playerPos[0] = (playerIndex + TLZISJ0[6].oneEighty[0])
    playerPos[1] = (playerIndex+ TLZISJ0[6].oneEighty[1])
    playerPos[2] = (playerIndex + TLZISJ0[6].oneEighty[2])
    playerPos[3] = (playerIndex+ TLZISJ0[6].oneEighty[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }
  return rotateTracker = 180
}

function rotate270() {
  if (shapeName === 'Tee'){
    playerPos[0] = (playerIndex + TLZISJ0[0].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[0].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[0].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[0].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Elle'){
    playerPos[0] = (playerIndex + TLZISJ0[1].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[1].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[1].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[1].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(`new position should be ${playerPos}`)
  } else if (shapeName === 'Zed'){
    playerPos[0] = (playerIndex + TLZISJ0[2].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[2].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[2].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[2].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Eye'){
    playerPos[0] = (playerIndex + TLZISJ0[3].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[3].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[3].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[3].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Ess'){
    playerPos[0] = (playerIndex + TLZISJ0[4].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[4].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[4].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[4].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  } else if (shapeName === 'Jay'){
    playerPos[0] = (playerIndex + TLZISJ0[5].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[5].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[5].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[5].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }  else if (shapeName === 'Oh'){
    playerPos[0] = (playerIndex + TLZISJ0[6].twoSeventy[0])
    playerPos[1] = (playerIndex+ TLZISJ0[6].twoSeventy[1])
    playerPos[2] = (playerIndex + TLZISJ0[6].twoSeventy[2])
    playerPos[3] = (playerIndex+ TLZISJ0[6].twoSeventy[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }
  return rotateTracker = 270
}

function rotate360() {
  if (shapeName === 'Tee'){
    playerPos[0] = (playerIndex + TLZISJ0[0].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[0].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[0].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[0].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Elle'){
    playerPos[0] = (playerIndex + TLZISJ0[1].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[1].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[1].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[1].zero[3])
    // console.log(playerIndex)
    // console.log(`new position should be ${playerPos}`)
  } else if (shapeName === 'Zed'){
    playerPos[0] = (playerIndex + TLZISJ0[2].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[2].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[2].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[2].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Eye'){
    playerPos[0] = (playerIndex + TLZISJ0[3].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[3].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[3].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[3].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)
  } else if (shapeName === 'Ess'){
    playerPos[0] = (playerIndex + TLZISJ0[4].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[4].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[4].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[4].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  } else if (shapeName === 'Jay'){
    playerPos[0] = (playerIndex + TLZISJ0[5].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[5].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[5].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[5].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }  else if (shapeName === 'Oh'){
    playerPos[0] = (playerIndex + TLZISJ0[6].zero[0])
    playerPos[1] = (playerIndex+ TLZISJ0[6].zero[1])
    playerPos[2] = (playerIndex + TLZISJ0[6].zero[2])
    playerPos[3] = (playerIndex+ TLZISJ0[6].zero[3])
    // console.log(playerIndex)
    // console.log(playerPos)

  }
  return rotateTracker = 360
}

const rotateShape = (e) => {
  switch(e.keyCode) {
    case 32:
    switch(rotateTracker) {
      case 0 :
      clear()
      rotate90()
      break
      case 90 :
      clear()
      rotate180()
      break
      case 180:
      clear()
      rotate270()
      break
      case 270 :
      clear()
      rotate360()
      break
      case 360 :
      clear()
      rotate90()
      break


    }
  }
}

function checkBelow(blockIndex){

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





  const moveDown = () => {

    // console.log(spaceCheck(playerPos))
    // clear()
    if (onBoardCheck(playerPos) && spaceCheck(playerPos)) {
      clear()
      winFunction()
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

      rowClear()

      // console.log(playerIndex)
      //Call function to make new tetronimo
      makeShape(14)
    }

  }



  // setInterval(rowClear, 3000 )


  const moveDownAuto = () => moveDown()

  const moveDownPress = (e) => {
    switch(e.keyCode) {
      case 40: moveDown()
    }
  }

  setInterval(moveDown, 500)

  window.addEventListener('keydown', leftRight)
  window.addEventListener('keydown', rotateShape )
  window.addEventListener('keydown', moveDownPress)
}



init()

})



if (squares[i].className === 'grid-item fixed-four') {
  scoreTracker += 1
  console.log('second row')
  console.log(squares[i])
  squares[i+10].classList.add('fixed-five')
  squares[i].classList.remove('fixed-four')

  row = []
  if (squares[i].className === 'grid-item fixed-four') {
    scoreTracker += 1
    console.log('second row')
    console.log(squares[i])
    squares[i+10].classList.add('fixed-five')
    squares[i].classList.remove('fixed-four')

    row = []
    if (squares[i].className === 'grid-item fixed-five') {
      scoreTracker += 1
      console.log('second row')
      console.log(squares[i])
      squares[i+10].classList.add('fixed-six')
      squares[i].classList.remove('fixed-five')

      row = []
      if (squares[i].className === 'grid-item fixed-six') {
        scoreTracker += 1
        console.log('second row')
        console.log(squares[i])
        squares[i+10].classList.add('fixed-seven')
        squares[i].classList.remove('fixed-six')

        row = []
        if (squares[i].className === 'grid-item fixed-seven') {
          scoreTracker += 1
          console.log('second row')
          console.log(squares[i])
          squares[i+10].classList.add('fixed-eight')
          squares[i].classList.remove('fixed-seven')

          row = []
          if (squares[i].className === 'grid-item fixed-eight') {
            console.log('second row')
            console.log(squares[i])
            squares[i+10].classList.add('fixed-nine')
            squares[i].classList.remove('fixed-eight')

            row = []
            if (squares[i].className === 'grid-item fixed-nine') {
              console.log('second row')
              console.log(squares[i])
              squares[i+10].classList.add('fixed-ten')
              squares[i].classList.remove('fixed-nine')

              row = []
              if (squares[i].className === 'grid-item fixed-ten') {
                console.log('second row')
                console.log(squares[i])
                squares[i+10].classList.add('fixed-eleven')
                squares[i].classList.remove('fixed-ten')

                row = []

                if (squares[i].className === 'grid-item fixed-ten') {
                  console.log('second row')
                  console.log(squares[i])
                  squares[i+10].classList.add('fixed-eleven')
                  squares[i].classList.remove('fixed-ten')

                  row = []

                  if (squares[i].className === 'grid-item fixed-ten') {

                    console.log(squares[i])
                    squares[i+10].classList.add('fixed-eleven')
                    squares[i].classList.remove('fixed-ten')

                    row = []

                    if (squares[i].className === 'grid-item fixed-ten') {
                      console.log('second row')
                      console.log(squares[i])
                      squares[i+10].classList.add('fixed-eleven')
                      squares[i].classList.remove('fixed-ten')

                      row = []

                      if (squares[i].className === 'grid-item fixed-ten') {
                        console.log('second row')
                        console.log(squares[i])
                        squares[i+10].classList.add('fixed-eleven')
                        squares[i].classList.remove('fixed-ten')

                        row = []
                        if (squares[i].className === 'grid-item fixed-ten') {
                          console.log('second row')
                          console.log(squares[i])
                          squares[i+10].classList.add('fixed-eleven')
                          squares[i].classList.remove('fixed-ten')

                          row = []
                          if (squares[i].className === 'grid-item fixed-eleven') {
                            console.log('second row')
                            console.log(squares[i])
                            squares[i+10].classList.add('fixed-twelve')
                            squares[i].classList.remove('fixed-eleven')

                            row = []
                            if (squares[i].className === 'grid-item fixed-twelve') {
                              console.log('second row')
                              console.log(squares[i])
                              squares[i+10].classList.add('fixed-thirteen')
                              squares[i].classList.remove('fixed-tweleve')

                              row = []
                              if (squares[i].className === 'grid-item fixed-thirteen') {
                                console.log('second row')
                                console.log(squares[i])
                                squares[i+10].classList.add('fixed-fourteen')
                                squares[i].classList.remove('fixed-ten')

                                row = []
                                if (squares[i].className === 'grid-item fixed-fourteen') {
                                  console.log('second row')
                                  console.log(squares[i])
                                  squares[i+10].classList.add('fixed-fifteen')
                                  squares[i].classList.remove('fixed-fourteen')

                                  row = []
                                  if (squares[i].className === 'grid-item fixed-fifteen') {
                                    console.log('second row')
                                    console.log(squares[i])
                                    squares[i+10].classList.add('fixed-sixteen')
                                    squares[i].classList.remove('fixed-fifteen')

                                    row = []
                                    if (squares[i].className === 'grid-item fixed-sixteen') {
                                      console.log('second row')
                                      console.log(squares[i])
                                      squares[i+10].classList.add('fixed-seventeen')
                                      squares[i].classList.remove('fixed-sixteen')

                                      row = []
                                      if (squares[i].className === 'grid-item fixed-seventeen') {
                                        console.log('second row')
                                        console.log(squares[i])
                                        squares[i+10].classList.add('fixed-eighteen')
                                        squares[i].classList.remove('fixed-seventeen')

                                        row = []


                                      }

                                    }

                                  }

                                }

                              }

                            }

                          }

                        }

                      }
                    }
                  }
                }

              }

            }
          }
        }
      }
    }


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

        setInterval(moveDown, 500)
        setInterval(scoreFunction, 1000)



        window.addEventListener('keydown', leftRight)
        window.addEventListener('keydown', rotateShape )
        window.addEventListener('keydown', moveDownPress)
      }

      init()

    })
