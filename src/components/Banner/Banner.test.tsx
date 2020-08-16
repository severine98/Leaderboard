import React from 'react';
import Banner from './Banner';
import { shallow } from 'enzyme';

describe("Banner tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<Banner />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})