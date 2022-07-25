
class searchesAndAlertsPage{

    elements = {
        alertsSearches : () => cy.get("#content > h1"),
        dailyUpdates : () => cy.get("select.js-myaccount-alert-frequency.js-check.js-touched"),
        delete : () => cy.get("a.myaccount-alert-action"),
        searchesAndAlerts : () => cy.get("[data-testid=account-menu] > div > div > a:nth-child(2)"),
    };

    selectDailyUpdates(){
        this.elements.dailyUpdates().select("Daily summary emails");
    }
    deleteAlerts(){
        this.elements.delete().click({ multiple: true });
    }
    changeEmailUpdates(){
        this.elements.dailyUpdates().select("Summaries every 3 days");
    }
    clickSearchesAndAlerts(){
        this.elements.searchesAndAlerts().click();
    }
}
module.exports = new searchesAndAlertsPage();