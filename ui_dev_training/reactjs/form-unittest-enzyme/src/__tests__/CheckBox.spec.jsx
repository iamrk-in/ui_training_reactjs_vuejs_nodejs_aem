import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import CheckBox from '../components/CheckBox';

describe("CheckBox", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<CheckBox />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should have a single label tag', function() {
        const component = mount(<CheckBox />);
        expect(component.find('input').length).toBe(1);
    });

    it('should have the correct checkbox label', function() {
        var label = 'label';
        const component = mount(<CheckBox label={label} />);
        expect(component.find('label').text()).toEqual(label);
    });

    it('should call changeHandler once onChange', function() {
        const mockHandler = jest.fn();
        const component = mount(<CheckBox handleChange={mockHandler} />);
        const input = component.find('input').at(0);
        input.checked = true;
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
   

});