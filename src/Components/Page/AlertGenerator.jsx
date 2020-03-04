import React, { Component } from "react";
import Alert from "../Asset/AlertShow";
import Hasil from "../Asset/HasilAlert";
import Nav from "../Asset/Nav.jsx";
import Button from "../Asset/ChangeBtn"
import { Warna, Align } from "../Asset/ButtonValue"
import Judul from "../Asset/ChangeJudul"

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
              <Judul textClass="text-center">Header Alert</Judul>
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
              <Judul textClass="text-center">Isi Alert</Judul>
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
              <Judul textClass="text-center" divClass="row justify-content-center">Text Align</Judul>
              <Button tipe={Align} fungsi={this.changeAlignAlert} divClass="row mb-2 mt-1 btn-group" btnClass="px-4" />
              {/* End Align */}



            </div>
            <div className="col-md-7 col-sm-12">
              <div className="container">

                {/* Tipe Alert */}
                <Judul textClass="text-center">Warna Background Alert</Judul>
                {/* <div className="row justify-content-md-center">
                  <Button tipe={Empty} fungsi={this.changeTipeAlert} divClass="row mb-2" btnClass="mt-1 col-auto px-4 rounded-0 py-4" />
                </div> */}
                <Button tipe={Warna} fungsi={this.changeTipeAlert} divClass="row mb-2" btnClass="mx-1 mt-1 col-auto" />
                {/* End Tipe Alert */}

                {/*Warna Alert  */}
                <Judul textClass="text-center">Warna Text Alert</Judul>
                <Button tipe={Warna} fungsi={this.changeWarnaAlert} divClass="row mb-2" btnClass="mx-1 mt-1 col-auto" />
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
