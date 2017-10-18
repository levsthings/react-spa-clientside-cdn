import React from 'react'
import {shallow} from 'enzyme'
import {Clicker} from './Clicker'

let updateClickCount, wrapper

beforeEach(() => {
    updateClickCount = jest.fn()
    wrapper = shallow(
        <Clicker
            updateClickCount={updateClickCount}
            counter={0}
            joke={''}
        />)
})

test('should render Clicker component correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle updateClickCount', () => {
    wrapper.find('img').simulate('click')
    expect(updateClickCount).toHaveBeenLastCalledWith(0)
})
