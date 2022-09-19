import React, { Component } from "react";
import ReactDOM from "react-dom";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateState(event) {
    this.setState({
      data: event.target.value
    })
  }

  clearInput() {
    this.setState({
      data: ""
    })
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <h4>Refs</h4>

          <p>the Ref's is used to return a reference to the element. Ref's should be avoided in most cases.  the Ref can be useful when we need DOM measurements or to add methods to the components. </p>

          <div>
            <input type="text" className="form-control mb-2" value={this.state.data} onChange={this.updateState} ref="myInput" />

            <button type="button" className="btn btn-danger btn-md" onClick={this.clearInput}> clear </button>

            <br />

            <h4>Data: {this.state.data}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Refs;