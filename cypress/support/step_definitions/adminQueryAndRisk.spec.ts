import AdminUser from '../page_object/adminUser.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';

const adminUser:AdminUser = new AdminUser();

let plan= adminUser.randomNumber;

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

//
  
  When('admin navigates to Query management',()=> {
    adminUser.navigateToQueryManagement();
  })
  
  Then('admin click on {string}',(queryset: string)=>{
    adminUser.selectQuerySet(queryset);
  })