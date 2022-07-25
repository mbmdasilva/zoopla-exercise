import {
    Given,
    When,
    And,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const propertyToRentInLondonPage = require("../../pages/PropertyToRentInLondonPage");
  const alertsAndSearchesPage = require("../../pages/AlertsAndSearchesPage");

  Given("the user navigates to the property to rent in London page", () => {
    cy.viewport(1120, 927);
    cy.visit("/to-rent/property/london/");
  });

  When("the user clicks the filter", () => {
     propertyToRentInLondonPage.clickFilter();
  });

  And("the user clicks the bedroom filter", () => {
    propertyToRentInLondonPage.clickExpandBedRoomFilter();
  });

  And("the user adds 1 bedroom properties to the filter", () => {
     propertyToRentInLondonPage.addMaxBedRoomNumber();
  }); 

  And("the user adds £800 to £1000 properties prices to the filter", () => {
    propertyToRentInLondonPage.addMinRate();
    propertyToRentInLondonPage.addMaxRate();
  });

  And("the user updates the results", () => {
     propertyToRentInLondonPage.clickUpdateResults();
  });

  And("the user creates email alerts", () => {
    propertyToRentInLondonPage.createEmailAlert();
  });
  
  Then("the user is on the alerts and searches page", () => {
    alertsAndSearchesPage.elements.alertsSearches().should('have.text', 'Alerts & searches');
  });

  


