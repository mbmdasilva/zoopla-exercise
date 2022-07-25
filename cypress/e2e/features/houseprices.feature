@wip
Feature: Search for a particular property in the house prices search
 Background: User is Logged In
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application
        
    Scenario: User searches for a particular property in the house prices search and confirm that it appears as the first result
        Given the user is in the house party searches page
        When the user searches for a specific house
        Then the user can see that house as first in the results