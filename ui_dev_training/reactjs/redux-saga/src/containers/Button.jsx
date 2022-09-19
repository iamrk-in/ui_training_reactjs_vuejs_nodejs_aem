import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

let btnStyles = {
    backgroundColor: "#dedede", 
    border: "1px solid #000", 
    borderRadius: "3px", 
    padding: ".2rem .3rem", 
    display: "block", 
    margin:"2rem auto" , 
    fontSize: "16px"
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    render() {
        return(
            <button
                type="button" 
                style={!this.state.hover ? btnStyles : {...btnStyles, backgroundColor: "#feaede"}} 
                onMouseOver={() => {this.setState({
                    hover: true
                })}} 
                onMouseOut={() => {this.setState({
                    hover: false
                })}}
            >
                press to see news
            </button>
        )
    }
}

const mapDispatchToProps = {
    getNews: getNews, 
}

Button = connect(
    null, 
    mapDispatchToProps, 
)(Button);

export default Button;