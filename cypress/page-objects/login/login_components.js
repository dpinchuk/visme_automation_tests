const COMPONENT = '.right';
const LOGIN_FORM = 'form';
const EMAIL_FIELD = 'input[type="email"]';
const PASSWORD_FIELD = 'input[type="password"]';
const SUBMIT_BUTTON = 'button[type="submit"]';
const GOOGLE_SUBMIT_BUTTON = '.google-login';
const FACEBOOK_SUBMIT_BUTTON = '.facebook-login';
const REGISTER_LINK = 'a[href="/v2/register"]';
const FORGOT_PASSWORD_LINK = 'a[href="/v2/forgot-password"]';
const MODAL_DIALOG = '.el-dialog__body';
const MODAL_DIALOG_CLOSE_BUTTON = 'button[type="button"]';

const loginComponents = {
    itself() {
        return cy.get(COMPONENT).eq(0);
    },

    loginForm() {
        return this.itself().get(LOGIN_FORM);
    },

    emailField() {
        return this.itself().get(EMAIL_FIELD);
    },

    passwordField() {
        return this.itself().get(PASSWORD_FIELD);
    },

    submitButton() {
        return this.itself().get(SUBMIT_BUTTON);
    },

    googleSubmitButton() {
        return cy.get(GOOGLE_SUBMIT_BUTTON);
    },

    facebookSubmitButton() {
        return cy.get(FACEBOOK_SUBMIT_BUTTON);
    },

    registerLink() {
        return cy.get(REGISTER_LINK);
    },

    forgotPasswordLink() {
        return cy.get(FORGOT_PASSWORD_LINK);
    },

    modalDialogWindow() {
        return cy.get(MODAL_DIALOG);
    },

    modalDialogCloseButton() {
        return cy.get(MODAL_DIALOG_CLOSE_BUTTON).eq(1);
    }
};

export {
    loginComponents,
}