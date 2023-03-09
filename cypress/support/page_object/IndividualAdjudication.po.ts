/// <reference types="Cypress" />
export default class IndividualAdjudication {

    Login() {
        cy.visit('/dashboard')
        cy.contains('label', 'User Name').next('input[type=text]').type('oiqadmin')
        cy.get('input[type="password"]').type('admin4oiq')
        cy.get('button[type="submit"]').click({force:true})
        cy.wait(3000)
    }

    ViewProfile(){
        cy.contains('a', 'View Profiles').click({force:true})
        cy.wait(3000)
    }

    SelectProfile() {
        cy.get('#company-tab').contains("Company ").click().wait(2000)
        cy.get('#company-tab-active table tr:nth-child(2) td:nth-child(2) span a').click({force:true})
        cy.wait(5000) 
    }

    SelectNavForConfirm() {
        cy.get('i.fa-angle-double-left').click({force:true})
        cy.wait(2000)
        cy.get('i.fa-check-square-o').click({force:true})
    }

    SelectRecord() {
        cy.get('div.dynamic-adjudication-overlay').eq(0).click({force:true})
        cy.get('i.fa-check-circle-o').click({force:true})
    }

    MakeAssertion() {
        cy.get('div.modal-title').invoke('text').should('eq', ' Bulk Adjudication ')
        cy.get('td.center').should('have.text', '1')
    }

    ClickAdjudicate() {
        cy.contains('button', 'Adjudicate').click({force:true})
        cy.wait(5000) 
    }

    SelectNavForStar() {
        cy.get('i.fa-angle-double-left').click({force:true})
        cy.wait(2000)
        cy.get('i.fa-star').click({force:true})
    }

    SelectNavForComment() {
        cy.get('i.fa-angle-double-left').click({force:true})
        cy.wait(2000)
        cy.get('i.fa-commenting-o').click({force:true})
    }

    AddComment() {
        cy.get('div.comment-box > textarea').type('Done through automation')
        cy.contains('button', 'Adjudicate').click({force:true})
        cy.wait(5000)  
    }

    SelectNavForRemove() {
        cy.get('i.fa-angle-double-left').click({force:true})
        cy.wait(2000)
        cy.get('i.fa-times').click({force:true})
    }

    ReagionToRemove() {
        cy.get('span.input + select').select('IGNORED')
        cy.contains('button', 'Adjudicate').click({force:true})
        cy.wait(5000)
    }

    ConditionConfirm() {
        cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span').eq(1).then(($element) => {
            if($element.hasClass('oiq-adjudication-actions-unconfirm')){
                cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span.oiq-adjudication-actions-unconfirm').eq(0).click({force: true})                           
            }
            else {
                cy.wait(1000)
            }
        })
    }

    ConditionStar() {
        cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span').eq(2).then(($element) => {
            if($element.hasClass('oiq-adjudication-actions-deescalate')){
                cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span.oiq-adjudication-actions-deescalate').eq(0).click({force: true})
            }
            else{
                cy.wait(1000)
            }
        })
    }

    ConditionRemove() {
        cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span').eq(3).then(($element) => {
            if($element.hasClass('oiq-adjudication-actions-add')){
                cy.get('div.oiq-corporate-record-summary.oiq-grid-cell > ddiq-adjudication-actions > div > div > span.oiq-adjudication-actions-add').eq(0).click({force: true})
            }
            else{
                cy.wait(1000)
            }
        })
    }
}