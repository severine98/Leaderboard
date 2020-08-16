import React from 'react';
import { shallow } from 'enzyme';
import Leaderboard from './Leaderboard';

describe("Leaderboard tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<Leaderboard/>);
  })
  
  it("should render", () => {
    expect(component).toBeTruthy();
  })
})