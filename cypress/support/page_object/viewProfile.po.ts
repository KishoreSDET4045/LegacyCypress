/// <reference types="Cypress" />

export default class ViewProfile {

    verifyEscalatedAdjudication(value: string) {
        cy.get('div.escalated-count').should(value);
    }

    escalateFirstAdjudicationIfExist() {
        cy.get('span.fa.fa-star-o.oiq-adjudication-actions-escalate').then(($element: any) => {
            if($element.length > 1) {
                cy.get($element[0]).click({force:true});
                cy.wait(500);
            }
        });
        cy.wait(500);
    }
    
    deescalateAllAdjudicationIfExist() {
        cy.get('ddiq-accordion-top').contains('Regulatory, Compliance and Government').should('exist');
        cy.get('span.fa.fa-lg.fa-star.oiq-adjudication-actions-deescalate')
        .should('exist')
        .then(($element: any) => {
            if($element.length > 1) {
                cy.get($element).each((item) => {
                    item.click();
                    cy.wait(500);
                })
            } else {
                $element.click();
            }
        })
        cy.wait(500);
    }

    private get regulatoryTab() {
        return cy.get('#aside').contains('Regulatory')
    }

    private get profileName() {
        return cy.get('#profile-name-input').find('input')
    }

    private get findProfilesLink() {
        return cy.get('#find-profiles-button').click()
    }

    private get referenceID() {
        return cy.get('#profile-reference-id-input').find('input')
    }

    private get profileType() {
        return cy.get('[value="crawlPlanKey"]').find('select')
    }

    waitForProfileTypeFilter() {
        this.profileType.should('be.visible')
    }

    verifyProfileTypeDoesNotExist(requiredProfileType: string) {
        cy.get('#profileType-input select').find('option').invoke('val', 0).should('not.contain.text', requiredProfileType);
    }

    verifyProfileTypeShouldBeExist(requiredProfileType: string) {
        cy.get('#profileType-input select').find('option').should('contain.text', requiredProfileType);
    }

    selectTheProfileType(profileType: string, value: string) {
        cy.get('#profileType-input select').select(profileType).should('have.value', value);
    }

    private tab(entity: "company" | "person") {
        return cy.get(`#${entity}-tab`)
    }

    private searchResultTextFor(entity: "company" | "person") {
        return cy.get(`#${entity}-tab-active .search-results`)
    }

    private get company() {
        const entityTable = cy.get('[id="company-tab-active"] table.results-table');
        return {
            get records() {
                return entityTable.find('tr')
            },
            get profileName() {
                return entityTable.find('td').eq(1).find('a')
            },
            get referenceID() {
                return entityTable.find('td').eq(2)
            }
        }
    }

    enterProfileName(name: string) {
        this.profileName.clear().type(name).should('have.value', name)
        return this;
    }

    findProfiles() {
        cy.intercept('GET', '/ddiq-services/**').as('profileRequests')
        this.findProfilesLink.click({ waitForAnimations: true })
        cy.get('#company-tab-active .search-results').should('be.visible')
        cy.wait(['@profileRequests'], { timeout: 10000 }).then((interception: any) => {
            expect(interception.state).to.equal("Complete");
        })
        return this;
    }

    enterReferenceID(referenceID: string) {
        this.referenceID.clear().type(referenceID).should('have.value', referenceID)
        return this;
    }

    clickOnCompanyTab() {
        this.tab("company").click()
        return this;
    }

    selectCompanyProfile(){
        cy.get('ddiq-company-search .results-table :nth-child(2) :nth-child(2) span a').click()  
    }

    selectPersonProfile(){
        cy.get('ddiq-person-search .results-table :nth-child(2) :nth-child(2) span a').click()  
    }
    clickOnPersonTab() {
        this.tab("person").click()
        return this;
    }

    verifyExpectedRecordsForCompany(expectedLength: number) {
        this.company.records.should('have.length', expectedLength)
        return this;
    }

    shouldBeRecordsExist() {
        cy.get('[id="company-tab-active"] table.results-table').should('exist');
    }

    verifyCompanyTabIs(expectedStatus: "active" | "inactive") {
        if (expectedStatus === "active") {
            this.tab("company").parent('li').should('have.attr', 'class', 'active')
        } else {
            this.tab("company").parent('li').should('have.attr', 'class').and('not.contain', 'active')
        }
        return this;
    }

    verifyPersonTabIs(expectedStatus: "active" | "inactive") {
        if (expectedStatus === "active") {
            this.tab("person").parent('li').should('have.attr', 'class', 'active')
        } else {
            this.tab("person").parent('li').should('have.attr', 'class').and('not.contain', 'active')
        }
        return this;
    }

    verifyCompanySearchText() {
        this.searchResultTextFor("company").should('contain.text', `Your search for "Credit Suisse" has 1 results on 1 pages`);
        return this;
    }

    navigateToPersonTab() {
        this.tab("person").click();
        return this;
    }

    verifyPersonSearchText() {
        this.searchResultTextFor("person").should('have.text', `Your search for "Credit Suisse" has 0 results on 0 pages`);
        return this;
    }

    openProfile(by: string | number) {
        cy.wait(5000)
        if (typeof by === "number") {
            this.company.profileName.eq(by - 1).click({ force: true });
        } else {
            this.company.profileName.contains(by).should('have.length', 1).click()
        }
    }

    verifyRegulatoryTab() {
        this.regulatoryTab.should('be.visible');
        return this
    }

    navigateToRegulatoryTab() {
        this.regulatoryTab.click()
    }

    checkCompanyFields(){
    cy.get('#company-name-input .input label').contains('Company Name')
    cy.get('#company-name-input .input input').should('be.disabled');
    cy.get('#submission-crawlplan-input ddiq-select select').should('be.disabled');
    }

    checkPersonFields(){
        cy.get('#person-name-input .input label').contains('Full Name')
    cy.get('#person-name-input .input input').should('be.disabled');
    cy.get('#submission-crawlplan-input ddiq-select select').should('be.disabled');
        }
}