describe('User-Onboarding App', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  const nameInput = () => cy.get('input[name=username]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const termsChk = () => cy.get('input[name="termsOfService"]')
  const submitBtn = () => cy.get('button[id=submit]')


  it('Check that the above elements actually exist', () => {
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    termsChk().should('exist')
    submitBtn().should('exist')
  })

  describe('filling out form', () => {
    it('submit button is disabled', () => {
      submitBtn().should('be.disabled')
    })

    it('can enter text inputs', () => {
      nameInput().should('have.value', '')
      .type('jkl')
      .should('have.value', 'jkl')

      emailInput().should('have.value', '')
      .type('jkl')
      .should('have.value', 'jkl')

      passwordInput().should('have.value', '')
      .type('jkl')
      .should('have.value', 'jkl')
    })

    it('check the Terms of Service checkbox', () => {
      termsChk().check()
    })
  }) // End Filling out form

  
  describe('checking submission and validation', () => {
    it('enable submit if all form inputs are filled correctly', () => {
      nameInput().type('jkl;')
      emailInput().type('a@a.com')
      passwordInput().type('jkljkl')
      termsChk().check()
      submitBtn().should('be.enabled')
      submitBtn().click()
      cy.contains(/jkl;/).should('exist')
    })

    it('check form validation if input is empty', () => {
      nameInput().type('jkl;').clear()
      emailInput().type('a@a.com').clear()
      passwordInput().type('jkljkl').clear()
      termsChk().check().uncheck()
    })
  }) // End Checking Submission and Validation

}) // End User-Onboarding App