class housePricesPage{

    elements = {
        housePricesLink : () => cy.get("[data-testid=header-menu2] > a"),
        inputBox : () =>  cy.get("#downshift-1568-input"),
        boxArea : () =>  cy.get("#main-content > div.c-PJLV.c-PJLV-kDvZlS-fw-true.c-PJLV-ijBxbtK-css > div > div.c-PJLV.c-PJLV-ibkHvQA-css > div > p"),
        searchButton : () => cy.get("[data-testid=search-btn]"),
        firstHouseInSearchesReturn : () => cy.get("[data-testid=result-list] > li:nth-child(1) > div > a > div > div:nth-child(1) > h2"),
    };

    enterPropertyAddres(){
        this.elements.boxArea().click();
        this.elements.inputBox().type("1 East Sheen Avenue, London, SW14 8AS");
    }

    clickSearch(){
        this.elements.searchButton().click();
    }
}
module.exports = new housePricesPage();
      