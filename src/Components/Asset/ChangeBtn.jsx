import React, { Component } from 'react'

export default class ChangeBtn extends Component {
    render() {
        return (
            <div className={this.props.divClass} >
                {this.props.tipe.map((tipe, id) => {
                    return (
                        <button
                            key={id}
                            className={"btn btn-" + tipe.warnaBtn + " " + this.props.btnClass}
                            value={tipe.value}
                            onClick={this.props.fungsi}
                        >
                            {tipe.nama}
                        </button>
                    );
                })
                }
            </div >
        )
    }
}