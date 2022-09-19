import React from "react";

class TodoList extends React.Component {
    render() {
        return(
            <ul className="list-group list-group-flush">
                {this.props.items.map((item, index) => {
                    return(
                        <li className="list-group-item bg-light d-flex justify-content-between">
                        {item}
                            <button type="button" className="btn btn-danger text-danger-badge" onClick={() => {this.props.deleteTodo(index)}}>&times;</button>
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}

export default TodoList;