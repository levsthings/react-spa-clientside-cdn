import React from 'React'
import {shallow} from 'enzyme'
import {Clicker} from './Clicker'
import {default as action} from '../../actions/'

test('should render Clicker component correctly', () => {
    const wrapper = shallow(
        <Clicker
            updateClickCount={action.updateClickCount}
            counter={0}
            joke={''}
        />)
    expect(wrapper).toMatchSnapshot()
})
