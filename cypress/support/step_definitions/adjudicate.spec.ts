
import AdjudicateMassEscalate from '../page_object/adjudicate.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
import ViewProfile from '../page_object/viewProfile.po';

const adjudicate: AdjudicateMassEscalate = new AdjudicateMassEscalate();
const viewProfile: ViewProfile = new ViewProfile();


Given('User login to the application with user', () => {
     adjudicate.login();
  })

Then('User click on View Profiles', () => {
     adjudicate.viewProfile()
})

Then('User selects DDIQ EDD', ()=>{
     adjudicate.ddiqTest();
})

Then('User clicks on Find Profiles',()=>{
     adjudicate.findProfiles()
})

Then('User selects first row user from results',()=>{
     adjudicate.firstUser()
})

Then('Click on deescalation all adjudication regulatory items if exist then escalated count should be not exist', () => {
     cy.get('.count').should('exist').then(($count) => {
          if($count.find('.escalated-count').length > 0){
          viewProfile.deescalateAllAdjudicationIfExist()
          }
      })
     })

Then('click on escalate button and select mass hits for escalation and click cancel button from window model', () => {
      adjudicate.cancelWindow()
     
     }
     )
Then('click on escalate button and select mass hits for escalation and click close button from window model', ()=>{
     adjudicate.closeWindow()

})

Then('Bulk adjudication by mass selecting hits should adjudicate all of the hits in that classification with the selected action, when the classification folder is expanded', ()=>{
     adjudicate.expanded()

})

Then('Bulk adjudication by mass selecting hits should adjudicate all of the hits in that classification with the selected action, when the classification folder is collapsed', () => {
     adjudicate.collapsed()
})