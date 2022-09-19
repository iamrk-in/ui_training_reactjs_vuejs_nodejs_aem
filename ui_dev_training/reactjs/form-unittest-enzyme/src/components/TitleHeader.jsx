import React from "react";
import Proptypes from 'prop-types';

const TitleHeader = (props) => {
    return(<h1 className={props.className}>{props.title}</h1>)
}

TitleHeader.propTypes = {
    className: Proptypes.string, 
    title: Proptypes.string
}

TitleHeader.defaultProps = {
    className: "text-center", 
    title: "hello world"
}


export default TitleHeader;