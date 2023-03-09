/// <reference types="Cypress" />
export default class AdjudicateMassEscalate {

    login(){
        cy.visit('/dashboard')
        cy.get('input').eq(0).type('oiqadmin')
        cy.get('input').eq(1).type('admin4oiq')
        cy.get('button').click()
    }

    assert(){
        cy.get('img').eq(1).should('exist')
    }
    
    viewProfile(){
        cy.get('li a').contains('View Profiles').click({force:true})
    }
    
    regularTest(){
        cy.get('#profileType-input select').select('Regular-test').should('have.value','Regular_config')
    }

    ddiqTest(){
        cy.get('#profileType-input select').select('DDIQ EDD').should('have.value','ddiq')
    }

    findProfiles(){
         cy.get('#find-profiles-button').click().wait(5000)
    } 

    firstUser(){
        // cy.get('#person-tab').click({force:true}).wait(3000)
        // cy.get('#person-tab-active .results-table a').eq(0).click({force:true})
        cy.get('#company-tab').contains("Company ").click().wait(2000)
        cy.get('#company-tab-active .results-table a').eq(0).click({force:true})
        cy.wait(5000)
    }
    
    cancelWindow(){
        cy.get('#dynamic-adjudication .dynamic-adjudication-flyout-control').click({force:true})
        cy.get('.dynamic-adjudicate .fa-star').click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(1).click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(2).click({force:true})
        cy.get('.fa-check-circle-o').click({force:true})
        cy.get('.bulk-summary .center').contains('2').should('have.text','2')
        cy.get('.btn').contains('Cancel').click({force:true}).wait(3000)
        cy.get('.escalated-count').should('not.exist')
        cy.get('.fa-ban').click({force:true}).wait(2000)

    }
    closeWindow(){
        cy.get('.dynamic-adjudicate .fa-star').click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(1).click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(2).click({force:true})
        cy.get('.fa-check-circle-o').click({force:true})
        cy.get('.bulk-summary .center').contains('2').should('have.text','2')
        cy.get('.modal button').eq(0).click({force:true})
        cy.get('.escalated-count').should('not.exist')
        cy.get('.fa-ban').click({force:true}).wait(2000)
    }

    expanded(){
        //cy.get('#dynamic-adjudication .dynamic-adjudication-flyout-control').click({force:true})
        cy.get('.dynamic-adjudicate .fa-star').click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(1).click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(2).click({force:true})
        //cy.get('.dynamic-adjudication-overlay').eq(3).click()
        cy.get('.fa-check-circle-o').click({force:true})
        cy.get('.bulk-summary .center').contains('2').should('have.text','2')
        cy.get('.btn-primary').contains('Adjudicate').click({force:true}).wait(5000)
        cy.get('.escalated-count').should('exist');

    }

   collapsed(){
        cy.get('.no-print .btn-sm').contains(" Expand all Content ").click({force:true})
        cy.get('.dynamic-adjudicate .fa-star').click({force:true})
        cy.get('.no-print .btn-sm').contains(" Expand all Content ").click({force:true})
        //cy.get('h2').contains('General Information').click({force:true})
        cy.get('.dynamic-adjudication-overlay').eq(1).click({force:true})
        //cy.get('.dynamic-adjudication-overlay').eq(2).click()
        cy.get('.fa-check-circle-o').click({force:true})
        cy.get('.bulk-summary .center').contains('1').should('have.text','1')
        cy.get('.btn-primary').contains('Adjudicate').click({force:true}).wait(5000)
        cy.get('.escalated-count').should('exist');
        cy.get('#dynamic-adjudication .dynamic-adjudication-flyout-control').click({force:true})
    }
}
  


