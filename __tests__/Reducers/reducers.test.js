import React from 'react'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme'
import { expect as chaiExpect } from 'chai'

import renderer from 'react-test-renderer'
import dataReducer from '../../src/js/reducers/dataReducer'

describe('>>>Reducer --- Update click count', () => {
    it('Reducer for increments count on click', () => {
        let state = {
            data: {
                counter: 0,
                joke: ''
            }
        }
        state = dataReducer(state,
          {
            type: 'UPDATE_CLICK_COUNT',
            payload: 3
          }
        )
        expect(state).toEqual({ data: {
          counter: 4,
          joke: ''
        }})
      })
  })

  describe('>>>Reducer --- Receive new CN joke', () => {
    it('Reducer for receiving new ChuckNorris joke', () => {
      let state = {
          data: {
              counter: 0,
              joke: ''
          }
      }
      let joke = 'I dont use debuggers, I stare at code until it confesses'
      state = dataReducer(state,
        {
          type: 'GET_CHUCK_NORRIS_JOKE',
          payload: joke
        }
      )
      expect(state).toEqual({ data: {
        counter: 0,
        joke: joke
      }})
    })
  })
