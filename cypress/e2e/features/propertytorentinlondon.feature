@e2e-test
Feature: Register for for 1 bed properties between £800 and £1000 
    Background: User is Logged In
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application
        And  the user clicks on My Zoopla link

    Scenario: User register for for 1 bed properties in London between £800 and £1000 per month and daily email alerts
        Given the user navigates to the property to rent in London page 
        When the user clicks the filter 
        And the user clicks the bedroom filter
        And the user adds 1 bedroom properties to the filter
        And the user adds £800 to £1000 properties prices to the filter
        And the user updates the results
        And the user creates email alerts
        Then the user is on the alerts and searches page
        And  the user registers daily email updates
    