import { shallow } from "enzyme";
import expect from "expect.js";
import Test1 from "../src/component/test1";
import React from "react";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

configure({ adapter: new Adapter() });

describe("Test1 Test", function() {
  let wrapper = shallow(<Test1 />);
  it("Test1 must have Button", function() {
    expect(wrapper.children()).to.have.length(1);
  });

  it("Test1 must have btn", function() {
    expect(wrapper.find(".btn")).to.have.length(1);
  });
});
