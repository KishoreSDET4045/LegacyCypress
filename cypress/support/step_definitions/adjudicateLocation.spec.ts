import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AdjudicateMassEscalate from "../page_object/adjudicate.po";
import viewProfilePage from "../page_object/viewProfilePage.po";

const adjudicate:AdjudicateMassEscalate = new AdjudicateMassEscalate();
const viewProfile:viewProfilePage=new viewProfilePage();

Then('user clicks on location link',() => {
    viewProfile.locationLink.click({force:true}).wait(3000);
})
Then ('user check the confirm checkbox',() => {
    viewProfile.confirmCheckBox.click().wait(3000);
})
Then ('confirmed message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Confirmed';
        cy.wrap($td).should('have.text', expectedValue);
      })  

})
 
//Scenerio
Then ('user uncheck the confirm checkbox',() => {
    viewProfile.confirmCheckBox.click().wait(3000);
})
Then ('Unconfirmed message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Unconfirmed';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})

//Scenerio
Then ('user clicks on star content link',() => {
    viewProfile.starContentLink.click({force:true}).wait(3000);
})
Then ('Escalated message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Escalated';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})
Then ('user clicks on star content link',() => {
    viewProfile.starContentLink.click({force:true}).wait(3000);
})
Then ('Deescalated message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Deescalated';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})

//Scenerio
Then ('user clicks on remove symbol link and select ignored',() => {
    viewProfile.removeSymbol.click({force:true}).wait(3000);
    cy.get('.adjudication-controls div div span').contains('Ignored').click({force:true}).wait(3000);
})
Then ('Remove message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Removed:';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})

//Scenerio
Then ('user clicks on add symbol link',() => {
    viewProfile.removeSymbol.click({force:true}).wait(3000);
})
Then ('Adjudication Removed message will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] b').wait(3000).last().each(($td) => {
        const expectedValue ='Adjudication Removed';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})

//Scenerio
Then ('user clicks on comment link',() => {
    viewProfile.commentSymbol.click({force:true}).wait(3000);
})
Then('type a comment and clicks on ok button',() => {
    viewProfile.commentBoxTextArea.type('Welcome')
    viewProfile.commentBoxOkButton.click({force:true}).wait(3000);
})
Then ('typed comment will be display',() => {
    cy.get('.related-entity div[class="adjudication-entry last"] li').wait(3000).last().each(($td) => {
        const expectedValue =' Welcome ';
        cy.wrap($td).should('have.text', expectedValue).wait(3000);
      })  
})



