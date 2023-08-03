Feature: Customer login

  @regression
  Scenario Outline: [#1] The customer can log in using the email and password input fields
    Given I visit the login page
    And I see login form
    And I can enter the "<email>" as login in the email field
    And I can enter the "<password>" in the password field
    When I click on the submit button
    And I need to wait during 3000 ms
    But I can see a modal window with alert if I have more than one session open and needs to be closed
    Then I am in my personal account

    Examples:
      | email                 | password   |
      | pinchuk.dap@gmail.com | dmss111278 |

  @regression
  Scenario Outline: [#2] The customer receives a message about the need to enter an email / password when trying to log in with at least one empty field
    Given I visit the login page
    And I see login form
    When I click on the submit button
    Then I am getting a message that I need to enter an email
    And  I can enter the "<email>" as login in the email field
    When I click on the submit button
    Then I am getting a message that I need to enter a password

    Examples:
      | email                 |
      | pinchuk.dap@gmail.com |

  @regression
  Scenario Outline: [#3] The customer can not log in using invalid credentials
    Given I visit the login page
    And I see login form
    And I can enter the "<email>" as login in the email field
    And I can enter the "<password>" in the password field
    When I click on the submit button
    Then I am getting a message that the data entered is incorrect

    Examples:
      | email                         | password    |
      | invalid.user.data@invalid.com | qwerty12345 |