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

    addNewUser(){
        cy.get('.nav-tabs a').contains('Properties').click().wait(5000)
        cy.get('.nav-tabs a').contains('Users').click().wait(5000)
        cy.get('.btn span').contains('Add User').click().wait(5000)
        const username = faker.name.firstName();
        const FullName = faker.name.fullName();
        const email= faker.internet.email();
        cy.get('.admin-table input.input-block-level').eq(0).type(username)
        cy.get('.admin-table input.input-block-level').eq(1).type('Welcome@1234')
        cy.get('.admin-table input.input-block-level').eq(2).type(FullName)
        cy.get('.admin-table input.input-block-level').eq(3).type(email)
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check({force:true}).wait(2000)
        cy.get('.btn-info span').contains('Save').click().wait(3000)
        //cy.get('td a').contains(email).should('exist')
    }
    
  }