
import {
    Given,
    When,
    And,
    Then,
  } 
  from "@badeball/cypress-cucumber-preprocessor";
  const alertsAndSearchesPage = require("../../pages/AlertsAndSearchesPage");

  Given("the user is in the alerts and searches page", () => {
    cy.visit("/myaccount/alerts-searches/");
  });

  And("the user clicks on searches and alerts link", () => {
    alertsAndSearchesPage.clickSearchesAndAlerts();
  })

  When("the user registers daily email updates", () => {
    alertsAndSearchesPage.selectDailyUpdates();
  });

  When("the user changes the frequency of the email updates", () => {
    alertsAndSearchesPage.changeEmailUpdates();
  });

  Then("the user delete the alert", () => {
    alertsAndSearchesPage.deleteAlerts();
  });
  