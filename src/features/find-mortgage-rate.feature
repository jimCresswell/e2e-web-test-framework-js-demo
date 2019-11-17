Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Scenario Outline: Finding mortgage rates for different users
    The scenario format focusses on human interactions rather than UI design,
    and is designed to be trivially extended to other customer and mortgage
    types.

    Given I'm looking for information on new mortgages
    When I enter my details as a "<customer type>" customer looking for a "<mortgage type>" mortgage
    Then I am shown "<mortgage type>" mortgage options
    And I can start a "<mortgage type>" mortgage application

    Examples: major user types
      | customer type | mortgage type  |
      | remortgaging  | fixed with fee |

    #@pending
    #Examples: pending
    #  These scenarios are commented out because CucumberJS hasn't
    #  properly implented @pending tags on Example groups.
    #  | customer type     | mortgage type       |
    #  | first time buyer  | tracker without fee |
