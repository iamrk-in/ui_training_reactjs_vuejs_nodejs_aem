import React from "react";
import renderer from "react-test-renderer";
import Container from "../components/Container";
import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";

describe("Container", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Container />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it("should have <div> with container class", function() {
        const component = mount(<Container />);
        expect(component.find('div').hasClass('container')).toBe(true);
    });

});