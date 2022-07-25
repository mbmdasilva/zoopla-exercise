import {
    Given,
    When,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const housePricesPage = require("../../pages/HousePricesPage");
  
  Given("the user is in the house party searches page", () => {
    cy.visit("/house-prices/");
  });

  When("the user searches for a specific house", () => {
    housePrices. enterPropertyAddres();
    housePrices.clickSearch();
  });

  Then("the user can see that house as first in the results", () => {
   housePrices.elements.firstHouseInSearchesReturn().should('have.text', '1 East Sheen Avenue, London, SW14 8AS')
  });
