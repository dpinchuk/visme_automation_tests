import "../../support/commands";
import {LOGIN_PAGE} from "../../configs/endpoints.config";
import {loginComponents} from "./login_components";


const loginPage = {
    visit() {
        return cy.visit(LOGIN_PAGE);
    },

    assertLoginFormDisplayedOnThePage() {
        return loginComponents.loginForm().should('be.visible');
    },

    enterEmail(email) {
        return loginComponents.emailField().type(email);
    },

    enterPassword(password) {
        return loginComponents.passwordField().type(password);
    },

    clickOnSubmitButton() {
        return loginComponents.submitButton().click();
    },

    clickOnGoogleSubmitButton() {
        return loginComponents.googleSubmitButton().click();
    },

    clickOnFacebookSubmitButton() {
        return loginComponents.facebookSubmitButton().click({force: true});
    },

    clickOnRegisterLink() {
        return loginComponents.registerLink().click();
    },

    clickOnForgotPasswordLink() {
        return loginComponents.forgotPasswordLink().click();
    },

    modalDialogWindowActions() {
        cy.get('body').then($body => {
            if ($body.find('.el-dialog__body').length > 0) {
                this.clickOnModalDialogCloseButton();
            }
        });
    },

    clickOnModalDialogCloseButton() {
        return loginComponents.modalDialogCloseButton().click();
    },

    assertEmailRequired() {
        cy.findByText('Email required!').should('be.visible');
    },

    assertPasswordRequired() {
        cy.findByText('Password required!').should('be.visible');
    },

    assertInvalidData() {
        cy.findByText('Invalid email/password!').should('be.visible');
    }
};

export {
    loginPage,
}