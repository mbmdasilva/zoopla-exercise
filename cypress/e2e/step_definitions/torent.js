import {
    Given,
    When,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const toRentPage = require("../../pages/ToRentPage");
  const propertyToRentInLondonPage = require("../../pages/PropertyToRentInLondonPage");

  Given("the user is on the to rent page", () => {
    cy.visit("/to-rent/");
  });

  When("the user selects properties to rent in London", () => {
     toRentPage.selectPropertiesToRentLondon();  
  });

  Then("the user is in the properties to rent in london page", () => {
    propertyToRentInLondonPage.elements.londonRentProperties().should('have.text', 'Property to rent in London');
  });
