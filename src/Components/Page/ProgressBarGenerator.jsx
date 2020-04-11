import React, { Component } from "react";
import Nav from "../Asset/Nav.jsx";
// import Button from "../Asset/ChangeBtn"
// import { Warna, Align } from "../Asset/ButtonValue"
// import Judul from "../Asset/ChangeJudul"

class ProgressBarGenerator extends Component {
    constructor() {
        super();
        this.state = {
            tipe: "success",
            judul: "fatal error",
            isi: "ini content dari alert",
            warna: "success",
            align: "center"
        };
    }

    //untuk mengubah tipe
    changeTipeAlert = event => {
        this.setState({ tipe: event.target.value });
    };

    //untuk mengubah Judul
    changeJudulAlert = event => {
        this.setState({ judul: event.target.value });
    };

    render() {
        return (
            <div >
                <Nav />
                <div className="App container">
                    <h1 className="mb-5 mt-3 text-center">
                        Progress Bar Generator
                    </h1>
                    <div className="row">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: 1000 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default ProgressBarGenerator;
