import React, { Component } from "react";

class TodoHeader extends Component {
    componentDidUpdate(prevProps) {
        var red = Math.floor(Math.random() * 265);
        var green = Math.floor(Math.random() * 265);
        var blue = Math.floor(Math.random() * 265);

        var bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        if(prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = "Class Based Life Cycle Hooks";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>Concept: <span id="inH1"></span> </h1>
                </div>
            </div>
        )
    }
}

export default TodoHeader;