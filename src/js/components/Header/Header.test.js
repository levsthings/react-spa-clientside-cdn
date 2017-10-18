import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'React'
import Header from './Header'

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

/*
    Enzyme
*/
