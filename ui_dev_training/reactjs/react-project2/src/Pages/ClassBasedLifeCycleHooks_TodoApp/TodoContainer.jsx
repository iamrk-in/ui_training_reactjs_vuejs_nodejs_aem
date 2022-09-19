import React, { Component } from "react";

import axios from "axios";
import uuid from "node-uuid";

import TodosList from "./TodosList";
import TodoHeader from "./TodoHeader";
import InputTodo from "./InputTodo";

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [], 
            show: false
        }
    }

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => this.setState({
                todos: response.data
            }))
    }

    addTodoItem = title => {
        // creating the new todo item and then later added the new item into the existing list of items 

        const newTodo = {
            id: uuid.v4(), 
            title: title, 
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id == id) {
                    todo.completed = !todo.completed
                }
                return todo;
            }), 
            show: !this.state.show
        })
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <TodoHeader 
                            headerSpan = {this.state.show} 
                        />
                        
                        <InputTodo 
                            addTodoProps = {this.addTodoItem} 
                            />

                        <TodosList
                            todos = {this.state.todos} 
                            handleChangeProps = {this.handleChange} 
                            deleteTodoProps = {this.delTodo} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoContainer;