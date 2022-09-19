import React, { Component } from "react";
import MultiFileUpload from "./MultiFileUpload";
import SingleFileUpload from "./SingleFileUpload";

class FileUpload extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-12">
          <h4>File Upload</h4>

          <div className="row">
              <div className="col-6">
                <SingleFileUpload />
              </div>
              <div className="col-6">
                <MultiFileUpload />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;