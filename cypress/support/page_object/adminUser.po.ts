/// <reference types="Cypress" />
import  { faker }  from '@faker-js/faker';
export default class AdminUser {
    adminLogin(){
   
        cy.visit('https://test-qa.ddiq.com/admin')
        cy.get('#login-username').type('oiqadmin')
        cy.get('#login-password').type('admin4oiq')
        cy.get('.btn-block').contains('Login').click()
    }

    assertAdminTop(){
        cy.get('#adminTop').should('exist')
    }

    navigateToAddUser(){
        cy.get('.nav-tabs a').contains('Properties').click().wait(5000)
        cy.get('.nav-tabs a').contains('Users').click().wait(5000)
        cy.get('.btn span').contains('Add User').click().wait(5000)
    }

    addNewUser(){
        const username = faker.name.firstName();
        const FullName = faker.name.fullName();
        const email= faker.internet.email();
        cy.get('.admin-table input[name="username"]').clear().type(username)
        cy.get('.admin-table input[name="password"]').clear().type('Welcome@1234')
        cy.get('.admin-table input[name="fullName"]').clear().type(FullName)
        cy.get('.admin-table input[name="emailAddress"]').clear().type(email)
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check({force:true}).wait(2000)
        cy.get('.btn-info span').contains('Save').click().wait(3000)
        //cy.get('td a').contains(email).should('exist')
        this.deleteUser(username);
       }

        deleteUser(id:string){
        cy.request({
            method: 'DELETE',
            url:'/ddiq-services/rest/admin/user/'+`${id}`,
            headers: {
              Authorization: 'Basic ' + btoa('oiqadmin:admin4oiq'),
              Accept: '*/*'
            },
            //failOnStatusCode: false,  
          }).then((response) => {
            expect(response.status).to.eq(204)
        })  
    }
       
        
    }
    
  