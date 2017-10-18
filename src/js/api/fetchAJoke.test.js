import 'babel-polyfill'
import fetchAJoke from './fetchAjoke'

test('Should fetch a joke', async () => {
    const data = await fetchAJoke()
    expect(typeof data).toBe('string')
})
