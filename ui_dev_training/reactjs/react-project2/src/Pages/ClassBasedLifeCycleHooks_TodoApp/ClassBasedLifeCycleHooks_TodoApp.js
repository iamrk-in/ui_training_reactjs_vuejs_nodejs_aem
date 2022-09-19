import React, { Component } from "react";
import TodoContainer from "./TodoContainer";

class ClassBasedLifeCycleHooks_TodoApp extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-12">
          <h4>Class Based Life Cycle Hooks TodoApp</h4>

          <TodoContainer />
        </div>
      </div>
    );
  }
}

export default ClassBasedLifeCycleHooks_TodoApp;