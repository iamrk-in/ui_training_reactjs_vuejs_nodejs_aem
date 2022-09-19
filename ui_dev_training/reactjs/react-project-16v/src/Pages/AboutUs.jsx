import React, { Component } from "react";

class AboutUs extends Component {
    render() {
        return(
        <div>
            { /* container */ }
            <div>
                { /* Page Heading/Breadcrumbs */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">About
                            <small>Subheading</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a>
                            </li>
                            <li class="active">About</li>
                        </ol>
                    </div>
                </div>
                { /* row */ }

                { /* Intro Content */ }
                <div class="row">
                    <div class="col-md-6">
                        <img class="img-responsive" src={require("../images/family.png")} alt="" />
                    </div>
                    <div class="col-md-6">
                        <h2>About Modern Business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
                    </div>
                </div>
                { /* row */ }

                { /* Our Customers */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="page-header">Our Customers</h2>
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                </div>
                { /* row */ }
            </div>
        </div>
        )
    }
}

export default AboutUs;