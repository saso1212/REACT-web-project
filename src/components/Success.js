import React, { Component } from 'react'


class TestBtn extends Component {
    render() {
        return (
            <div>
                <button style={{color: this.props.color}}>{this.props.text}</button>
            </div>
        )
    }
}


export default TestBtn