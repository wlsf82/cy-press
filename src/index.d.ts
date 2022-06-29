/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * **Simulates pressing a keyboard key.**
     *
     * @param key string - The key you want to press. Available keys are: selectAll, moveToStart, moveToEnd, del, backspace, esc, enter, rightArrow, leftArrow, upArrow, downArrow, home, end, insert, pageUp, pageDown, {, alt, option, ctrl, control, meta, command, cmd, shift, ctrl+a, CTRL+A, cmd+a, CMD+A
     *
     * @example cy.get('input[type="text"]').type('something').press('enter')
     * @example cy.get('input[type="text"]').type('yoo').press('backspace').press('enter')
     */
    press(key: string): Cypress.Chainable
  }
}
