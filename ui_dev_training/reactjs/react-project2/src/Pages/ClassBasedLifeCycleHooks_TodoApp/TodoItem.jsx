import React, { Component } from "react";

class TodoItem extends Component {
    render() {
        const { id, title, completed } = this.props.todo;
        return(
            <li>
                <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />
                <span>{title}</span>
                <span className="text-danger" onClick={() => this.props.deleteTodoProps(id)}>&times;</span>
            </li>
        )
    }
}

export default TodoItem;