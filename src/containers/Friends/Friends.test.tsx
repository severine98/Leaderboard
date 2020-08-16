import React from 'react';
import { shallow } from 'enzyme';
import Friends from './Friends';

describe("Friends tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<Friends />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})