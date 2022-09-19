import React, { Component } from "react";
import ContactView from "./views/contact-view";
import CounterView from "./views/counter-view";

class ContextAPI extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-4">
          <h4>Counter</h4>

          <CounterView />
        </div>
        <div className="col-8">
          <h4>Contacts</h4>

          <ContactView />          
        </div>
      </div>
    );
  }
}

export default ContextAPI;