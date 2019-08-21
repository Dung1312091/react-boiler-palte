import React from "react";
import { shallow } from "enzyme";
import Button from "./index";
describe("<Button />", () => {
  it("should render a button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button").length).toBe(1);
  });
});
