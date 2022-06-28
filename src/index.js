Cypress.Commands.add('press', { prevSubject: true }, (subject, key) => {
  const log = Cypress.log({
    autoEnd: false,
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

  return cy.wrap(subject, { log: false })
    .then($el => {
      log.set({ $el }).snapshot('before')
    })
    .type(`{${key}}`, { log: false })
    .then($el => {
      log.set({ $el }).snapshot('after').end()
    })
})
