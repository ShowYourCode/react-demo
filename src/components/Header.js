import React, { Component } from 'react'

class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div>
                头部{this.props.textTitle}
            </div>
        )
    }
}

export default Header