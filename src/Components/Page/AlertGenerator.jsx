import React, { Component } from "react";
import Alert from "../Asset/AlertShow";
import Hasil from "../Asset/HasilAlert";
import Nav from "../Asset/Nav.jsx";

class AlertGenerator extends Component {
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
  //untuk mengubah isi
  changeIsiAlert = event => {
    this.setState({ isi: event.target.value });
  };
  //untuk mengubah warna
  changeWarnaAlert = event => {
    this.setState({ warna: event.target.value });
  };
  //untuk mengubah Align
  changeAlignAlert = event => {
    this.setState({ align: event.target.value });
  };

  render() {
    return (
      <div >
        <Nav />
        <div className="App container">
          <h1 className="mb-5 mt-3 text-center">
            Alert Generator
        </h1>

          <div className="row">
            <div className="col-md-5 col-sm-12">
              <Alert
                index="2"
                tipe={this.state.tipe}
                judul={this.state.judul}
                warna={this.state.warna}
                align={this.state.align}
              >
                {this.state.isi}
              </Alert>
              {/* End Alert Show */}


              {/* Judul */}
              <b className="text-center">Header Alert</b>
              <div className="row mt-1 mx-1 mb-2">
                <input
                  type="text"
                  name="header"
                  className="form-control"
                  value={this.state.judul}
                  onChange={this.changeJudulAlert}
                />
              </div>
              {/* End Judul */}

              {/* Isi */}
              <b className="text-center">Isi Alert</b>
              <div className="row mt-1 mx-1 mb-2">
                <input
                  type="text"
                  name="header"
                  className="form-control"
                  value={this.state.isi}
                  onChange={this.changeIsiAlert}
                />
              </div>
              {/* End Isi */}

              {/* Align */}
              <b className="text-left ">Text Align</b>
              <div className="row mt-1 mb-2">
                <button
                  className="btn btn-secondary col-md-3 mt-1 mx-3"
                  value="left"
                  onClick={this.changeAlignAlert}
                >
                  left
                </button>
                <button
                  className="btn btn-secondary col-md-3 mt-1 mx-3"
                  value="center"
                  onClick={this.changeAlignAlert}
                >
                  center
                </button>
                <button
                  className="btn btn-secondary col-md-3 mt-1 mx-3"
                  value="right"
                  onClick={this.changeAlignAlert}
                >
                  right
                </button>
              </div>
              {/* End Align */}



            </div>
            <div className="col-md-7 col-sm-12">
              <div className="container">

                {/* Tipe Alert */}
                <b className="text-center">Warna Alert</b>
                <div className="row mb-2">
                  <button
                    className="btn btn-light mx-1 mt-1 col-auto"
                    value="light"
                    onClick={this.changeTipeAlert}
                  >
                    light
                </button>
                  <button
                    className="btn btn-secondary mx-1 mt-1 col-auto"
                    value="secondary"
                    onClick={this.changeTipeAlert}
                  >
                    secondary
                </button>
                  <button
                    className="btn btn-dark mx-1 mt-1 col-auto"
                    value="dark"
                    onClick={this.changeTipeAlert}
                  >
                    dark
                </button>
                  <button
                    className="btn btn-primary mx-1 mt-1 col-auto"
                    value="primary"
                    onClick={this.changeTipeAlert}
                  >
                    primary
                </button>
                  <button
                    className="btn btn-warning mx-1 mt-1 col-auto"
                    value="warning"
                    onClick={this.changeTipeAlert}
                  >
                    warning
                </button>
                  <button
                    className="btn btn-danger mx-1 mt-1 col-auto"
                    value="danger"
                    onClick={this.changeTipeAlert}
                  >
                    danger
                </button>
                  <button
                    className="btn btn-success mx-1 mt-1 col-auto"
                    value="success"
                    onClick={this.changeTipeAlert}
                  >
                    success
                </button>
                </div>
                {/* End Tipe Alert */}

                {/*Warna Alert  */}
                <b className="text-center">Warna Text</b>
                <div className="row mb-2">
                  <button
                    className="btn btn-light mx-1 mt-1 col-auto"
                    value="light"
                    onClick={this.changeWarnaAlert}
                  >
                    light
                </button>
                  <button
                    className="btn btn-secondary mx-1 mt-1 col-auto"
                    value="secondary"
                    onClick={this.changeWarnaAlert}
                  >
                    secondary
                </button>
                  <button
                    className="btn btn-dark mx-1 mt-1 col-auto"
                    value="dark"
                    onClick={this.changeWarnaAlert}
                  >
                    dark
                </button>
                  <button
                    className="btn btn-primary mx-1 mt-1 col-auto"
                    value="primary"
                    onClick={this.changeWarnaAlert}
                  >
                    primary
                </button>
                  <button
                    className="btn btn-warning mx-1 mt-1 col-auto"
                    value="warning"
                    onClick={this.changeWarnaAlert}
                  >
                    warning
                </button>
                  <button
                    className="btn btn-danger mx-1 mt-1 col-auto"
                    value="danger"
                    onClick={this.changeWarnaAlert}
                  >
                    danger
                </button>
                  <button
                    className="btn btn-success mx-1 mt-1 col-auto"
                    value="success"
                    onClick={this.changeWarnaAlert}
                  >
                    success
                </button>
                </div>
                {/* End Warna Alert*/}

                <div className="row mb-5">
                  <Hasil
                    tipe={this.state.tipe}
                    warna={this.state.warna}
                    align={this.state.align}
                    judul={this.state.judul}
                    isi={this.state.isi}
                  />
                </div>

                {/* Alert Show */}
              </div>

            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default AlertGenerator;
