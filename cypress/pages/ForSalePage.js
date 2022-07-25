
class forSalePage{

    elements = {
        forSaleMenu : () =>cy.get("#radix-id-2538491468-360-trigger-for-sale"),
        forSaleInputBox : () =>  cy.get("#downshift-26000-input"),
        forsaleLink : () => cy.get("[data-testid=header-menu0] > a"),
        clicikToSelect : () =>     cy.get("#downshift-0-item-0 > span:nth-child(2)"),
        selectHouses : () => cy.get("#\\31 "),
        searchButton : () =>  cy.get("[data-testid=search-btn]"),
        filterButton : () => cy.get("[data-testid=filters] > svg").click(),
        updateResultsButton : () => cy.get("[data-testid=modal] > div > div > div.c-PJLV.c-PJLV-ibGmdYx-css > div > button"),
        listOfHouses : () =>  cy.get("[data-testid=listing-title]"),
        keywordInput : () =>  cy.get("[data-testid=listing_features_bulletted] > li:nth-child(5)"),
        garageKeyWord : () => cy.get("[data-testid=listing_features_bulletted] > li:nth-child(5)"),
    };


    clickForSale(){
        this.elements.forSaleMenu().click();
    }

    searchHousesForSale(){
        this.elements.forSaleInputBox().click();
        this.elements.forSaleInputBox().type("sw14");
        this.elements.clicikToSelect().click();
        this.elements.forSaleInputBox().type("sw14");
        this.elements.selectHouses().click();
        this.elements.searchButton().click();
    }
    
    writeKeyword(){
        this.elements.filterButton().click();
        this.elements.keywordInput().click();
        this.elements.keywordInput().type("Garage");
    }

    clickUpdateResults(){
        this.elements.updateResultsButton().click();
    }

    houseListResults(){
        this.elements.listOfHouses().click();
    }

}
module.exports = new forSalePage();