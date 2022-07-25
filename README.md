# @walmyr-filho/cy-press

[![npm version](https://badge.fury.io/js/@walmyr-filho%2Fcy-press.svg)](https://badge.fury.io/js/@walmyr-filho%2Fcy-press)

A silly Cypress `.press()` command that simulates pressing a keyboard key.

## Installation

Run `npm i @walmyr-filho/cy-press -D` to install it as a dev dependency.

## Usage

Import (or require) the `@walmyr-filho/cy-press` lib inside the `cypress/support/e2e.js` file (or `cypress/support/index.js` on Cypress version < 10.)

```js
// cypress/support/e2e.js

import '@walmyr-filho/cy-press'
// or
// require('@walmyr-filho/cy-press')
```

Then, inside the test file, chain the `.press()` command to a typeable field (for example), and pass to it a [valid key](#available-keys) (e.g., `'enter'` or `'backspace'`)

✅ **Correct usage**

```js
// cypress/e2e/spec.cy.js

it('types and presses enter', () => {
  cy.visit('https://example.com/searchForm')

  cy.get('input[type="text"]')
    .type('cypress.io')
    .press('enter')

  // Assertion here
})
```

🛑 **Incorrect usage**

```js
// cypress/e2e/spec.cy.js

it('tries to press without a subject element', () => {
  cy.visit('https://example.com/searchForm')

  cy.press('enter') // This won't work and will result in an error
})
```

## Examples

- [`cy-press-lib-example`](https://github.com/wlsf82/cy-press-lib-example) is an example project that uses the `@walmyr-filho/cy-press` library.

  Check the [`cypress/support/e2e.js`](https://github.com/wlsf82/cy-press-lib-example/blob/main/cypress/support/e2e.js) file for the import of it, and the [`cypress/e2e/press.cy.js`](https://github.com/wlsf82/cy-press-lib-example/blob/main/cypress/e2e/press.cy.js) file for its usage.

- [hackernews-react-app](https://github.com/wlsf82/hackernews-react-app) is another example of its usage. Checkout the [`cypress/e2e/spec.cy.js`](https://github.com/wlsf82/hackernews-react-app/blob/main/cypress/e2e/spec.cy.js) file.

## Available keys

The available keys are described on the [official Cypress documentation](https://docs.cypress.io/api/commands/type#Arguments) + the following combination of keys: `ctrl+a`, `CTRL+A`, `cmd+a`, and `CMD+A`.

___

Made with ❤️ by [Walmyr Filho](https://walmyr.dev).
