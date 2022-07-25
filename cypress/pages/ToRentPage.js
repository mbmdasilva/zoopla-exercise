

class toRent{

    elements = {
        toRentProperties : () => cy.get("h1.c-hHbLdj"),
        selectPropertiesToRentLondon : () =>  cy.get("#__next > div > main > div > div.c-PJLV.c-PJLV-ijBxbtK-css > div:nth-child(2) > div > ul:nth-child(2) > li:nth-child(1) > a > span"),
    };

    selectPropertiesToRentLondon(){
        this.elements.selectPropertiesToRentLondon().click();
    }
}
module.exports = new toRent();
      