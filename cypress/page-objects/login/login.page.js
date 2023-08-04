import "../../support/commands";
import { LOGIN_PAGE } from "../../configs/endpoints.config";
import { loginComponentsRight } from "./login_components_right";
import { loginComponentsLeft } from "./login_components_left";


const loginPage = {
    visit() {
        return cy.visit(LOGIN_PAGE);
    },

    assertLoginFormDisplayedOnThePage() {
        return loginComponentsRight.loginForm().should('be.visible');
    },

    enterEmail(email) {
        return loginComponentsRight.emailField().type(email);
    },

    enterPassword(password) {
        return loginComponentsRight.passwordField().type(password);
    },

    clickOnSubmitButton() {
        return loginComponentsRight.submitButton().click();
    },

    clickOnGoogleSubmitButton() {
        return loginComponentsRight.googleSubmitButton().click();
    },

    clickOnFacebookSubmitButton() {
        return loginComponentsRight.facebookSubmitButton().click({force: true});
    },

    clickOnRegisterLink() {
        return loginComponentsRight.registerLink().click();
    },

    clickOnForgotPasswordLink() {
        return loginComponentsRight.forgotPasswordLink().click();
    },

    modalDialogWindowActions() {
        cy.get('body').then($body => {
            if ($body.find('.el-dialog__body').length > 0) {
                this.clickOnModalDialogCloseButton();
            }
        });
    },

    clickOnModalDialogCloseButton() {
        return loginComponentsRight.modalDialogCloseButton().click();
    },

    assertEmailRequired() {
        cy.findByText('Email required!').should('be.visible');
    },

    assertPasswordRequired() {
        cy.findByText('Password required!').should('be.visible');
    },

    assertInvalidData() {
        cy.findByText('Invalid email/password!').should('be.visible');
    },
    assertLogoIsDisplayed() {
        loginComponentsRight.logo().should('be.visible');
        loginComponentsRight.header().should('be.visible');
        loginComponentsRight.welcomeText().should('be.visible');
        loginComponentsRight.loginForm().should('be.visible');
        loginComponentsRight.emailField().should('be.visible');
        loginComponentsRight.emailField().should('be.visible');
        loginComponentsRight.passwordField().should('be.visible');
        loginComponentsRight.googleSubmitButton().should('be.visible');
        loginComponentsRight.facebookSubmitButton().should('be.visible');
        loginComponentsRight.registerLink().should('be.visible');
        loginComponentsRight.forgotPasswordLink().should('be.visible');
    },
    assertGraphicsIsDisplayed() {
        loginComponentsLeft.graphics().should('be.visible');
    },
    assertDescriptionsIsDisplayed() {
        loginComponentsLeft.description().should('be.visible');
    },
    assertFeatureHighlightTextIsDisplayed() {
        cy.findByText('Feature Highlight').should('be.visible');
    },
};

export {
    loginPage,
}