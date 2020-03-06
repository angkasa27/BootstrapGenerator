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
            <div className="text-left px-3 pt-3 pb-1 bg-light text-dark rounded">
                <div className="row mb-2">
                    <h4 className="col-6">Main Code</h4>
                    {
                        /* Logical shortcut for only displaying the 
                           button if the copy command exists */
                        document.queryCommandSupported('copy') &&
                        <div className="col-6 text-right">
                            {this.state.copySuccess}
                            <button className="btn btn-sm btn-primary rounded-pill" data-toggle="tooltip" data-placement="left" title="Copy the Code" onClick={this.copyToClipboard}>Copy</button>
                        </div>
                    }
                </div>


                <form>
                    <textarea
                        className="form-control kode bg-light text-dark border-0" rows="9" readOnly
                        ref={(textarea) => this.textArea = textarea}
                        value={'<div class="card border-0 bg-' + this.props.cardbg + " text-" + this.props.warnatxt + '"> \r' +
                            '\t<div class="card-body text-' + this.props.alignbtn + '">\r' +
                            '\t\t<p class="h' + this.props.ukuranjudul + " text-" + this.props.alignjudul + '">' + this.props.judulkartu + "</p>\r" +
                            '\t\t<a class="btn btn-' + this.props.warnabtn + '" href="...">' + this.props.namabtn + "</a>\r" +
                            "\t</div>\r" +
                            "</div>"
                        }
                    />
                </form>
            </div>
        );
    }
}

export default Hasil;
