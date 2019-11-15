Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario: Find a remortgage rate
    The scenario format focusses on human interactions rather than UI design,
    and is designed to be trivially extended to other customer and mortgage
    types, through e.g. Scenario Outlines.

    Given I'm looking for information on new mortgages
    When I enter my details as a "remortgaging" customer looking for a "fixed with fee" mortgage
    Then I am shown "fixed with fee" mortgage options
    And I can start a "fixed with fee" remortgaging application
