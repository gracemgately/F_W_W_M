import React, { Component } from 'react'
import { Router } from 'react-router'

import { gridInfo } from './grid-info'
import { coordinates } from './coordinates-info'

import Comb from './Comb'

/**
 * COMPONENT
 */

class CombNode {
  constructor(coordinates, color){
    this.coordinate = coordinates,
    this.color = color
  }
}

export default class Grid extends Component {

  constructor(){
    super();
    this.state = {
      comb: [],
      colors: ['white', 'lime', 'red']
    }

    this.initiateGame = this.initiateGame.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  
  componentDidMount(){
    var honeyComb = [];

    coordinates.forEach(coordinate => {
      var newComb = new CombNode(coordinate, 'white')
      honeyComb.push(newComb);
    })
    this.setState({comb: honeyComb})
  }

  changeColor(currentCombCoords){
    this.state.comb.forEach((node, index) => {
      if (node.coordinate === currentCombCoords){

        var colorIndex = this.state.colors.indexOf(node.color);
        var newCombArray = this.state.comb;

        if (colorIndex === 2) {
          node.color = 'white';
          newCombArray[index].color = node.color
        }
        else if (colorIndex === 0) {
          node.color = 'lime';
          newCombArray[index].color = node.color
        }
        else {
          node.color = 'red';
          newCombArray[index].color = node.color
        }
        this.setState({comb: newCombArray})
      }
    })
  }

  initiateGame(){
    console.log('game initiated')

    //eventually dispatch some function on all components
    //to check their state and compare to that of their neighbors

  }

  render () {
    return (
    <div>
      <div>
        <svg width="600" height="570">
          <g transform="translate(300,285)">
          {
            gridInfo.map((info, index) => {
              if (this.state.comb[index]) {
                var combColor = this.state.comb[index].color
              }
              return (
                <Comb 
                key={index} 
                info={info} 
                currentColor={combColor}
                coordinate={coordinates[index]}
                changeColor={this.changeColor}/>
              )
            })
          }
            </g>
            </svg>
        </div>
          <button onClick={this.initiateGame}>IGNITE</button>
      </div>
    )
  }
}
        
// /**
//  * CONTAINER
//  */

// /**
//  * PROP TYPES
//  */


//        <g style={styles} transform={"translate(-129.90381056766577,225)"}>
//       <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//           </g>
//       <g style={styles} transform={"translate(-155.88457268119893,180)"}>
//             <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                   </g>
//       <g style={styles} transform="translate(-181.8653347947321,135)">
//           <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-207.84609690826525,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-233.8268590217984,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-259.80762113533154,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-77.94228634059948,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-103.92304845413263,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-129.90381056766577,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-155.88457268119896,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-181.86533479473212,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-207.84609690826525,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-233.8268590217984,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-25.980762113533178,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//                     </g>
//       <g style={styles} transform="translate(-51.96152422706633,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413264,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.9038105676658,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-181.86533479473212,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-207.84609690826525,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533153,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533153,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-181.86533479473212,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059947,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533164,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533157,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-155.88457268119896,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533157,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533157,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059948,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-103.92304845413263,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-129.90381056766577,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533157,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533164,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-51.96152422706631,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-77.94228634059947,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706631,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533153,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(0,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(-25.980762113533153,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.9038105676658,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413264,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(51.96152422706633,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(25.980762113533178,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(233.8268590217984,45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.86533479473212,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119896,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(103.92304845413263,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(77.94228634059948,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(259.80762113533154,0)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(233.8268590217984,-45)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(207.84609690826525,-90)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(181.8653347947321,-135)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(155.88457268119893,-180)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//       <g style={styles} transform="translate(129.90381056766577,-225)">
//         <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
//       </g>
//         </g>
//             </svg>
//         </div>
//     )
//   }
// }

