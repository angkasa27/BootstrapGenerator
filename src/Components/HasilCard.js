import React, { Component } from "react";

class Hasil extends Component {
  render() {
    return (
      <div className="text-left px-3 pt-3 pb-1 mb-3 bg-dark text-light rounded kode">
        <p>
          {'<div class="card border-0 bg-' +
            this.props.cardbg +
            " text-" +
            this.props.warnatxt +
            '">'}
        </p>
        <p>{'<div class="card-body text-' + this.props.alignbtn + '">'}</p>
        <p>
          {'<p class="h' +
            this.props.ukuranjudul +
            " text-" +
            this.props.alignjudul +
            '">' +
            this.props.judulkartu +
            "</p>"}
        </p>
        <p>
          {'<p class="h' +
            this.props.ukuranisi +
            " text-" +
            this.props.aligntext +
            '">' +
            this.props.isikartu +
            "</p>"}
        </p>
        <p>
          {'<a class="btn btn-' +
            this.props.warnabtn +
            '" href="...">' +
            this.props.namabtn +
            "</a>"}
        </p>
        <p>{"</div>"}</p>
        <p>{"</div>"}</p>
      </div>
    );
  }
}

export default Hasil;
