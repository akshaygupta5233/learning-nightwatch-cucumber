const {
    Given,
    Then,
    When
} = require('cucumber');

const{client} =require('nightwatch-api');

var allConstants=require("../../constants/config");

var allPaths = require("../../locators/locators");

Given('user ends the old session and creates a new one', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.deleteCookies().pause(3000);
  });

  Given('User is providing valid URL', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.url(allConstants.webUrl).maximizeWindow()
    .assert.title("The Internet");
    
  });

  Given('User is providing invalid Username', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().setValue(allPaths.usernameTextBox,allConstants.incorrectUsername);
  });
  
  Given('User is providing invalid Password', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().setValue(allPaths.passwordTextBox,allConstants.incorrectPassword);
  });

  Then('User clicks the login button and error message is displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().click(allPaths.loginButton)
    .assert.containsText(allPaths.loginErrorMessage,'Your username is invalid!', "Login Error message gets displayed.");
  });

  Given('User is providing valid Username', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().setValue(allPaths.usernameTextBox,allConstants.username);
  });

  Given('User is providing valid Password', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().setValue(allPaths.passwordTextBox,allConstants.password);
  });


  Then('User clicks the login button and home page is displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().click(allPaths.loginButton)
    .waitForElementVisible(allPaths.loginSuccessMessage, 3000);
  });


  Then('close the browser', function () {
    // Write code here that turns the phrase above into concrete actions
    return client.useXpath().click(allPaths.logoutButton).pause(2000)
    .waitForElementVisible(allPaths.loginPageHeader, 5000);
  });


  