import AdminUser from '../page_object/adminUser.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';

const adminUser:AdminUser = new AdminUser();

let userName= adminUser.userName;
let plan= adminUser.randomNumber;

Given('User login to the application admin panel with the user', () => {
   adminUser.adminLogin(); 
 })

 //
Then('admin navigates to add user', () => {
  adminUser.navigateToAddUser();
})

 Then('admin should be able to create a new user by click on save button', () => {
   adminUser.createNewUser(userName,'Welcome@1234',userName,'ddiqtest@exiger.com');
   adminUser.checkSuperUser();
   adminUser.clickOnSave();
   adminUser.userNameFromTable.invoke('text').then(text => {
    adminUser.userNameFromTable.should('have.text', text)
  });
 })

Then('admin should not be able to create a new user by click on cancel button',()=> {
  adminUser.createNewUser(userName,'Welcome@1234',userName,'ddiqtest@exiger.com');
  adminUser.clickOnCancel();
  adminUser.userNotCreated();
})

//

 Then('{string} validation should be present',(text:string)=> {
  adminUser.roleValidation();
})

Then('save button is disabled until all required fields are filled',()=> {
  adminUser.disabledSubmitButton();
})

//

Then('admin clicks on edit user',()=> {
adminUser.editUser();
})

Then('admin edits fullname and email and click on cancel',()=> {
  adminUser.fullname.clear().type('newuser')
  adminUser.emailAddress.clear().type('testddiq@exiger.com')
  adminUser.clickOnCancel();
})

Then('fullname and email are not changed',()=> {
 adminUser.fullName.invoke('text').then(text => {
    adminUser.fullName.should('have.text', text)
  });

  adminUser.email.invoke('text').then(text => {
    adminUser.email.should('have.text', text)
  })

})

//
Then('admin edits fullname and email and click on update',()=> {
  adminUser.fullname.clear().type('newuser')
  adminUser.emailAddress.clear().type('testddiq@exiger.com')
  adminUser.updateUser();
})

Then('fullname and email are changed',()=> {
 adminUser.fullName.invoke('text').then(text => {
    adminUser.fullName.should('have.text', text)
  });

  adminUser.email.invoke('text').then(text => {
    adminUser.email.should('have.text', text)
  })

})

//

Then('admin clears the fullname field',() => {
adminUser.fullname.clear();
})

Then('update button is disabled',() => {
adminUser.updateButton.should('be.disabled');
})

//

Then('admin clears the email field',() => {
  adminUser.emailAddress.clear();
  })

  //

  Then('admin is able to reset the password for the user',()=> {
    adminUser.resetPassword('Welcome@123');
  })

  //

  When('admin navigates to Crawl Plan management',()=> {
    adminUser.navigateToCrawlPlanManagement();
  })

  Then('admin is able to create a new plan',()=> {
    adminUser.clickOnNewButton();
    adminUser.newCrawlPlan(plan);
    adminUser.clickOnSaveButton();
  })

  //

  Then('admin click on {string}',(crawlplan: string)=>{
    adminUser.selectCrawlType(crawlplan);

  })

  //

  When('admin navigates to Properties',()=> {
    adminUser.clickOnProperties();
  })

  Then('admin searches for build screen option',()=> {
    adminUser.typeBuildScreenOptions();
  })

  Then('admin click on build screen',()=> {
    adminUser.selectBuildScreenOptions();
  })

  //

  Then('admin changes the option and can save the changes',() => {
    adminUser.clickOnInstance();
    adminUser.changeValue();
    adminUser.save();

  })

//

When('a profile is submitted under a plan',()=> {
  adminUser.postNewProfileInQueue('testDDIQCompany');
})

Then('admin navigates to Queue management',() => {
  adminUser.navigateToQueueManagement();
})

Then('admin can abort the specific profile',() => {
  adminUser.abortProfile();
})

//

Then('admin clicks on refresh to see the profile',() => {
  cy.get('#refreshBtn span').contains("Refresh").click();
  adminUser.nameInQueueTable.invoke('text').then(text => {
    adminUser.nameInQueueTable.should('have.text', text)
  });

})

//

When('admin navigates to Risk config panel',()=> {
  adminUser.navigateToRiskConfigurations();
})

Then('admin is able to create a new risk Config',()=> {
  adminUser.clickOnNewButton();
  adminUser.newRiskPlan(plan);
  adminUser.clickOnSaveButton();
})

Then('admin logout of the application',()=> {
  adminUser.logout();
})