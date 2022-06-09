Cypress.Commands.add('press', { prevSubject: true }, (subject, key) => {
  Cypress.log({
    name: 'press',
    displayName: 'press',
    message: `pressing ${key}`,
    consoleProps: () => {
      return { Key: key }
    }
  })

  if (key === 'ctrl+a' || key === 'CTRL+A' || key === 'cmd+a' || key === 'CMD+A') {
    key = 'selectAll'
  }

  return cy.wrap(subject, { log: false }).type(`{${key}}`, { log: false })
})
