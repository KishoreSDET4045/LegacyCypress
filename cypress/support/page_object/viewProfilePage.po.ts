/// <reference types="Cypress" />
export default class viewProfilePage {
    get profileType() {
        return cy.get('#profileType-input select');
    }
    get findProfileButton() {
        return cy.get('#find-profiles-button');
    }
    get anyCompany() {
        return cy.get('.results-table tr td span a')
    }
    get anyPerson() {
        return cy.get('#person-tab-active tr td span a');
    }
    get actionsDropDown() {
        return cy.get('.report-actions span').contains('Actions');
    }
    get actionsDropDownDisplay() {
        return cy.get('div[class="oiq-drop-down-items actions-enabled open"]');
    }
    get optionsInDropDown() {
        return cy.get('oiq-drop-down-items div a');
    }
    get compareProfilePopup() {
        return cy.get('.modal');
    }
    get compareButton() {
        return cy.get('#compare a');
    }
    get addicationSummary() {
        return cy.get('#main-profile');
    }
    get dateFromTextField(){
        return cy.get('.hasDatepicker').eq(0);
    }
    get dateToTextField(){
        return cy.get('.hasDatepicker').eq(1);
    }
    get resultsTable() {
        return cy.get('.results-table').eq(1);
    }
    get dateofCompanyProfiles() {
        return cy.get('#company-tab-active table  td:nth-child(5)');
    }
    get dateofPersonProfile() {
        return cy.get('#person-tab-active table  td:nth-child(5)');
    }
    get companyLink() {
        return cy.get('#company-tab')
    }
    get personLink() {
        return cy.get('#person-tab')
    }
    get locationLink() {
        return cy.get('#main ddiq-accordion div div').contains('Locations ')
    }
    get confirmCheckBox() {
        return cy.get('#related_PROPERTY ddiq-location-list div span[title="Confirm Content"]')
    }
    get starContentLink() {
        return cy.get('#related_PROPERTY ddiq-location-list div span[title="Star Content"]')
    }
    get removeSymbol() {
        return cy.get('#related_PROPERTY ddiq-location-list div span[title="Remove Content"]')
    }
    get commentSymbol(){
        return cy.get('#related_PROPERTY ddiq-location-list div span[title="Add Notes"]')
    }
    get commentBoxTextArea() {
        return cy.get('.comment-box textarea')
    }
    get commentBoxOkButton() {
        return cy.get('.comment-box button').eq(0)
    }
}