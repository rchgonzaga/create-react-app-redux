import React, { Component } from 'react';

class MainComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = props

        console.log(props)
    }

    CheckLogin(){
        return true
    }

}

export default MainComponent