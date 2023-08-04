import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from "../page-objects/login/login.page";
import { accountPage } from "../page-objects/account/account.page";

Given('I visit the login page', () => {
    loginPage.visit();
});

And ("I see login form", () => {
    loginPage.assertLoginFormDisplayedOnThePage();
});

And("I can enter the {string} as login in the email field", (email) => {
    loginPage.enterEmail(email);
});

And("I can enter the {string} in the password field", (password) => {
    loginPage.enterPassword(password);
});

When("I click on the submit button", () => {
    loginPage.clickOnSubmitButton();
});

When("I click on the google button", () => {
    loginPage.clickOnGoogleSubmitButton();
});

But("I can see a modal window with alert if I have more than one session open and needs to be closed", () => {
    loginPage.modalDialogWindowActions();
});

Then("I am in my personal account", () => {
    accountPage.assertAccountPageIsOpened();
});

Then("I am getting a message that I need to enter an email", () => {
    loginPage.assertEmailRequired();
});

Then("I am getting a message that I need to enter a password", () => {
    loginPage.assertPasswordRequired();
});

Then("I am getting a message that the data entered is incorrect", () => {
    loginPage.assertInvalidData();
});

And("I need to wait during {int} ms", (ms) => {
    cy.wait(ms);
});
And("I see all elements on the right side: logo, header, login form, links, social buttons", () => {
    loginPage.assertLogoIsDisplayed();
});
And("I see all elements on the left side: graphics, description", () => {
    loginPage.assertGraphicsIsDisplayed();
    loginPage.assertDescriptionsIsDisplayed();
    loginPage.assertFeatureHighlightTextIsDisplayed();
});
Given("All links are working", () => {
    cy.get('a').then($a => {
        const message = $a.text();
        expect($a, message).to.have.attr('href').not.contain('undefined');
    })
});