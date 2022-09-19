import React from "react";
import ReactDOM from "react-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./index.css"
import AboutUs from "./Pages/AboutUs";
import FormValidation from "./Pages/FormValidation";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Users from "./Pages/Users";

const configRouting = (
    <Router>
        <div>
            { /* nav */ }
            <Nav />
            
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/formvalidation" element={<FormValidation />} />
                </Routes>

                { /* footer */ }
                <Footer />
            </div>
        </div>
    </Router>
);

ReactDOM.render(
    configRouting, 
    document.getElementById("root")
);