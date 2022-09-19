import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      inputData: "", 
      todoItems: []
    }
  }

  changeTodoInput = (event) => {
    this.setState({
      inputData: event.target.value
    })
  }

  addTodo = (event) => {
    if(this.state.inputData !== "") {
      let newTodoItem = [
        ...this.state.todoItems, this.state.inputData
      ];
      this.setState({
        todoItems: newTodoItem, 
        inputData: ""
      })
    }
    //console.log(this.state.todoItems);
  }

  deleteTodo = (index) => {
    let todoItems = [...this.state.todoItems];
    let newTodoItems = todoItems.filter((item, key) => {
      return index !== key
    })
    this.setState({
      todoItems: newTodoItems
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <h4>TodoApp</h4>

          <div className="input-group">
            <input type="text" placeholder="ex., enter anything" className="form-control" value={this.state.inputData} onChange={this.changeTodoInput} />
            <div className="input-group-append">
              <span className="btn btn-success" onClick={this.addTodo}>Add</span>
            </div>
          </div>
          
          <TodoList items = {this.state.todoItems} deleteTodo = {this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default TodoApp;