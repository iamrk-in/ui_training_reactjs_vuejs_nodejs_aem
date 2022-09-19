import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import Column from "../components/Column";


describe("Container", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Column />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it("should have the correct class name", function() {
        const component = mount(<Column />);
        expect(component.find('div').hasClass('col-md-6')).toBe(true);
    });

});