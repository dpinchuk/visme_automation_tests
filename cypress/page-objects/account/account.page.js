import { ACCOUNT_ENDPOINT } from "../../configs/endpoints.config";

const accountPage = {
    assertAccountPageIsOpened() {
        return cy.url().should('contain', ACCOUNT_ENDPOINT);
    }
};

export {
    accountPage,
}