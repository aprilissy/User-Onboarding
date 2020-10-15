describe('User-Onboarding App', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  const nameInput = () => cy.get('input[name=username]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const termsChk = () => cy.get('input[name="termsOfService"]')
  const submitBtn = () => cy.get('button[id=submit]')
 // const validation


 it('Check that the above elements actually exist', () => {
  nameInput().should('exist')
  emailInput().should('exist')
  passwordInput().should('exist')
  termsChk().should('exist')
  submitBtn().should('exist')
})

describe('filling out form', () => {
  it('submit button is disabled')
})

})