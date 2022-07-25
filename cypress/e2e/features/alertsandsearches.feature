Feature: Alerts and Searches page
 Background: User is Logged In
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application

     Scenario: User changes the frequency of existing email updates
        Given the user is in the alerts and searches page
        Then the user changes the frequency of the email updates