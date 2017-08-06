import React, { Component } from 'react'
import { Router } from 'react-router'

import Player from './Player'

export default class Music extends Component{

    constructor(){
        super();
        this.state = {
            display: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        const play = !this.state.display;
        this.setState({display: play})
    }

    render(){
        return(
            <div className="small-container">
                Music:
            <div className="container">
            {
                (this.state.display === true) ? 
                <div>
                <button className="item" onClick={this.handleClick}>STOP</button> 
                <Player />
                </div>
                : 
                <div>
                <button className="item" onClick={this.handleClick}>START</button>
                    <div>
                        <iframe width="0" height="0" frameBorder="0"/>
                        <iframe width="0" height="0" frameBorder="0"/>
                    </div>
                </div>

            }
            </div>
            </div>
        )
    }
}

