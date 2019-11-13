Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario: Finding mortgage rates
    The scenario format focusses on human interactions rather than UI design,
    and is designed to be trivially extended to other customer and mortgage
    types, through e.g. Scenario Outlines.

    Given I'm looking for mortgage information
    When I enter my details as a "typical" customer looking for a "fixed with fee" mortgage
    Then I am shown "fixed with fee" mortgage options
    And I can apply for a mortgage
