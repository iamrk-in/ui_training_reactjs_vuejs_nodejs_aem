import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodosList extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-6 offset-3">
                    {this.props.todos.map((todo, index) => (
                        <TodoItem 
                            key = {todo.id} 
                            todo = {todo} 
                            handleChangeProps = {this.props.handleChangeProps} 
                            deleteTodoProps = {this.props.deleteTodoProps} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default TodosList;