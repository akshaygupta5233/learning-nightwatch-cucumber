Feature: Login_check
  Testing Login from Login Screen

  Scenario: 1. Verify if the error message is displayed when user gives wrong credentials
    Given user ends the old session and creates a new one
    Given User is providing valid URL
    And User is providing invalid Username
    And User is providing invalid Password
    Then User clicks the login button and error message is displayed

  Scenario: 2. Verify if user is able to login to the Website.
    Given user ends the old session and creates a new one
    Given User is providing valid URL
    Given User is providing valid Username
    Given User is providing valid Password
    Then User clicks the login button and home page is displayed
    Then close the browser