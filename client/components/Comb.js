import React, { Component } from 'react'
import { Router } from 'react-router'

/**
 * COMPONENT
 */
export default class Comb extends Component {

constructor(props){
    super(props);
    this.state = {
        current: 'white',
        colors: ['white', 'lime', 'red']
    };

    this.handleClick = this.handleClick.bind(this);
}

handleClick(event, newColor){
    event.preventDefault();
    
    var colorIndex = this.state.colors.indexOf(this.state.current)
    if (colorIndex === 2){
        this.setState({current: 'white'})
    }
    else if (colorIndex === 0) {
        this.setState({current: 'lime'})
    }
    else this.setState({current: 'red'})
}

render () {

    const styles={
      fill: this.state.current,
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


