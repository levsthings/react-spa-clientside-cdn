import {shallow} from 'enzyme'
import React from 'React'
import Header from './Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})
