import SuperUser from '../page_object/superUser.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
//import  { faker }  from '@faker-js/faker';

const superuser:SuperUser = new SuperUser();

Given('User login to the application admin panel with the user', () => {
    superuser.adminLogin(); 
 })

 Then('When User is on admin panel', () => {
    superuser.assertAdminTop();
 })

 Then('Add new user', () => {
    superuser.addNewUser()
 })
