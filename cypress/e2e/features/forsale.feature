Feature: Alerts and Searches page
 Background: User is Logged In
      Given the user is in the Zoopla homepage
      And   the user accepts cookies
      
    Scenario: User searches houses for sale including the key word “garage” and check that results have garages
        Given the user searches for houses with garages
        Then the user sees the houses with garages in the results

