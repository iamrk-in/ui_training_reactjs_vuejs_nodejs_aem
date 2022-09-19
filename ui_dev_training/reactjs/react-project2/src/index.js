import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LeftPanel from "./Components/LeftPanel";

// pages
import Home from "./Pages/Home/Home";
import FormValidation from "./Pages/FormValidation/FormValidation";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Refs from "./Pages/Refs/Refs";
import RestApi from "./Pages/RestApi/RestApi";

import TodoApp from "./Pages/TodoApp/TodoApp";
import ClassBasedLifeCycleHooks_TodoApp from "./Pages/ClassBasedLifeCycleHooks_TodoApp/ClassBasedLifeCycleHooks_TodoApp";
import FunctionalLifeCycleHooks_PhotosApp from "./Pages/FunctionalLifeCycleHooks_PhotosApp/FunctionalLifeCycleHooks_PhotosApp";
import StyledComponents from "./Pages/StyledComponents/StyledComponents";
import ContextAPI from "./Pages/ContextAPI/ContextAPI";
//import MaterialUI_CrudOperations from "./Pages/MaterialUI_CrudOperations/MaterialUI_CrudOperations";
import Conditional_Rendering from "./Pages/Conditional_Rendering/Conditional_Rendering";

import "./styles.css";
import Accordion from "./Pages/Accordion/Accordion";
import Gallery from "./Pages/GalleryFilter/Gallery";


const routing = (
    <Router>
    <div className="container">
        <Header />
        
        <div className="row">
            <LeftPanel />

            <div class="col-sm-9">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form-validation" element={<FormValidation />} />
                    <Route path="/file-upload" element={<FileUpload />} />
                    <Route path="/ref" element={<Refs />} />
                    <Route path="/restapi" element={<RestApi />} />
                    <Route path="/todoapp" element={<TodoApp />} />
                    <Route path="/cblch-todoapp" element={<ClassBasedLifeCycleHooks_TodoApp />} />
                    <Route path="/fblch-photosapp" element={<FunctionalLifeCycleHooks_PhotosApp />} />
                    <Route path="/styled-components" element={<StyledComponents />} />
                    <Route path="/context-api" element={<ContextAPI />} />
                    {/* <Route path="/mui-crud-operations" element={<MaterialUI_CrudOperations />} /> */}
                    <Route path="/conditional-rendering" element={<Conditional_Rendering />} />
                    <Route path="/accordion" element={<Accordion />} />
                    <Route path="/gallery-filter" element={<Gallery />} />
                </Routes>
            </div>
        </div>

        <Footer />
    </div>
    </Router>
);

const container = document.createElement("div");
document.body.appendChild(container);
render(routing, container);