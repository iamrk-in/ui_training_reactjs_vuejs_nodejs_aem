import React from "react";
import renderer from "react-test-renderer";
import TitleHeader from "../components/TitleHeader";
import { mount } from "enzyme";
import enzymeConfig from "../../enzymeConfig";

describe("TitleHeader", function() {
    
    it("should render correctly", function() {
        var title = "Hello World!";
        const tree = renderer.create(<TitleHeader title={title} />).toJSON();
        // const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    
    it("should have the correct title prop", function() {
        var title = "New Title";
        const component = mount(<TitleHeader title={title} />);
        expect(component.find('h1').text()).toEqual("New Title");
    });

});