
class propertyToRentInLondonPage{

    elements = {
         londonProperties : () => cy.get("data-testid=results-title"),
         filterButton : () => cy.get("[data-testid=mobile-sub-header_filters-button] > p"),
         expandBedroomsFilter : () =>  cy.get("div.c-PJLV.c-PJLV-bvdbZh-animation-expand > svg"),
         closeBedroomFilter : () =>  cy.get("#radix-7 > div > div.c-PJLV.c-PJLV-eIydOR-animation-squash > svg > path:nth-child(2)"),
         maxBedDropdown : () => cy.get("#beds_max"),
         maxBedNumber : () => cy.get("#beds_max"),
         expandPrices : () => cy.get("#c-PJLV.c-PJLV-bvdbZh-animation-expand"),
         minPriceDropDown : () => cy.get("#price_min"),
         minPriceNumber : () => cy.get("#price_min"),
         maxPriceDropDown  : () => cy.get("#price_max"),
         maxPriceNumber : () => cy.get("#price_max"),
         updateResultsButton : () => cy.get("[data-testid=modal] > div > div > div.c-PJLV.c-PJLV-ibGmdYx-css > div > button"),
         createEmail : () => cy.get("[data-testid=create-email-alert-button]"),
         manageEmailAlerts : () => cy.get("body > div.css-7ohbj1-ModalBg.e13xjwxo16 > div > div.css-163lcco-ModalContent.e13xjwxo13 > div > div > a"),
    };

    clickFilter(){
        this.elements.filterButton().click();
    }

    clickExpandBedRoomFilter(){
        this.elements.expandBedroomsFilter().click({multiple: true });
    }

    clickCollapseBedRoomFilter(){
        this.elements.closeBedroomFilter().click({force: true});
    }
    addMaxBedRoomNumber(){
        this.elements.maxBedDropdown().select("1");
    }

    clickExpandRentalPrices(){
        this.elements.expandPrices().click();
    }
    clickMinRateDropDown(){
        this.elements.minPriceDropDown().click();
    }
    clickMaxRateDropDown(){
        this.elements.maxPriceDropDown().click();
    }

    addMinRate(){
        this.elements.minPriceNumber().select("800");
    }
    addMaxRate(){
        this.elements.maxPriceNumber().select("1000");
    }

    clickUpdateResults(){
        this.elements.updateResultsButton().click();
    }

    createEmailAlert(){
        this.elements.createEmail().click();
        this.elements.manageEmailAlerts().click();
    }
}
module.exports = new propertyToRentInLondonPage();