Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario: Finding mortgage rates
    Given I'm looking for mortgage information
    When I enter my details as a "typical" customer
    Then I can see mortgage information
    And I can apply for a mortgage
