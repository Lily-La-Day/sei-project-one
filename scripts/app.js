let rowOne = null
let rowTwo = null
let rowThree = null
let rowFour = null
let rowFive = null
let rowSix = null
let rowSeven= null
let rowEight = null
let rowNine = null
let rowTen =  null
let rowEleven =  null
let rowTwelve =  null
let rowThirteen=  null
let rowFourteen =  null
let rowFifteen =  null
let rowSixteen =  null
let rowSeventeen =  null
let rowEighteen =  null
let rowNineteen =  null
let rowTwenty =  null
let rowTwentyOne = null

function reselect(){
  rowOne = [...document.querySelectorAll('[ data-row ="0"]')]
  rowTwo = [...document.querySelectorAll('[ data-row ="1"]')]
  rowThree = [...document.querySelectorAll('[ data-row ="3"]')]
  rowFour = [...document.querySelectorAll('[ data-row ="4"]')]
  rowFive = [...document.querySelectorAll('[ data-row ="5"]')]
  rowSix = [...document.querySelectorAll('[ data-row ="6"]')]
  rowSeven= [...document.querySelectorAll('[ data-row ="7"]')]
  rowEight = [...document.querySelectorAll('[ data-row ="8"]')]
  rowNine = [...document.querySelectorAll('[ data-row ="9"]')]
  rowTen = [...document.querySelectorAll('[ data-row ="10"]')]
  rowEleven = [...document.querySelectorAll('[ data-row ="11"]')]
  rowTwelve = [...document.querySelectorAll('[ data-row ="12"]')]
  rowThirteen= [...document.querySelectorAll('[ data-row ="13"]')]
  rowFourteen = [...document.querySelectorAll('[ data-row ="14"]')]
  rowFifteen = [...document.querySelectorAll('[ data-row ="15"]')]
  rowSixteen = [...document.querySelectorAll('[ data-row ="16"]')]
  rowSeventeen = [...document.querySelectorAll('[ data-row ="17"]')]
  rowEighteen = [...document.querySelectorAll('[ data-row ="18"]')]
  rowNineteen = [...document.querySelectorAll('[ data-row ="19"]')]
  rowTwenty = [...document.querySelectorAll('[ data-row ="20"]')]
  rowTwentyOne = [...document.querySelectorAll('[ data-row ="21"]')]
}

