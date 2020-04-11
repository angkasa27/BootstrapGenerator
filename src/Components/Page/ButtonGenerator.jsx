import React, { Component } from 'react';
import Hasil from "../Asset/HasilButton";
import Nav from "../Asset/Nav.jsx";
import Button from "../Asset/ChangeBtn"
import { WarnaTrans, Size, Outline, btnColor, btnOutline } from "../Asset/ButtonValue"
import Judul from "../Asset/ChangeJudul"

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
            <div>
                <Nav />
                <div className="App container">
                    <h1 className="mb-5 mt-3 text-center">
                        Button Generator
                </h1>

                    <div className="row">
                        <div className="col-md-4 col-sm-12  border-right">

                            {/* Button Show Justify contet wont work*/}
                            <div className={"row mx-1 mb-3 bg-" + this.state.warnadasar}>
                                <div className="col my-5 justify-content-center">
                                    <button type="button" className={" btn " + this.state.size + " " + this.state.tipe + " " + this.state.warnaO + " " + this.state.radius}>{this.state.isi}</button>
                                </div>
                            </div>

                            {/* End Button Show */}

                            {/*outline  */}
                            <div className="row justify-content-center">
                                <Judul textClass="text-center">Bentuk Button</Judul>
                                <Button tipe={Outline} fungsi={this.changeRadiusButton} divClass=" mx-1 mt-1 mb-2 btn-group" btnClass="px-3" />
                            </div>
                            {/* End outline*/}

                            {/*Ukuran  */}
                            <div className="row justify-content-center">
                                <Judul textClass="text-center">Ukuran Button</Judul>
                                <Button tipe={Size} fungsi={this.changeRadiusButton} divClass="mx-1 mt-1 mb-2 btn-group" btnClass="px-4" />
                            </div>
                            {/* End Ukuran*/}

                            {/* Isi */}
                            <Judul textClass="text-center" divClass="row justify-content-center">Isi Button</Judul>
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
                                <Judul textClass="text-center" divClass="row justify-content-center">Warna Background</Judul>
                                <Button tipe={WarnaTrans} fungsi={this.changeWarnaDasar} divClass="row mb-2" btnClass="mx-1 mt-1 col-auto" />
                                {/* End Warna BG */}

                                {/* Tipe Button */}
                                <Judul textClass="text-center" divClass="row justify-content-center">Warna Button</Judul>
                                <Button tipe={btnColor} fungsi={this.changeTipeButton} divClass="row mb-2" btnClass="mx-1 mt-1 col-auto" />
                                {/* End Tipe Button */}

                                {/*Warna Button  */}
                                <Judul textClass="text-center" divClass="row justify-content-center">Warna Outline</Judul>
                                <Button tipe={btnOutline} fungsi={this.changeWarnaButton} divClass="row mb-2" btnClass="mx-1 mt-1 col-auto" />
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
            </div>
        );
    }
}

export default ButtonGenerator;
