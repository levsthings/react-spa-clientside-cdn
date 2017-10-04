import React from 'react'
import Header from '../src/js/components/Header/Header'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme'
import { expect as chaiExpect } from 'chai'

import renderer from 'react-test-renderer'

it('contains one h1 tag', () => {
  const headerDiv = shallow(
    <Header />
  )
  const h1s = headerDiv.find('h1').map(node => node)
  chaiExpect(h1s.length).to.be.equal(1)
})

it('contains text: Ship a React SPA!', () => {
  const headerDiv = shallow(
    <Header />
  )
  const h1s = headerDiv.find('h1').map(node => node)
  if (h1s.length ===  1) {
    chaiExpect(h1s[0].text()).to.be.equal('Ship a React SPA!')
  }
})


it('Renders header correctly', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
})
