import React from "react";
import { shallow } from "enzyme";
import Header from "../containers/Header";
import App from "../../App";
import renderer from 'react-test-renderer';


describe("Header component", () => {
  it("shows expenses length in header", () => {
    setTimeout(() => {
      const wrapper = shallow(<Header />);
      const lengt = wrapper.find("p").text();
      expect(lengt.toEqual(`Total Expenses: ${25}`));
    }, 3000);
  });
});

it("matches the snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
