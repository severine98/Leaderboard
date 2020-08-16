import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App tests", () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<App />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
});