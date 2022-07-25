
import {
    Given,
    When,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const forSalePage = require("../../pages/ForSalePage");

  // Given("the user is in the for sale page", () => {
  //   forSalePage.clickForSale()
  // });

  When("the user searches for houses with garages", () => {
    forSalePage.writeKeyword();
    forSalePage.clickUpdateResults();
  });

  Then("the user sees the houses with garages in the results", () => {
    forSalePage.elements.garageKeyWord.should('have.text', 'Garage plus off street parking')
  });