import resetPassword from "../pageObject/resetPassword"


describe('Reset Password Module', ()=>{
    it.only('Verify that user can request for password reset email - positive test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
       

        cy.fixture('example').then((data)=>{

            const ln = new resetPassword();
            ln.resetPasswordBtn();
            ln.setEmail(data.email)
            ln.passwordResetBtn();
            ln.setWait();
            ln.verifySuccessMessage();
            ln.verifyPasswordResetMessage();
            
            })

        //cy.get('.login-forgot-password-text').click()
        // cy.get('.no-outline').type('mariam.busari@simplifysynergy.com')
        // cy.get('.login-text.mt-5 > div').click()
        // cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Your request was successful')
        // cy.get('.modal-text').should('contain', 'A password reset link has been sent to your e-mail. Please click on the link and proceed to change your password')

    })

    it('Verify that user cannot request for password reset email with an invalid email format - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').type('mariam.com')
        cy.get('.login-text.mt-5 > div').click()
    })

    it('Verify that user cannot request for password reset email with empty field - negative test', ()=>{
        cy.visit('https://qa.fgntreasury.gov.ng/auth/login')
        cy.get('.login-forgot-password-text').click()
        cy.get('.no-outline').click()
        cy.get('.login-text.mt-5 > div').click()
    })
})