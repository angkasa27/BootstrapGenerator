import React, { Component } from 'react';
// import Hasil from "../Asset/HasilButton";

class ButtonGenerator extends Component {
    constructor() {
        super();
        this.state = {
            tipe: "success",
            isi: "Send",
            warnaO: "",
            radius: "",
            size: "",
            warnadasar: "dark"
            // align: "center"
        };
    }

    //untuk mengubah tipe
    changeTipeButton = event => {
        this.setState({ tipe: event.target.value });
    };
    changeSizeButton = event => {
        this.setState({ size: event.target.value });
    };

    //untuk mengubah isi
    changeIsiButton = event => {
        this.setState({ isi: event.target.value });
    };

    changeWarnaButton = event => {
        this.setState({ warnaO: event.target.value });
    };

    changeRadiusButton = event => {
        this.setState({ radius: event.target.value });
    };

    //untuk mengubah warna background
    changeWarnaDasar = event => {
        this.setState({ warnadasar: event.target.value });
    };

    render() {
        return (
            <div className="App container mt-5">
                <h1 className="mb-5 mt-5 text-center">
                    Button Generator
                </h1>

                <div className="row">
                    <div className="col-4 border-right">

                        {/* Button Show */}
                        <div className={"row mx-1 mb-3 bg-" + this.state.warnadasar}>
                            <div className="col my-5 justify-content-md-center">
                                <button type="button" class={" btn " + this.state.size + " btn-" + this.state.tipe + " btn-outline-" + this.state.warnaO + " rounded" + this.state.radius}>{this.state.isi}</button>
                            </div>
                        </div>

                        {/* End Button Show */}

                        {/*outline  */}
                        <b className="text-center ">Jenis Outline Button</b>
                        <div className="row mx-1 mt-1 mb-2">
                            <button
                                className="btn btn-secondary mx-2 col-auto"
                                value="-lg"
                                onClick={this.changeRadiusButton}
                            >
                                Rounded
                                </button>
                            <button
                                className="btn btn-secondary mx-2 col-auto"
                                value="-circle"
                                onClick={this.changeRadiusButton}
                            >
                                Circle
                                </button>
                            <button
                                className="btn btn-secondary mx-2 col-auto"
                                value="-pill"
                                onClick={this.changeRadiusButton}
                            >
                                Pill
                                </button>
                            <button
                                className="btn btn-secondary mx-2 col-auto"
                                value="-0"
                                onClick={this.changeRadiusButton}
                            >
                                Square
                                </button>
                        </div>
                        {/* End outline*/}

                        {/*Ukuran  */}
                        <b className="text-center ">Ukuran Button</b>
                        <div className="row mt-1 mx-1 mb-2">
                            <button
                                className="btn btn-secondary mx-3 col-3"
                                value="btn-sm"
                                onClick={this.changeSizeButton}
                            >
                                Small
                            </button>
                            <button
                                className="btn btn-secondary mx-2 col-3"
                                value=""
                                onClick={this.changeSizeButton}
                            >
                                Medium
                            </button>
                            <button
                                className="btn btn-secondary mx-3 col-3"
                                value="btn-lg"
                                onClick={this.changeSizeButton}
                            >
                                Large
                            </button>
                        </div>
                        {/* End Ukuran*/}

                        {/* Isi */}
                        <b className="text-center">Isi Button</b>
                        <div className="row mx-1 mt-1 mb-2">
                            <input
                                type="text"
                                name="header"
                                className="form-control"
                                value={this.state.isi}
                                onChange={this.changeIsiButton}
                            />
                        </div>
                        {/* End Isi */}


                    </div>
                    <div className="col-8   ">
                        <div className="container">

                            {/* Warna Bg */}
                            <b className="text-center">Warna Background</b>
                            <div className="row mt-1 mb-2">
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
                                <button
                                    className="btn btn-white mx-1 col-auto"
                                    value="a"
                                    onClick={this.changeWarnaDasar}
                                >
                                    Transparent
                                </button>
                            </div>
                            {/* End Warna BG */}

                            {/* Tipe Button */}
                            <b className="text-center">Warna Button</b>
                            <div className="row mt-1 mb-2">
                                <button
                                    className="btn btn-light mx-1 col-auto"
                                    value="light"
                                    onClick={this.changeTipeButton}
                                >
                                    light
                                </button>
                                <button
                                    className="btn btn-secondary mx-1 col-auto"
                                    value="secondary"
                                    onClick={this.changeTipeButton}
                                >
                                    secondary
                                </button>
                                <button
                                    className="btn btn-dark mx-1 col-auto"
                                    value="dark"
                                    onClick={this.changeTipeButton}
                                >
                                    dark
                                </button>
                                <button
                                    className="btn btn-primary mx-1 col-auto"
                                    value="primary"
                                    onClick={this.changeTipeButton}
                                >
                                    primary
                                </button>
                                <button
                                    className="btn btn-warning mx-1 col-auto"
                                    value="warning"
                                    onClick={this.changeTipeButton}
                                >
                                    warning
                                </button>
                                <button
                                    className="btn btn-danger mx-1 col-auto"
                                    value="danger"
                                    onClick={this.changeTipeButton}
                                >
                                    danger
                                </button>
                                <button
                                    className="btn btn-success mx-1 col-auto"
                                    value="success"
                                    onClick={this.changeTipeButton}
                                >
                                    success
                                </button>
                                <button
                                    className="btn btn-white mx-1 col-auto"
                                    value="a"
                                    onClick={this.changeTipeButton}
                                >
                                    transparent
                                </button>
                            </div>
                            {/* End Tipe Button */}

                            {/*Warna Button  */}
                            <b className="text-center">Warna Outline Button</b>
                            <div className="row mt-1 mb-2">
                                <button
                                    className="btn btn-light mx-1 col-auto"
                                    value="light"
                                    onClick={this.changeWarnaButton}
                                >
                                    light
                                </button>
                                <button
                                    className="btn btn-secondary mx-1 col-auto"
                                    value="secondary"
                                    onClick={this.changeWarnaButton}
                                >
                                    secondary
                                </button>
                                <button
                                    className="btn btn-dark mx-1 col-auto"
                                    value="dark"
                                    onClick={this.changeWarnaButton}
                                >
                                    dark
                                </button>
                                <button
                                    className="btn btn-primary mx-1 col-auto"
                                    value="primary"
                                    onClick={this.changeWarnaButton}
                                >
                                    primary
                                </button>
                                <button
                                    className="btn btn-warning mx-1 col-auto"
                                    value="warning"
                                    onClick={this.changeWarnaButton}
                                >
                                    warning
                                </button>
                                <button
                                    className="btn btn-danger mx-1 col-auto"
                                    value="danger"
                                    onClick={this.changeWarnaButton}
                                >
                                    danger
                                </button>
                                <button
                                    className="btn btn-success mx-1 col-auto"
                                    value="success"
                                    onClick={this.changeWarnaButton}
                                >
                                    success
                                </button>
                                <button
                                    className="btn btn-white mx-1 col-auto"
                                    value="a"
                                    onClick={this.changeWarnaButton}
                                >
                                    transparent
                                </button>
                            </div>
                            {/* End Warna Button*/}

                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default ButtonGenerator;
