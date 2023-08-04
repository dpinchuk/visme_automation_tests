const COMPONENT = '.left';
const GRAPHICS = '.graphics-wrap';
const DESCRIPTION = '.descr';

const loginComponentsLeft = {
    itself() {
        return cy.get(COMPONENT).eq(0);
    },

    graphics() {
        return this.itself().get(GRAPHICS);
    },

    description() {
        return this.itself().get(DESCRIPTION);
    },
};

export {
    loginComponentsLeft,
}