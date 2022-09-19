import React from "react";
import renderer from "react-test-renderer";

import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";
import Row from "../components/Row";

describe("Container", function() {
    
    it("should render correctly", function() {
        const tree = renderer.create(<Row />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it("should have <div> with container class", function() {
        const component = mount(<Row />);
        expect(component.find('div').hasClass('row')).toBe(true);
    });

});