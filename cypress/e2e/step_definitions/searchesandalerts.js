
import {
    Given,
    When,
    And,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const searchesAndAlertsPage = require("../../pages/SearchesAndAlertsPage");

  Given("the user is in the alerts and searches page", () => {
    cy.visit("/myaccount/alerts-searches/");
  });

  And("the user clicks on searches and alerts link", () => {
    searchesAndAlertsPage.clickSearchesAndAlerts();
  })

  When("the user registers daily email updates", () => {
    searchesAndAlertsPage.selectDailyUpdates();
  });

  When("the user changes the frequency of the email updates", () => {
    searchesAndAlertsPage.changeEmailUpdates();
  });

  Then("the user delete the alert", () => {
    searchesAndAlertsPage.deleteAlerts();
  });
  