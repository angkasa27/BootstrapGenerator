import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div
                className={
                    "card border-0  bg-" +
                    this.props.cardbg +
                    " text-" +
                    this.props.warnatxt +
                    " " +
                    this.props.shadow
                }
            >
                <div className={"card-body text-" + this.props.alignbtn}>
                    <p
                        className={
                            "h" + this.props.ukuranjudul + " text-" + this.props.alignjudul
                        }
                    >
                        {this.props.judulkartu}
                    </p>
                    <p
                        className={
                            "h" + this.props.ukuranisi + " text-" + this.props.aligntext
                        }
                    >
                        {this.props.isikartu}
                    </p>
                    <a className={"btn btn-" + this.props.warnabtn} href="#">
                        {this.props.namabtn}
                    </a>
                </div>
            </div>
        );
    }
}

export default Card;
