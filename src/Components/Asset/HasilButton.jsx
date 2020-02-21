import React from 'react';

class hasil extends React.Component {

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
            <div className="text-left px-3 pt-3 pb-1 mt-3 bg-dark text-light rounded">
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


                <form>
                    <textarea
                        className="form-control kode bg-dark text-white border-0" rows="3" disable
                        ref={(textarea) => this.textArea = textarea}
                        value={'<button type="button" class="btn ' + this.props.size + ' ' + this.props.tipe + ' ' + this.props.warnaO + ' rounded' + this.props.radius + '">\r \t' + this.props.isi + '\r</button>'}
                    />
                </form>
            </div>
        );
    }

}

export default hasil;