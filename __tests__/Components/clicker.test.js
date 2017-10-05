import React from 'react'
import { shallow, configure } from 'enzyme'
import { expect as chaiExpect } from 'chai'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import ConnectedClicker, { Clicker } from '../../src/js/components/Clicker/Clicker'
import actions from '../../src/js/actions'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
    const initialState =
    {
        data: {
            counter: 0,
            joke: ''
        }
    }

    const mockStore = configureStore()

    const clickerProps = {
        updateClickCount: a => a,
        counter: 0,
        joke: ''
    }
    let store, container, pureContainer
    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<Provider store={store}>
            <ConnectedClicker {...clickerProps} />
        </Provider>)
        pureContainer = shallow(<Clicker {...clickerProps} />)
    })
    // Test sub elements
    it('+++ contains 2 p-tags and 1 img-tag', () => {
        const ps = pureContainer.find('p').map(n => n)
        const img = pureContainer.find('img').map(n => n)
        chaiExpect(ps.length).equal(2)
        chaiExpect(img.length).equal(1)
    })

    // Test initial props
    it('+++ check counter prop matches with initialState', () => {
        chaiExpect(container.prop('counter')).equal(initialState.data.counter)
    })
    it('+++ check joke prop matches with initialState', () => {
        chaiExpect(container.prop('joke')).equal(initialState.data.joke)
    })

    // Test props after action dispatch
    it('+++ check action type on dispatching, and new updated props ', () => {
        const testJoke = 'New random joke about ChuckNorris'
        store.dispatch(actions.updateClickCount(5))
        store.dispatch(actions.getChuckNorrisJoke(testJoke))
        const action = store.getActions()
        expect(action[0].type).toBe('UPDATE_CLICK_COUNT')
        expect(action[1].type).toBe('GET_CHUCK_NORRIS_JOKE')
    })
})
