import AdminUser from '../page_object/adminUser.po';
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';

//import  { faker }  from '@faker-js/faker';

const adminuser:AdminUser = new AdminUser();

Given('User login to the application admin panel with the user', () => {
   adminuser.adminLogin(); 
 })

 Then('User is on the admin panel', () => {
   adminuser.assertAdminTop();
 })

 Then('When the admin uses the Users tab to create a new user should create the specified user', () => {
   adminuser.addNewUser()
 })

 Then('when the admin uses the Crawl Plan Management tab to create a new crawl plan should create the new crawl plan', () => {
  
 })

 Then('when the admin uses the Crawl Plan Management tab to create a new validation crawl plan should create the new validation crawl plan', () => {
  
 })

 Then('when the admin uses the Properties tab to search for a specific feature should show the feature that was searched', () => {
  
 })

 Then('when the admin uses the Properties tab to change a specific property should save the changes for that property', () => {
  
 })

 Then('when the admin uses the Query Management tab to create a new query plan should create the new query plan', () => {
  
 })

 Then('when the admin uses the Query Management tab to create a new query set should create the new query set', () => {
  
 })

 Then('when the admin uses the Query Management tab to clone a query set should create the new query set with "Clone" appended', () => {
  
 })

 Then('when the admin uses the Queue Management tab to abort a specific profile that is in the queue should abort the selected profile', () => {
  
 })

 Then('when the admin uses the Queue Management tab to see if there are any profiles in the queue should show the profile that is in queue when refresh is clicked', () => {
  
 })

 Then('when the admin uses the Risk Configuration tab to create a new risk configuration should create the new risk configuration', () => {
  
 })



 


