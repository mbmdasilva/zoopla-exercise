class homePage{

    elements = {
        iframeCookies: () => cy.getIframeBody()
         .find('#save > .mat-button-wrapper span').should('have.text', 'Accept all cookies'),
        myZooplaLink : () => cy.get("[data-testid=header] > div > nav > div.PJLV.PJLV-ieDcChf-css > div > ul > li.c-AxmaR.c-bemQDp.c-AxmaR-tdoyl-narrow-true > a > span"),
        signInLink : () => cy.get("[data-testid=header] > div > nav > div.PJLV.PJLV-ieDcChf-css > div > ul > li:nth-child(3) > a > span"),
        usernameTextField : () =>  cy.get("[data-testid=email-field-input]"),
        passwordTextField : () => cy.get("[data-testid=password-field]"),
        signInButton : () => cy.get("[data-testid=signin-button]"),  
      };
     
      acceptCookies(){
        this.elements.iframeCookies().click();
      }

      clickSignInLink() {
        this.elements.signInLink().click();
      }    

      enterEmail() {
        this.elements.usernameTextField().click();
        this.elements.usernameTextField().type("testzoopla@test.com");
      }    

      enterPassword() {
        this.elements.passwordTextField().click();
        this.elements.passwordTextField().type("Qwert1234");
      }      

      clickSignInButton() {
        this.elements.signInButton().click();
      }    

      clickZooplaLink() {
        this.elements.myZooplaLink().click({force: true});
      }     
  }
  module.exports = new homePage();