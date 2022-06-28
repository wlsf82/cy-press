# @walmyr-filho/cy-press

A silly Cypress `.press()` command that simulates pressing a keyboard key.

## Installation

Run `npm i @walmyr-filho/cy-press -D` to install it as a dev dependency.

## Examples

- [`cy-press-lib-example`](https://github.com/wlsf82/cy-press-lib-example) is an example project that uses the `@walmyr-filho/cy-press` library.

  Check the [`cypress/support/e2e.js`](https://github.com/wlsf82/cy-press-lib-example/blob/main/cypress/support/e2e.js) file for the import of it, and the [`cypress/e2e/press.cy.js`](https://github.com/wlsf82/cy-press-lib-example/blob/main/cypress/e2e/press.cy.js) file for its usage.

- [hackernews-react-app](https://github.com/wlsf82/hackernews-react-app) is another example of its usage. Checkout the [`cypress/e2e/spec.cy.js`](https://github.com/wlsf82/hackernews-react-app/blob/main/cypress/e2e/spec.cy.js) for its usage.

## Available keys

The available keys are described at the [official Cypress documentation](https://docs.cypress.io/api/commands/type#Arguments) + the commands `ctrl+a`, `CTRL+A`, `cmd+a`, and `CMD+A` commands.
