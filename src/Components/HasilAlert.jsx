import React, { Component } from "react";

class Hasil extends Component {

    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
    };

    render() {
        return (
            <div className="text-left px-3 pt-3 pb-1 mb-3 bg-dark text-light rounded kode">

                <p>
                    {'<div class="alert alert-' +
                        this.props.tipe +
                        " text-" +
                        this.props.warna +
                        " text-" +
                        this.props.align + ">"}
                </p>
                <p>
                    {'<h4>' +
                        this.props.judul +
                        "</h4>"}
                </p>
                <p>
                    {'<p>' +
                        this.props.isi +
                        "</p>"}
                </p>
                <p>{"</textArea>"}</p>


            </div>
        );
    }
}

export default Hasil;
