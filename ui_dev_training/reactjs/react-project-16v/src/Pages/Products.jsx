import React, { Component } from "react";
import SingleProduct from "./SingleProduct";

class Products extends Component {
    // declare the object - there is a built object ie., 'state'
    state = {
        products: [
            { id: 543, name: "hp" }, 
            { id: 474, name: "dell" }, 
            { id: 267, name: "acer" }
        ], 
        showProducts: true
    };

    // toggleEffect
    toggleEffect = () => {
        let doesShow = this.state.showProducts;
        // update the state - property
        this.setState({
            showProducts: !doesShow
        })
    };

    // updateAllRecords 
    updateAllRecords = () => {
        this.setState({
            products: [
                { id: 1543, name: "hp1" }, 
                { id: 1474, name: "del1l" }, 
                { id: 2167, name: "ace1r" }
            ]
        })
    };

    render() {
        return(
        <div>
            { /* container */ }
            <div>
                { /* Page Heading/Breadcrumbs */ }
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">About
                            <small>Subheading</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a>
                            </li>
                            <li className="active">Products</li>
                        </ol>
                    </div>
                </div>
                { /* row */ }

                { /* Intro Content */ }
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive" src={require("../images/family.png")} alt="" />
                    </div>
                    <div className="col-md-6">

                        <button type="button" className="btn btn-sm btn-primary mb-3" onClick={this.toggleEffect}> toggle - show / hide </button>

                        <button type="button" className="btn btn-sm btn-primary mb-3" onClick={this.updateAllRecords}> update all records </button>

                        <hr />

                        <div className="row mt-3 mb-3">
                        {this.state.showProducts === true ? (<div>
                            <div className="col-sm-4"><SingleProduct id = {this.state.products[0].id}  name = {this.state.products[0].name} /></div>
                            
                            <div className="col-sm-4"><SingleProduct id = {this.state.products[1].id}  name = {this.state.products[1].name} updateAllRecords = {this.updateAllRecords} /></div>

                            <div className="col-sm-4"><SingleProduct id = {this.state.products[2].id}  name = {this.state.products[2].name} /></div>
                        </div>) : null}
                        </div>
                        
                    </div>
                </div>
                { /* row */ }
            </div>
        </div>
        )
    }
}

export default Products;