import React from "react";
import { messageService } from "@/_services";

class HomePage extends React.Component {
    sendMessage() {
        messageService.sendMessage("sending a message from HomePage to App!")
    }

    clearMessages() {
        messageService.clearMessages();
    }

    render() {
        return(
            <div>
                <h4> react - observables </h4>

                <button type="button" className="btn btn-primary" onClick={this.sendMessage}> send message </button>

                <button type="button" className="btn btn-danger" onClick={this.clearMessages}> clear message </button>
            </div>
        );
    }
}

export { HomePage };