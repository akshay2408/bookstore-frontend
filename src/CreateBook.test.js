import React from 'react';
import { shallow } from 'enzyme';
import CreateBook from './CreateBook'

  it("should insert value in components state with the events value", () => {
    // given
    const component = shallow(<CreateBook />);
    const form = component.find('input');
    // when
    form.props().onChange({target: {
      name: 'myName',
      value: 'myValue'
    }});
    // then
    expect(component.state('input')).toEqual('myValue');
  });