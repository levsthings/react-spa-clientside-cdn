import fetch from 'isomorphic-fetch'

export default function fetchAjoke() {
    return fetch('https://hebgae6thk.execute-api.us-east-2.amazonaws.com/dev/random-fact')
        .then(res => res.json())
        .then(res => res.joke.fact)
}
