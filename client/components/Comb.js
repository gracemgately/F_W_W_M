import React, { Component } from 'react'
import { Router } from 'react-router'

/**
 * COMPONENT
 */
export default class Comb extends Component {

constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
}

handleClick(event){
    event.preventDefault();
    
    this.props.changeColor(this.props.coordinate)
}

render () {

    const styles={
      fill: this.props.currentColor,
      stroke: "black",
      strokeWidth: 3
    }
    return (
        <g onClick={this.handleClick}
            style={styles} 
            transform={"translate(" + this.props.info[0] + "," + this.props.info[1] + ")"}>
                <polygon points="30.000,0.000 15.000,25.981 -15.000,25.981 -30.000,0.000 -15.000,-25.981 15.000,-25.981" transform="rotate(-30)"></polygon>
        </g>
    )
  }
}
        
// /**
//  * CONTAINER
//  */

// /**
//  * PROP TYPES
//  */


