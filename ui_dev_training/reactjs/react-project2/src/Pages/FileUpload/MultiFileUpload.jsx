import React, { Component } from "react";

export default class MultiFileUpload extends Component {
    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props);
        this.state = {
            files: [null]
        }
        this.uploadMultiFile = this.uploadMultiFile.bind(this);
    };

    uploadMultiFile(event) {
        this.fileObj.push(event.target.files);
        console.log(this.fileObj);
        for(let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
            console.log(this.fileArray);
        }
        this.setState({
            files: this.fileArray
        })
    }

    render() {
        
        return(
            <form>
                {(this.fileArray || []).map(url => (
                    <img src={url} className="w-25" />
                ))}
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultiFile} multiple />
                </div>

                <button type="button" className="btn btn-primary">
                    Upload a File 
                </button>
            </form>
        )
    }
}