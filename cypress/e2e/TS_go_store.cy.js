


describe('go store', () =>{

  it('passes', () =>{
     cy.viewport(1267, 593)
     cy.visit('https://joyeriarte.derzapp.com/')
     cy.get('.slides > .bg-dark > .hs-caption > .caption-content > .section-scroll').click()

     cy.visit('https://joyeriarte.derzapp.com/tienda')
  
  })
 
 })

 