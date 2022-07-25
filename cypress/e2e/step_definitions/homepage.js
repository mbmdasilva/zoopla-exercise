import {
    Given,
    When,
    And,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const homePage = require("../../pages/HomePage");
  const myZooplaPage = require("../../pages/MyZooplaPage");

  Given("the user is in the Zoopla homepage", () => {
    cy.viewport(1120, 870);
    cy.visit("/");
  });

  And("the user accepts cookies", () => {
   homePage.acceptCookies();
  });

  When("the user sign in to the application", () => {
  homePage.clickSignInLink();
  homePage.enterEmail();
  homePage.enterPassword();
  homePage.clickSignInButton();
  });

  And("the user clicks on My Zoopla link", () => {
     homePage.clickZooplaLink();
  });

  Then("the user is on My Zoopla page", () => {
   myZooplaPage.elements.myZooplaId().should('have.text', 'My Zoopla');
  });