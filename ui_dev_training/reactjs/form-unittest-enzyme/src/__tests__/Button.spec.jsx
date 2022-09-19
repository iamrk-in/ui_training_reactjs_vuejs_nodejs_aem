import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import Button from '../components/Button';

describe("Button", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
    });
   

    it('should have a single <a> where href props exists', function() {
        const component = mount(<Button href='check.com' />);
        expect(component.find('a').length).toBe(1);
    });

    it('should have a single <button> where href props exists', function() {
        const component = mount(<Button />);
        expect(component.find('button').length).toBe(1);
    });

});