const {
    Given,
    Then,
    When
} = require('cucumber');

const{client} =require('nightwatch-api');

var allConstants=require("../../constants/config");

var allPaths = require("../../locators/locators");

Then('user views the booking', function () {
    // Write code here that turns the phrase above into concrete actions
    return true;
  });

  Then('clicks the delete button and verifies the booking to be deleted', function () {
    // Write code here that turns the phrase above into concrete actions
    return true;
  });