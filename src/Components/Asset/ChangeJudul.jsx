import React, { Component } from 'react'

export default class ChangeJudul extends Component {
    render() {
        return (
            <div className={this.props.divClass} >
                <b className={this.props.textClass}>{this.props.children}</b>
            </div >
        )
    }
}