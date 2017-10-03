<h1 align='center'>Ship A Client-Side React SPA</h1>

## Introduction

This is a client-side React boilerplate that can be built and pushed to a CDN or to any static hosting solution. If don't want to serve your static files on a managed solution and want full control, check [react-spa-clientside][https://github.com/ShippableBoilerplates/react-spa-clientside] instead.

## The Stack

- React/Redux/Redux-Saga for UI.
- Glamor as a css-in-js solution.
- Pug for generating HTML.

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
- Run `yarn test` for testing. (Right now it just runs linting, you should add your test runner there.)
- Run `yarn cleanup` to manually remove built assets.
