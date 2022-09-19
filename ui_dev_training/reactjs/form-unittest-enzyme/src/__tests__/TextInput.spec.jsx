import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import TextInput from "../components/TextInput";


describe("TextInput", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<TextInput />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have div with correct class name', function() {
        const component = mount(<TextInput />);
        expect(component.find('div').hasClass('form-group')).toBe(true);
    });

    it('should have label with default title', function() {
        const component = mount(<TextInput />);
        expect(component.find('label').text().toEqual('text input'));
    });

    it('should call changeHandler onChange on input', function() {
        const mockHandler = jest.fn();
        const component = mount(<TextInput handleChange={mockHandler} />);
        const input = component.find('input');
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });

});