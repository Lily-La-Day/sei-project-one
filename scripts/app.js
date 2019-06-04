window.addEventListener('DOMContentLoaded', () => {

  const width = 10
  const squares = []
  let playerIndex = 35
  let playerPos = 0
  let playerPosArr = []
  let fixedSquares = []
  let shapeName = ''
  const randomNum = Math.floor(Math.random()*1)
  let player = ''

  const clear = () => {
    squares.forEach(square =>
      square.classList.remove('player')
    )
  }

  //function to make grid, 20 x 10 with an extra hidden row to account for
  //difficulty with shifting rows
  init()

  const TLZISJ0 = [
    {
      name: 'Tee',
      start: [14, 3, 13, 23],
      ninety: [0, -11, -1, 9],
      oneEighty: [0, -1, +1, 10],
      twoSeventy: [0, -9, +1, +11],
      threeSixty: [0, -1, +1, -10],
      create: function(playerIndex) {
        return this.start
      },
      turn: function(playerIndex) {
        console.log(this.ninety.map(num=> playerIndex + num))
        if(playerPosArr === this.start){
          playerPosArr = this.ninety.map(num=> playerIndex + num)
          return this.ninety.map(num=> playerIndex + num)
        } else if (playerPosArr ===
           this.ninety.map(num=> playerIndex + num)) {
          return this.oneEighty.map(num=> playerIndex + num)
        }
      }
      //
      //  this.oneEighty.map(num=> playerIndex + num)
      //
      //
      //  this.twoSeventy.map(num=> playerIndex + num)
      //
      // this.threeSixty.map(num=> playerIndex + num)
      // }
    },

    {
      name: 'Elle',     //NOT RIGHT
      start: [14, 3, 13, 23],
      ninety: [0, -11, -1, 9],
      oneEighty: [0, -1, +1, 10],
      twoSeventy: [0, -9, +1, +11],
      threeSixty: [0, -1, +1, -10],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    },


    {
      name: 'Zed',
      start: [14, 4, 3, 15],
      ninety: [0, -10, -11, 1],
      oneEighty: [0, 1, +10, -9],
      twoSeventy: [0, -1, +10, +11],
      threeSixty: [0, -10, -1, +9],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    },
    {
      name: 'Eye',
      start: [14, 15, 13, 12],
      ninety: [0, 1, -1, -2],
      oneEighty: [0, -10, -20, +10],
      twoSeventy: [0, -1, 1, 2],
      threeSixty: [0, -10, +10, +20],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    },
    {
      name: 'Ess',
      start: [14, 4, 5, 13],
      ninety: [0, -10, -9, -1],
      oneEighty: [0, -10, +1, +9],
      twoSeventy: [0, +1, +10, +9],
      threeSixty: [0, -10, +1, +11],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    },
    {
      name: 'Jay',
      start: [14, 15, 13, 25],
      ninety: [0, +1, -1, +11],
      oneEighty: [0, -10, -9, +10],
      twoSeventy: [0, -1, +1, -11],
      threeSixty: [0, +10, +9, -10],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    },

    {
      name: 'Oh',
      start: [14, 13, 4, 3],
      ninety: [0, -1, -10, -11],
      oneEighty: [0, -1, -10, -11],
      twoSeventy: [ 0, -1, -10, -11],
      threeSixty: [0, -1, -10, -11],
      create: function(playerIndex) {
        return this.start
      },
      turnNinety: function(playerIndex) {
        return this.ninety.map(num=> playerIndex + num)
      },
      turnOneEighty: function(playerIndex) {
        return this.oneEighty.map(num=> playerIndex + num)
      },
      turnTwoSeventy: function(playerIndex) {
        return this.twoSeventy.map(num=> playerIndex + num)
      },
      turnThreeSixty: function(playerIndex) {
        return this.threeSixty.map(num=> playerIndex + num)
      }
    }


  ]


  // const makeShape = (playerIndex) => {
  //   let rando = 0
  //   const randomNum = Math.floor(Math.random()*7)
  //   for (let i = 0; i < TLZISJ0[0].start.length; i ++) {
  //     rando = TLZISJ0[randomNum].start[i]
  //     squares.forEach(square =>square[playerIndex + rando].classList.add('player'))
  //     playerPos.unshift(playerIndex+rando)
  //     playerPos = playerPos.slice(0,4)
  //   }
  //
  //   playerIndex = playerPos[3]
  //   shapeName = TLZISJ0[randomNum].name
  //   console.log(shapeName)
  //   return shapeName
  //
  // }




  // console.log(TLZISJ0[randomNum].start)


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
  console.log(playerPosArr)


  const rotateShape = () => {

    switch(player) {
      case 'Tee':

      console.log(playerPos)
      // TLZISJ0[0].turn(playerIndex)
      // for(let i = 0; i < 4; i++){
      //   playerPos = TLZISJ0[0].turn(playerIndex)[i]
      //   for(let i = 0; i < squares.length; i ++) {
      //
      //     squares[playerPos].classList.add('player')

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



    }


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
