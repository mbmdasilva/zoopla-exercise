
class myZooplaPage{

    
    elements = {
        myZooplaId : () => cy.get(" [data-testid=zoopla-header]"),
        toRent : () => cy.get("[data-testid=header-menu1] > a"),
    };

    selectToRent(){
        this.elements.toRent().click();
    }
}
module.exports = new myZooplaPage();