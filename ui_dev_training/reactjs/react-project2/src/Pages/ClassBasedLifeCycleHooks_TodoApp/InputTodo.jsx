import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    }

    handleUserInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUserSubmit = event => {
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
    }

    render() {
        return (
            <div className="row">
                <div className="col-6 offset-3">
                    <form onSubmit={this.handleUserSubmit}>
                        <div className="row">
                            <div className="col-8">
                            <input 
                                type="text"
                                className="form-control" 
                                placeholder="ex., enter any item" 
                                value={this.state.title} 
                                name="title" 
                                onChange={this.handleUserInput} 
                                />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default InputTodo;