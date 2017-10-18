<h1 align='center'>Ship A Client-Side React SPA</h1>

[![CircleCI](https://img.shields.io/circleci/project/github/ShippableBoilerplates/react-spa-clientside-cdn.svg?style=flat-square)](https://circleci.com/gh/ShippableBoilerplates/react-spa-clientside-cdn)
[![Coveralls](https://img.shields.io/coveralls/ShippableBoilerplates/react-spa-clientside-cdn.svg?style=flat-square)](https://coveralls.io/github/ShippableBoilerplates/react-spa-clientside-cdn)
[![Gemnasium](https://img.shields.io/gemnasium/ShippableBoilerplates/react-spa-clientside-cdn.svg?style=flat-square)](https://gemnasium.com/github.com/ShippableBoilerplates/react-spa-clientside-cdn)
[![license](https://img.shields.io/github/license/ShippableBoilerplates/react-spa-clientside-cdn.svg?style=flat-square)](https://img.shields.io/github/license/ShippableBoilerplates/react-spa-clientside-cdn)
[![Style](https://img.shields.io/badge/code%20style-standard%2F4-ff69b4.svg?style=flat-square)]()


## Introduction

This is a client-side React boilerplate that can be built and pushed to a CDN or to any static hosting solution like Surge, S3 et cetera.

If you don't want to serve your static files on a managed solution and want full control of your front-end infrastructure, check [react-spa-clientside](https://github.com/ShippableBoilerplates/react-spa-clientside) instead.

## The Stack

- React/Redux/Redux-Saga for UI.
- Glamor as a CSS-in-JS solution.
- Pug for generating static HTML.
- Jest & Enzyme for simple unit testing, without mocks.

## Usage

### Development Mode:

- Prerequisites: `node` and `yarn`

Clone the repo:

```bash
git clone https://github.com/ShippableBoilerplates/react-spa-clientside-cdn
rm -rf .git && git init
```
Install dependencies:

```bash
yarn install
```

Run in development mode via `webpack-dev-server`

```bash
yarn dev
```

**`webpack-dev-server` will be serving on: `localhost:3000`**

### Production Mode:

To build assets in production mode:

```bash
yarn build/prod
```

To serve the static assets locally and test things:

```bash
yarn serve
```

The compiled assets will be in the public folder. You can upload them to a CDN and you're done.

### Additional Commands:

- Run `yarn lint` for linting with auto fixing:
- Run `yarn test` for testing.
- Run `yarn cleanup` to manually remove built assets.
