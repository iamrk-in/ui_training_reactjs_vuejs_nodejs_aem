import React from "react";
import { connect } from "react-redux";

let Loading = ({loading}) => (
    loading ? (
        <div>
            <h4>loading</h4>
        </div>
    ) : (
        <div>
            <h4>not loading</h4>
        </div>
    )
)

let mapStateToProps = (state) => ({
    loading: state.loading
});

Loading = connect(
    mapStateToProps, 
    null
)(Loading);

export default Loading;