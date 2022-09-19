import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import Form from "../components/Form";

describe("Form", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it("should capture firstname correctly onChange", function() {
        const component = mount(<Form />);
        const input = component.find('input').at(0);
        input.instance().value = 'hello';
        input.simulate('change');
        expect(component.state().firstname).toEqual('hello');
    });


    it("should capture lastname correctly onChange", function() {
        const component = mount(<Form />);
        const input = component.find('input').at(1);
        input.instance().value = 'world';
        input.simulate('change');
        expect(component.state().lastname).toEqual('world');
    });

    it('should capture checkbox ticked correctly onChange', function() {
        const component = mount(<Form />);
        const input = component.find('input').at(2);
        input.instance().checked = true;
        input.simulate('change');
        expect(component.state().subscribed).toEqual(true);
    });

    it('should call alert() when submit button is clicked', function() {
        const state = {firstname:'hello', lastname:'world', subscribed: true};
        const expectedArg = "firstname: hello, lastname: world, subscribed: yes";
        const component = mount(<Form />);
        window.alert = jest.fn();
        component.find('form').simulate('submit');
        expect(window.alert).toHaveBeenCalledWith(expectedArg);
    });

});