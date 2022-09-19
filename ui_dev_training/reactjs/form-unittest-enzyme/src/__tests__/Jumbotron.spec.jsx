import React from "react";
import renderer from "react-test-renderer";
import Jumbotron from "../components/Jumbotron";
import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";

describe("Jumbotron", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Jumbotron />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should have <div> with container class", function() {
        const component = mount(<Jumbotron />);
        expect(component.find('div').hasClass('jumbotron')).toBe(true);
    });


});