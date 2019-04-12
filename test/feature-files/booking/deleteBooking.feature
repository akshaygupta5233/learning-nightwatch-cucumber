Feature: Delete_Booking_check
  Testing the delete booking functionality

  Scenario: 1. Verify if the user is able to delete a booking.
    Given user ends the old session and creates a new one
    Given User is providing valid URL
    Given User is providing valid Username
    Given User is providing valid Password
    Then User clicks the login button and home page is displayed
    And user views the booking
    Then clicks the delete button and verifies the booking to be deleted