Feature: To rent page 
    Background: User is Logged In
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application
        And  the user clicks on My Zoopla link
     Scenario: User selects the city and type of search
        Given the user is on the to rent page
        When the user selects properties to rent in London
        Then the user is in the properties to rent in london page