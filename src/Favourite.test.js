import React from 'react';
import { shallow } from 'enzyme';
import Favourite from './Favourite'
describe("Favourite", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Favourite />);
  });
});