@e2e-test
Feature:  My Zoopla page helps select type of search.
   Background: User is Logged In
        Given the user is in the Zoopla homepage
        And   the user accepts cookies
        When the user sign in to the application
        And  the user clicks on My Zoopla link

     Scenario: User selects rental option
        Given the user navigates to My Zoopla page
        When  the user selects the to rent option
        Then the user is in the to rent page