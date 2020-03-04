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
            <div className="text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded container">
                <div className="row mb-2">
                    <h4 className="col-6">Output</h4>
                    {
                        /* Logical shortcut for only displaying the 
                           button if the copy command exists */
                        document.queryCommandSupported('copy') &&
                        <div className="col-6 text-right">
                            {this.state.copySuccess}
                            <button className="btn btn-sm btn-secondary rounded-pill" data-toggle="tooltip" data-placement="left" title="Copy the Code" onClick={this.copyToClipboard}>Copy</button>
                        </div>
                    }
                </div>


                <form className="row">
                    <textarea
                        className="form-control kode bg-dark text-white border-0" rows="5" readOnly
                        ref={(textarea) => this.textArea = textarea}
                        value={
                            '<div class="alert alert-' + this.props.tipe + " text-" + this.props.warna + " text-" + this.props.align + "> \r" +
                            '\t<h4>' + this.props.judul + "</h4>\r" +
                            '\t<p>' + this.props.isi + "</p>\r" +
                            "</div>"
                        }
                    />
                </form>
            </div>
        );
    }
}

export default Hasil;