window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 35
  let playerPos = 0
  let playerPosArr = []
  let fixedSquares = []

  const playerDivs = [...document.querySelectorAll('.player')]
  const rows = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine,
    rowTen, rowEleven, rowTwelve, rowThirteen, rowFourteen, rowFifteen, rowSixteen, rowSeventeen,
    rowEighteen, rowNineteen, rowTwenty, rowTwentyOne]
  const shapeName = ''
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

  const ess = new Tetronimo('Ess', [14, 4, 5, 13], [0, -10, +1, +11], [0, -10, +1, +11],
    [0, +1, +10, +9], [0, -10, +1, +11])

  const jay = new Tetronimo('Jay', [14, 15, 13, 25], [0, +1, -1, +11], [0, -10, -9, +10],
    [0, -1, +1, -11], [0, +10, +9, -10] )

  const oh = new Tetronimo('Oh', [14, 13, 4, 3], [0, 0, 0, 0], [0, 0, 0, 0],
    [0, 0, 0, 0], [0, 0, 0, 0] )




  const TLZISJ0 = [tee, elle, zed, eye, ess, jay, oh ]



  const makeShape = () => {
    const randomNum = Math.floor(Math.random()*3 + 3)
    for (let i = 0; i < 4; i++) {
      playerPos = TLZISJ0[randomNum].start[i]
      playerPosArr = TLZISJ0[randomNum].start
      for(let i = 0; i < squares.length; i ++) {

        squares[playerPos].classList.add('player')
        player = TLZISJ0[randomNum].name
      }

    }
    return player
  }

  makeGrid(10)
  // console.log(playerPosArr)



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
  //
  //   const spaceCheck = () => {
  //
  //   for(let i = 0; i < fixedDivsArr.length - 10; i++) {
  //     console.log(playerDivs[i].dataset.next)
  //     for(let j = 0; j < fixedDivsArr.length - 10; j++){
  //
  //       console.log(playerDivs[i].dataset.next,fixedDivsArr[j].dataset.index)
  //
  //       if (playerDivs[i].dataset.next === fixedDivsArr[j].dataset.index){
  //         return false
  //       } else {
  //         return true
  //       }
  //
  //     }
  //   }
  // }

  //     const spaceCheck = () => {
  //
  //       let fixedDivsArr = [...document.querySelectorAll('.fixed')]
  //     let playerDivs = [...document.querySelectorAll('.player')]
  //     let mergedArray = fixedDivsArr.concat(playerDivs)
  //     const merged = new Set([...fixedDivsArr , ...playerDivs])
  // if(merged.length > 4 && merged.length === mergedArray.length) {
  //   console.log(merged, mergedArray)
  //   return false
  // } else {
  //   console.log(merged, mergedArray)
  //   return true
  // }
  //NEED TO RE-WRITE THIS IN A DRY WAY






  const spaceCheck = (playerPos) => {
    return playerPosArr.every(pos =>

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

  const moveDown = () => {
    clear()
    if (onBoardCheck(playerPosArr) && spaceCheck()) {
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

      squares[playerPosArr[0]].classList.add('fixed')
      squares[playerPosArr[1]].classList.add('fixed')
      squares[playerPosArr[2]].classList.add('fixed')
      squares[playerPosArr[3]].classList.add('fixed')
      fixedSquares = fixedSquares.concat(playerPosArr)
      rowClear()
      makeShape()


    }


  }

  const moveDownAuto = () => moveDown()

  const moveDownPress = (e) => {
    switch(e.keyCode) {
      case 40: moveDown()
    }
  }




  setInterval(moveDownAuto, 1000)

  // setTimeout(moveDownAuto, 3000)
  setTimeout(spaceCheck, 6000)

  window.addEventListener('keydown', rotateShape)
  window.addEventListener('keydown', leftRight)
  window.addEventListener('keydown', moveDownPress)
  // window.addEventListener('load',  makeShape)

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
      pos >= 0 && pos < 190

    )
  }
  // console.log(spaceCheck(playerPosArr))



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

    }

  }


  const rowClear= () => {


    const rowOne = [...document.querySelectorAll('[ data-row ="0"]')].filter(square => square.className === 'grid-item fixed')
    const rowTwo = [...document.querySelectorAll('[ data-row ="1"]')].filter(square => square.className === 'grid-item fixed')
    const rowThree = [...document.querySelectorAll('[ data-row ="3"]')].filter(square => square.className === 'grid-item fixed')
    const rowFour = [...document.querySelectorAll('[ data-row ="4"]')].filter(square => square.className === 'grid-item fixed')
    const rowFive = [...document.querySelectorAll('[ data-row ="5"]')].filter(square => square.className === 'grid-item fixed')
    const rowSix = [...document.querySelectorAll('[ data-row ="6"]')].filter(square => square.className === 'grid-item fixed')
    const rowSeven= [...document.querySelectorAll('[ data-row ="7"]')].filter(square => square.className === 'grid-item fixed')
    const rowEight = [...document.querySelectorAll('[ data-row ="8"]')].filter(square => square.className === 'grid-item fixed')
    const rowNine = [...document.querySelectorAll('[ data-row ="9"]')].filter(square => square.className === 'grid-item fixed')
    const rowTen = [...document.querySelectorAll('[ data-row ="10"]')].filter(square => square.className === 'grid-item fixed')
    const rowEleven = [...document.querySelectorAll('[ data-row ="11"]')].filter(square => square.className === 'grid-item fixed')
    const rowTwelve = [...document.querySelectorAll('[ data-row ="12"]')].filter(square => square.className === 'grid-item fixed')
    const rowThirteen= [...document.querySelectorAll('[ data-row ="13"]')].filter(square => square.className === 'grid-item fixed')
    const rowFourteen = [...document.querySelectorAll('[ data-row ="14"]')].filter(square => square.className === 'grid-item fixed')
    const rowFifteen = [...document.querySelectorAll('[ data-row ="15"]')].filter(square => square.className === 'grid-item fixed')
    const rowSixteen = [...document.querySelectorAll('[ data-row ="16"]')].filter(square => square.className === 'grid-item fixed')
    const rowSeventeen = [...document.querySelectorAll('[ data-row ="17"]')].filter(square => square.className === 'grid-item fixed')
    const rowEighteen = [...document.querySelectorAll('[ data-row ="18"]')].filter(square => square.className === 'grid-item fixed')
    const rowNineteen = [...document.querySelectorAll('[ data-row ="19"]')].filter(square => square.className === 'grid-item fixed')
    const rowTwenty = [...document.querySelectorAll('[ data-row ="20"]')].filter(square => square.className === 'grid-item fixed')
    const rowTwentyOne = [...document.querySelectorAll('[ data-row ="21"]')].filter(square => square.className === 'grid-item fixed')
    const rows = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven, rowEight, rowNine,
      rowTen, rowEleven, rowTwelve, rowThirteen, rowFourteen, rowFifteen, rowSixteen, rowSeventeen,
      rowEighteen, rowNineteen, rowTwenty, rowTwentyOne]


    rows.forEach( row => {
      if(row.length === 10) {
        const fixedDivsArr = [...document.querySelectorAll('.fixed')]
        console.log(fixedDivsArr)
        fixedDivsArr.forEach(div=> div.classList.remove('fixed'))
        rows = []
      }
    } )

  }

  function makeGrid(rowNum) {

    const grid = document.querySelector('.grid')
    for (let i = 0; i < width * (width*2) + (width); i ++) {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      square.innerHTML = i
      square.dataset.index = i
      squares.push(square)
      grid.append(square)
    }

    for (let i = 10; i < 20; i ++) {
      squares[i].dataset.row = 0

    }


    for (let i = 10; i < 20; i ++) {
      squares[i].dataset.row = 19
    }
    for (let i = 20; i < 30; i ++) {
      squares[i].dataset.row = 18
    }
    for (let i = 30; i < 40; i ++) {
      squares[i].dataset.row = 17
    }

    for (let i = 40; i < 50; i ++) {
      squares[i].dataset.row = 16
    }
    for (let i = 50; i < 60; i ++) {
      squares[i].dataset.row = 15
    }
    for (let i = 60; i < 70; i ++) {
      squares[i].dataset.row = 14
    }
    for (let i = 70; i < 80; i ++) {
      squares[i].dataset.row = 13
    }
    for (let i = 80; i < 90; i ++) {
      squares[i].dataset.row = 12
    }
    for (let i = 90; i < 100; i ++) {
      squares[i].dataset.row = 11
    }
    for (let i = 100; i < 110; i ++) {
      squares[i].dataset.row = 10
    }
    for (let i = 110; i < 120; i ++) {
      squares[i].dataset.row = 9
    }
    for (let i = 120; i < 130; i ++) {
      squares[i].dataset.row = 8
    }
    for (let i = 130; i < 140; i ++) {
      squares[i].dataset.row = 7
    }
    for (let i = 140; i < 150; i ++) {
      squares[i].dataset.row = 6
    }
    for (let i = 150; i < 160; i ++) {
      squares[i].dataset.row = 5
    }
    for (let i = 160; i < 170; i ++) {
      squares[i].dataset.row = 4
    }
    for (let i = 170; i < 180; i ++) {
      squares[i].dataset.row = 3
    }
    for (let i = 180; i < 190; i ++) {
      squares[i].dataset.row = 2
    }
    for (let i = 190; i < 200; i ++) {
      squares[i].dataset.row = 1
    }
    for (let i = 200; i < 210 ; i ++) {
      squares[i].dataset.row = 0
      squares[i].style.opacity = 0
    }



  }



  makeShape()














})


//const pretendRow13 = ['','','','','','','','','','']
//const pretendRow13 = ['','','','','','','','','','']


function moveDownTwo(fullArray, arrayAbove){
  fullArray.forEach((cell,index)=>{
  //arrayAbove[index] = cell
    if (arrayAbove[index].classList.contains('fixed')) {
      cell.classList.add('fixed')
    } else {
      cell.classList.remove('fixed')
    }
  })
}
