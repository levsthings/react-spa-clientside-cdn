import React from 'React'
import {shallow} from 'enzyme'
import App from './App'

test('should render Header correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
})
