Feature: To rent page 
    Scenario: User selects the city and type of search
        Given the user is on the to rent page
        When the user selects properties to rent in London
        Then the user is in the properties to rent in london page