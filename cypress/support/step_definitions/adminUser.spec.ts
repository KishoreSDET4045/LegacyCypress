import AdminUser from '../page_object/adminUser.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';

//import  { faker }  from '@faker-js/faker';

const adminuser:AdminUser = new AdminUser();

When('User login to the application admin panel with the user', () => {
   adminuser.adminLogin(); 
 })

 Then('User is on the admin panel', () => {
   adminuser.assertAdminTop();
 })

 When('admin navigates to add user', () => {
  adminuser.navigateToAddUser()
})

 Then('admin should be able to create a new user', () => {
   adminuser.addNewUser()
 })
