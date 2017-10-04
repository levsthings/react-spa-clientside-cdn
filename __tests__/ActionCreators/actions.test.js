import React from 'react'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme'
import { expect as chaiExpect } from 'chai'

import renderer from 'react-test-renderer'

import actions from '../../src/js/actions'
//import { updateClickCount, getChuckNorrisJoke } from '../../src/actions'

describe('>>>Action --- Update click count', () => {
    it('Increments count on click', () => {
        const add = actions.updateClickCount(10)
        expect(add).toEqual({ type: "UPDATE_CLICK_COUNT", payload: 10})
      })
  })

  describe('>>>Action --- Get Chucks reandom joke', () => {
      it('Has received new joke', () => {
          const newJoke = 'New random joke about ChuckNorris'
          const add = actions.getChuckNorrisJoke(newJoke)
          expect(add).toEqual({ type: "GET_CHUCK_NORRIS_JOKE", payload: newJoke})
        })
    })
