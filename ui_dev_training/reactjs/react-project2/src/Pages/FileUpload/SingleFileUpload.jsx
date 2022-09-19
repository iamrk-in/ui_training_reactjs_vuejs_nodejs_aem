import React, { Component } from "react";

export default class SingleFileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
    };

    uploadSingleFile(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        let imgPreview;
        if(this.state.file) {
            imgPreview = <img src={this.state.file} alt="" title="" className="img-thumbnail" />
        }

        return(
            <form>
                <div className="card w-25 mb-3">
                    <div className="card-body">
                        {imgPreview}
                    </div>
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>

                <button type="button" className="btn btn-primary">
                    Upload a File 
                </button>
            </form>
        )
    }
}