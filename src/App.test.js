import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  it('should render app', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
  })

  it('should contain 1 div el', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div').length)
      .toBe(1)
    expect(wrapper.find('.App').exists())
      .toBe(true)
  })
})