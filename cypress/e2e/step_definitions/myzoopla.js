import {
    Given,
    When,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const myZooplaPage = require("../../pages/MyZooplaPage");
  const toRentPage = require("../../pages/ToRentPage");

  Given("the user navigates to My Zoopla page", () => {
    cy.viewport(1120, 870);
    cy.visit("/my-zoopla/");
  });

  When("the user selects the to rent option", () => {
     myZooplaPage.selectToRent();   
  });

  Then("the user is in the to rent page", () => {
    toRentPage.elements.toRentProperties().should('have.text', 'Properties to rent');
  });