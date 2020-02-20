import React, { Component } from "react";

class BacgroundColor extends Component {
    constructor() {
        super();
        this.state = {
            warnadasar: "light"
        };
    }

    //untuk mengubah warna background
    changeWarnaDasar = event => {
        this.setState({ warnadasar: event.target.value });
    };
    render() {
        return (
            <div className="row mx-3">
                <button
                    className="btn btn-light mx-1 col-auto"
                    value="light"
                    onClick={this.changeWarnaDasar}
                >
                    light
                </button>
                <button
                    className="btn btn-secondary mx-1 col-auto"
                    value="secondary"
                    onClick={this.changeWarnaDasar}
                >
                    secondary
                </button>
                <button
                    className="btn btn-dark mx-1 col-auto"
                    value="dark"
                    onClick={this.changeWarnaDasar}
                >
                    dark
                </button>
                <button
                    className="btn btn-primary mx-1 col-auto"
                    value="primary"
                    onClick={this.changeWarnaDasar}
                >
                    primary
                </button>
                <button
                    className="btn btn-warning mx-1 col-auto"
                    value="warning"
                    onClick={this.changeWarnaDasar}
                >
                    warning
                </button>
                <button
                    className="btn btn-danger mx-1 col-auto"
                    value="danger"
                    onClick={this.changeWarnaDasar}
                >
                    danger
                </button>
                <button
                    className="btn btn-success mx-1 col-auto"
                    value="success"
                    onClick={this.changeWarnaDasar}
                >
                    success
                </button>
            </div>
        );
    }
}

export default BacgroundColor;
