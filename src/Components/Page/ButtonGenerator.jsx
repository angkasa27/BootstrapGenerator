import React, { Component } from 'react';
import Hasil from "../Asset/HasilButton";

class ButtonGenerator extends Component {
    constructor() {
        super();
        this.state = {
            tipe: "btn-success",
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
            <div className="App container">
                <h1 className="mb-5 mt-3 text-center">
                    Button Generator
                </h1>

                <div className="row">
                    <div className="col-md-4 col-sm-12  border-right">

                        {/* Button Show */}
                        <div className={"row mx-1 mb-3 bg-" + this.state.warnadasar}>
                            <div className="col my-5 justify-content-md-center">
                                <button type="button" class={" btn " + this.state.size + " " + this.state.tipe + " " + this.state.warnaO + " rounded" + this.state.radius}>{this.state.isi}</button>
                            </div>
                        </div>

                        {/* End Button Show */}

                        {/*outline  */}
                        <b className="text-center ">Jenis Outline Button</b>
                        <div className="row mx-1 mt-1 mb-2">
                            <button
                                className="btn btn-secondary mx-2 mt-1 col-md-auto"
                                value="-lg"
                                onClick={this.changeRadiusButton}
                            >
                                Rounded
                                </button>
                            <button
                                className="btn btn-secondary mx-2 mt-1 col-md-auto"
                                value="-circle"
                                onClick={this.changeRadiusButton}
                            >
                                Circle
                                </button>
                            <button
                                className="btn btn-secondary mx-2 mt-1 col-md-auto"
                                value="-pill"
                                onClick={this.changeRadiusButton}
                            >
                                Pill
                                </button>
                            <button
                                className="btn btn-secondary mx-2 mt-1 col-md-auto"
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
                    <div className="col-md-8 col-sm-12  ">
                        <div className="container">

                            {/* Warna Bg */}
                            <b className="text-center">Warna Background</b>
                            <div className="row mb-2">
                                <button
                                    className="btn btn-light mx-1 col-auto"
                                    value="light"
                                    onClick={this.changeWarnaDasar}
                                >
                                    light
                </button>
                                <button
                                    className="btn btn-secondary mx-1 mt-1 col-auto"
                                    value="secondary"
                                    onClick={this.changeWarnaDasar}
                                >
                                    secondary
                                </button>
                                <button
                                    className="btn btn-dark mx-1 mt-1 col-auto"
                                    value="dark"
                                    onClick={this.changeWarnaDasar}
                                >
                                    dark
                                </button>
                                <button
                                    className="btn btn-primary mx-1 mt-1 col-auto"
                                    value="primary"
                                    onClick={this.changeWarnaDasar}
                                >
                                    primary
                                </button>
                                <button
                                    className="btn btn-warning mx-1 mt-1 col-auto"
                                    value="warning"
                                    onClick={this.changeWarnaDasar}
                                >
                                    warning
                                </button>
                                <button
                                    className="btn btn-danger mx-1 mt-1 col-auto"
                                    value="danger"
                                    onClick={this.changeWarnaDasar}
                                >
                                    danger
                                </button>
                                <button
                                    className="btn btn-success mx-1 mt-1 col-auto"
                                    value="success"
                                    onClick={this.changeWarnaDasar}
                                >
                                    success
                                </button>
                                <button
                                    className="btn btn-white mx-1 mt-1 col-auto"
                                    value="a"
                                    onClick={this.changeWarnaDasar}
                                >
                                    Transparent
                                </button>
                            </div>
                            {/* End Warna BG */}

                            {/* Tipe Button */}
                            <b className="text-center">Warna Button</b>
                            <div className="row mb-2">
                                <button
                                    className="btn btn-light mx-1 mt-1 col-auto"
                                    value="btn-light"
                                    onClick={this.changeTipeButton}
                                >
                                    light
                                </button>
                                <button
                                    className="btn btn-secondary mx-1 mt-1 col-auto"
                                    value="btn-secondary"
                                    onClick={this.changeTipeButton}
                                >
                                    secondary
                                </button>
                                <button
                                    className="btn btn-dark mx-1 mt-1 col-auto"
                                    value="btn-dark"
                                    onClick={this.changeTipeButton}
                                >
                                    dark
                                </button>
                                <button
                                    className="btn btn-primary mx-1 mt-1 col-auto"
                                    value="btn-primary"
                                    onClick={this.changeTipeButton}
                                >
                                    primary
                                </button>
                                <button
                                    className="btn btn-warning mx-1 mt-1 col-auto"
                                    value="btn-warning"
                                    onClick={this.changeTipeButton}
                                >
                                    warning
                                </button>
                                <button
                                    className="btn btn-danger mx-1 mt-1 col-auto"
                                    value="btn-danger"
                                    onClick={this.changeTipeButton}
                                >
                                    danger
                                </button>
                                <button
                                    className="btn btn-success mx-1 mt-1 col-auto"
                                    value="btn-success"
                                    onClick={this.changeTipeButton}
                                >
                                    success
                                </button>
                                <button
                                    className="btn btn-white mx-1 mt-1 col-auto"
                                    value=""
                                    onClick={this.changeTipeButton}
                                >
                                    transparent
                                </button>
                            </div>
                            {/* End Tipe Button */}

                            {/*Warna Button  */}
                            <b className="text-center">Warna Outline Button</b>
                            <div className="row mb-2">
                                <button
                                    className="btn btn-light mt-1 mx-1 col-auto"
                                    value="btn-outline-light"
                                    onClick={this.changeWarnaButton}
                                >
                                    light
                                </button>
                                <button
                                    className="btn btn-secondary mt-1 mx-1 col-auto"
                                    value="btn-outline-secondary"
                                    onClick={this.changeWarnaButton}
                                >
                                    secondary
                                </button>
                                <button
                                    className="btn btn-dark mt-1 mx-1 col-auto"
                                    value="btn-outline-dark"
                                    onClick={this.changeWarnaButton}
                                >
                                    dark
                                </button>
                                <button
                                    className="btn btn-primary mt-1 mx-1 col-auto"
                                    value="btn-outline-primary"
                                    onClick={this.changeWarnaButton}
                                >
                                    primary
                                </button>
                                <button
                                    className="btn btn-warning mt-1 mx-1 col-auto"
                                    value="btn-outline-warning"
                                    onClick={this.changeWarnaButton}
                                >
                                    warning
                                </button>
                                <button
                                    className="btn btn-danger mt-1 mx-1 col-auto"
                                    value="btn-outline-danger"
                                    onClick={this.changeWarnaButton}
                                >
                                    danger
                                </button>
                                <button
                                    className="btn btn-success mt-1 mx-1 col-auto"
                                    value="btn-outline-success"
                                    onClick={this.changeWarnaButton}
                                >
                                    success
                                </button>
                                <button
                                    className="btn btn-white mt-1 mx-1 col-auto"
                                    value=""
                                    onClick={this.changeWarnaButton}
                                >
                                    transparent
                                </button>
                            </div>
                            {/* End Warna Button*/}

                            <Hasil
                                size={this.state.size}
                                tipe={this.state.tipe}
                                warnaO={this.state.warnaO}
                                radius={this.state.radius}
                                isi={this.state.isi}
                            />

                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default ButtonGenerator;
