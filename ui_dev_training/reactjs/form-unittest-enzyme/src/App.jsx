import React, { Component } from "react";

import Jumbotron from './components/Jumbotron';
import TitleHeader from './components/TitleHeader';
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import Form from "./components/Form";

export default class App extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron>
              <TitleHeader className="text-center" title="Form Unit Test" />
            </Jumbotron>

            <Container>
              <Row>
                <Column classsName="col-md-6 offset-md-3">
                  <Form />
                </Column>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}