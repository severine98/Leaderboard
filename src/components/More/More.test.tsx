import React from 'react';
import More from './More';
import { shallow } from 'enzyme';

describe("More tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<More/>);
  })
  
  it("should render", () => {
    expect(component).toBeTruthy();
  })
})