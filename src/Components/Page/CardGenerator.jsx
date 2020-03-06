import React, { Component } from "react";
import Card from "../Asset/CardShow";
import Hasil from "../Asset/HasilCard.jsx";
import Nav from "../Asset/Nav.jsx";
import Button from "../Asset/ChangeBtn"
import { Warna } from "../Asset/ButtonValue"
import Judul from "../Asset/ChangeJudul"

class CardGenerator extends Component {
  constructor() {
    super();
    this.state = {
      ukuranjudul: "1",
      judulkartu: "Judul kartu",
      ukuranisi: "6",
      isikartu: "ini adalah teks singkat untuk penjelasan isi kartu",
      warnabtn: "light",
      namabtn: "kirim",
      cardbg: "primary",
      warnatxt: "light",
      alignbtn: "center",
      aligntext: "center",
      alignjudul: "center",
      shadow: "shadow",
      warnadasar: "light",
      tes: true
    };
  }

  // ------Function Pengubah------------ //
  //untuk mengubah warnabg
  changeBgCard = event => {
    this.setState({ cardbg: event.target.value });
  };

  //untuk mengubah warna text
  changeTxtColor = event => {
    this.setState({ warnatxt: event.target.value });
  };

  //untuk mengubah warna btn
  changeWarnaBtn = event => {
    this.setState({ warnabtn: event.target.value });
  };

  //untuk mengubah warna background
  changeWarnaDasar = event => {
    this.setState({ warnadasar: event.target.value });
  };

  //untuk mengubah Judul
  changeJudulKartu = event => {
    this.setState({ judulkartu: event.target.value });
  };
  //untuk mengubah Isi
  changeIsiKartu = event => {
    this.setState({ isikartu: event.target.value });
  };
  //untuk mengubah Nama Tombol
  changeNamaBtn = event => {
    this.setState({ namabtn: event.target.value });
  };
  //untuk mengubah Align
  changeAlignJudul = event => {
    this.setState({ alignjudul: event.target.value });
  };
  changeAlignText = event => {
    this.setState({ aligntext: event.target.value });
  };
  changeAlignBtn = event => {
    this.setState({ alignbtn: event.target.value });
  };
  //Mengubah ukuran font
  changeUkuranJudul = event => {
    this.setState({ ukuranjudul: event.target.value });
  };
  changeUkuranIsi = event => {
    this.setState({ ukuranisi: event.target.value });
  };

  // ------ End Function Pengubah------------ //

  render() {
    return (
      <div>

        <Nav />
        <div className="App container mb-5">
          <h1 className="mb-5 mt-3 text-center">
            Card Generator
        </h1>

          <div className="row">
            {/* Output */}
            <div className={"col-md-5 col-sm-12 px-3 py-3 bg-" + this.state.warnadasar}>
              <Card
                ukuranjudul={this.state.ukuranjudul}
                judulkartu={this.state.judulkartu}
                warnabtn={this.state.warnabtn}
                namabtn={this.state.namabtn}
                ukuranisi={this.state.ukuranisi}
                isikartu={this.state.isikartu}
                cardbg={this.state.cardbg}
                warnatxt={this.state.warnatxt}
                aligntext={this.state.aligntext}
                alignbtn={this.state.alignbtn}
                alignjudul={this.state.alignjudul}
                shadow={this.state.shadow}
              />
            </div>
            {/* end output */}

            {/* menu samping */}
            <div className="col-md-7 col-sm-12">
              {/* Memilih bg card */}
              <Judul textClass="text-center">Card Color</Judul>
              <Button tipe={Warna} fungsi={this.changeBgCard} divClass="row mx-3" btnClass="mx-1 mt-1 col-auto" />
              {/* end */}

              {/* memilih warna text */}
              <Judul textClass="text-center">Text Color</Judul>
              <Button tipe={Warna} fungsi={this.changeTxtColor} divClass="row mx-3" btnClass="mx-1 mt-1 col-auto" />
              {/* end */}

              {/* memilih warna btn */}
              <Judul textClass="text-center">Button Color</Judul>
              <Button tipe={Warna} fungsi={this.changeWarnaBtn} divClass="row mx-3" btnClass="mx-1 mt-1 col-auto" />
              {/* end */}

              {/* memilih warna dasar */}
              <Judul textClass="text-center">Background Color</Judul>
              <Button tipe={Warna} fungsi={this.changeWarnaDasar} divClass="row mx-3" btnClass="mx-1 mt-1 col-auto" />
              {/* end */}
            </div>
            {/* End menu samping */}
          </div>
          {/* End baris 1 */}

          <div className="row mt-4">
            {/* second setting */}
            <div className="col-md-6 col-sm-12 pr-5">
              {/* Edit Bagian Judul */}
              <div className="row mb-2">
                <div className="col-8">
                  <b className="text-center ">Teks Judul</b>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.judulkartu}
                    onChange={this.changeJudulKartu}
                  />
                </div>
                <div className="col-4">
                  <b className="text-left">Ukuran Judul</b>
                  <select
                    className="form-control"
                    value={this.state.ukuranjudul}
                    onChange={this.changeUkuranJudul}
                  >
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                  </select>
                </div>
              </div>
              {/* End edit bagian judul */}

              {/* Edit bagian isi */}
              <div className="row my-2">
                <div className="col-8">
                  <b className="text-center">Teks Isi</b>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.isikartu}
                    onChange={this.changeIsiKartu}
                  />
                </div>
                <div className="col-4">
                  <b className="text-left">Ukuran Isi</b>
                  <select
                    className="form-control"
                    value={this.state.ukuranisi}
                    onChange={this.changeUkuranIsi}
                  >
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                  </select>
                </div>
              </div>
              {/* end bagian isi */}

              {/* bagian tombol */}
              <div className="row">
                <div className="col">
                  <b className="text-center my-2">Teks Tombol</b>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.namabtn}
                    onChange={this.changeNamaBtn}
                  />
                </div>
              </div>
              {/* end */}

              {/* Posisi */}
              <div className="row mt-2">
                {/* Judul */}
                <div className="col-4">
                  <b className="text-center">Posisi Judul</b>
                  <select
                    className="form-control"
                    value={this.state.alignjudul}
                    onChange={this.changeAlignJudul}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                {/* end */}

                {/* Posisi Isi */}
                <div className="col-4">
                  <b className="text-center">Posisi Isi</b>
                  <select
                    className="form-control"
                    value={this.state.aligntext}
                    onChange={this.changeAlignText}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                {/* end */}

                {/* button */}
                <div className="col-4">
                  <b className="text-center">Posisi Tombol</b>
                  <select
                    className="form-control"
                    value={this.state.alignbtn}
                    onChange={this.changeAlignBtn}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                {/* end */}
              </div>
              {/* end posisi*/}
            </div>

            {/* SourceCode */}
            <div className="col-sm-12 col-md-6">
              <b>Source Code</b>
              <Hasil
                ukuranjudul={this.state.ukuranjudul}
                judulkartu={this.state.judulkartu}
                warnabtn={this.state.warnabtn}
                namabtn={this.state.namabtn}
                ukuranisi={this.state.ukuranisi}
                isikartu={this.state.isikartu}
                cardbg={this.state.cardbg}
                warnatxt={this.state.warnatxt}
                aligntext={this.state.aligntext}
                alignbtn={this.state.alignbtn}
                alignjudul={this.state.alignjudul}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CardGenerator;
