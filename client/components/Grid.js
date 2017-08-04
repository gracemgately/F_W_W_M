import React, { Component } from 'react'
import { Router } from 'react-router'

import { gridInfo } from './grid-info'
import { coordinates } from './coordinates-info'
import { CombNode } from './comb-constructor'
import { findNeighbors } from './comb-neighbors'

//FUNCTIONS FOR GAME
import { ignite } from './ignite-trees';
import { putOut } from './kill-fire';
import { combIndicesToMutate } from './mutate-comb'

import Comb from './Comb'

/**
 * COMPONENT
 */
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


  //generating new comb object with coordinates that map to a 2D 
  //location on the hexagonal grid, then placing them in an array
  //and putting them on the state so we have access to all of them
  componentDidMount(){
    var honeyComb = [];

    coordinates.forEach(coordinate => {
      var newComb = new CombNode(coordinate, 'white')
      honeyComb.push(newComb);
    })

    this.setState({comb: honeyComb})
  }


  //changing color of a particular comb location on the 2D coordinate
  //grid according to whether it is a tree (lime), a fire (red), or 
  //empty (white)
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

  //starting the game onClick and generating a new iteration of the
  //complete honeycomb according to a slightly modified version of the
  //forest-fire spread algorithm
  initiateGame(){
    console.log('game initiated')

    let newCombArray = this.state.comb;

    this.state.comb.forEach((node, index) => {

      //CASE: PUT OUT SMALL FIRE --> this check comes first because you need to see if the
      //next space will become red or white, and only if it does not will you check to see if any 
      //trees will ignite 
      if(node.color === 'red'){

        let nodeNeighbors = findNeighbors(node.coordinate);
        let nodesToChangeCoords = putOut(node, nodeNeighbors, this.state.comb);
        
        //if a red comb is surrounded by three or more trees, turn it into an empty space    
        if (nodesToChangeCoords.length){
            var changeIndices = combIndicesToMutate(nodesToChangeCoords, this.state.comb);
            changeIndices.forEach(index => {
              newCombArray[index].color = 'white';
            })
         }

        //if a red comb is surrounded by less than three trees and does't run into
        //a tree, make that node 'walk' along the x-axis and leave an empty space behind it 
        if (!nodesToChangeCoords.length){

          this.state.comb.forEach((combNode, index) => {

            var fireWalk = setInterval(() => {
              if (combNode.coordinate[0] === node.coordinate[0] && combNode.coordinate[1] === node.coordinate[1]) {
                //console.log('WHITE WALK BEFORE', newCombArray[index])
                  newCombArray[index].color = 'white';
                //console.log('WHITE WALK AFTER', newCombArray[index])
              }
              if (combNode.coordinate[0] === (node.coordinate[0] + 1) && combNode.coordinate[1] === node.coordinate[1]) {
                  if (combNode.color === 'white') {
                    //console.log('RED WALK BEFORE', newCombArray[index])
                    newCombArray[index].color = 'red';
                    //console.log('RED WALK AFTER', newCombArray[index])
                }
              }
              clearInterval(fireWalk);

            },100)

            fireWalk;

          })
        }
      }

      //CASE: IGNITE TREES
      if (node.color === 'lime') {

        let nodeNeighbors = findNeighbors(node.coordinate);
        let nodesToChangeCoords = ignite(node, nodeNeighbors, this.state.comb);

        if (nodesToChangeCoords.length){
            var changeIndices = combIndicesToMutate(nodesToChangeCoords, this.state.comb);
            changeIndices.forEach(index => {
              //console.log('IGNITE BEFORE', newCombArray[index])
              newCombArray[index].color = 'red';
              //console.log('IGNITE AFTER', newCombArray[index])
            })
         }
    }

      //CASE: RANDOMLY GENERATE FIRE IN EMPTY SPACE 
      if (node.color === 'white'){

      }

      //FINALLY SET STATE TO MODIFIED ARRAY
  })

    //put state on an interval so all elements are loaded and state updates at once
    var stateWalk = setInterval(() => {
      this.setState({comb: newCombArray});
      clearInterval(stateWalk);
    }, 200)

    stateWalk;
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

//NOTE: NAME THIS FIRE WALK WITH ME


