import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { messageService } from "@/_services";
import { HomePage } from "@/HomePage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.subscription = messageService.getMessage().subscribe(message => {
            if(message) {
                this.setState({
                    messages: [ ...this.state.messages, message]
                })
            } else {
                this.setState({
                    messages: []
                })
            }
        })
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const { messages } = this.state;
        return(
            <Router>
                <div>
                    <div className = "jumbotron">
                        <div className = "container text-center">
                            <div className = "row">
                                <div className = "col-sm-8 offset-sm-2">
                                    {messages.map((message, index) => 
                                        <div key = {index} className = "alert alert-success">{message.text}</div>
                                    )}

                                    <Route exact path = "/" component = {HomePage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App };