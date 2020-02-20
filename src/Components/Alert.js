import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div
        className={
          "alert alert-" +
          this.props.tipe +
          " text-" +
          this.props.warna +
          " text-" +
          this.props.align
        }
      >
        <h4>{this.props.judul}</h4>
        <p>{this.props.children}</p>
        {/* {this.props.index % 2 == 0 ? "genap" : "ganjil"} */}
      </div>
    );
  }
}

export default Alert;
