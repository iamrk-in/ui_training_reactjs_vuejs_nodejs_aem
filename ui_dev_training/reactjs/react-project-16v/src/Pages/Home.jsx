import React, { Component } from "react";

class Home extends Component {
    render() {
        return(
        <div>
            { /* container */ }
            <div>
                { /* marketing icons */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Modern Business by StartBootstrap
                        </h1>
                    </div>

                    <div class="col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4><i class="fa fa-fw fa-check"></i> Bootstrap v3.3.7</h4>
                            </div>
                            <div class="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                <a href="#" class="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4><i class="fa fa-fw fa-check"></i> Bootstrap v3.3.7</h4>
                            </div>
                            <div class="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                <a href="#" class="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4><i class="fa fa-fw fa-check"></i> Bootstrap v3.3.7</h4>
                            </div>
                            <div class="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                <a href="#" class="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>

                { /* row products */ }
                <div class="row products">
                    <div class="col-lg-12">
                        <h2 class="page-header">Our Products</h2>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="https://placehold.it/320x150" alt="" />
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a></h4>
                                <p>This product is cheap, and has a very good quality. You must buy it right now!</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="https://placehold.it/320x150" alt="" />
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a></h4>
                                <p>This product is cheap, and has a very good quality. You must buy it right now!</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <img src="https://placehold.it/320x150" alt="" />
                            <div class="caption">
                                <h4 class="pull-right">$24.99</h4>
                                <h4><a href="#">First Product</a></h4>
                                <p>This product is cheap, and has a very good quality. You must buy it right now!</p>
                            </div>
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-lg-4 col-md-4">
				        <h4><a href="#">Like our products?</a></h4>
				        <p>Pick your products today to get free shipping!</p>
				        <a class="btn btn-primary" target="_blank" href="#">Let's go!</a>
			        </div>

                </div>

                { /* portfolio section */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="page-header">Portfolio Heading</h2>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img class="img-responsive img-portfolio img-hover" src={require("../images/cruise.png")} alt="" />
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img class="img-responsive img-portfolio img-hover" src={require("../images/family.png")} alt="" />
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img class="img-responsive img-portfolio img-hover" src={require("../images/getaways.png")} alt="" />
                        </a>
                    </div>
                </div>

                { /* call to action */ }
                <div class="well">
                    <div class="row">
                        <div class="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div class="col-md-4">
                            <a class="btn btn-lg btn-primary btn-block" href="#">Call to Action</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default Home;