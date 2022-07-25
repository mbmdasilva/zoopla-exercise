@e2e-test
Feature: Home page for zoopla will render correctly.
    Scenario: Zoopla home page renders successfully
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application
        And  the user clicks on My Zoopla link
        Then the user is on My Zoopla page