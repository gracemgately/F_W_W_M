import React, { Component } from 'react'
import { Router } from 'react-router'

import Grid from './Grid'

export default class Navbar extends Component{
    render(){
        return(
            <div className="small-container main-page">
                <div>FIRE WALK WITH ME</div>
                <Grid />
            </div>
        )
    }
}