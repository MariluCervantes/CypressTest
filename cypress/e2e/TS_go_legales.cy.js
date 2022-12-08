describe('go legales page', () => {
  it('passes', () => {
    cy.viewport(1267, 593)
    cy.visit('https://joyeriarte.derzapp.com/')
    cy.get('#custom-collapse > .nav > ul > .page-item-3 > a').click()
    cy.visit('https://joyeriarte.derzapp.com/legales')
  })
})