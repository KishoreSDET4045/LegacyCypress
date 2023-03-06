/// <reference types="Cypress" />
import  { faker }  from '@faker-js/faker';
export default class SuperUser {
    adminLogin(){
        cy.visit('https://test-qa.ddiq.com/admin')
        cy.get('#login-username').type('oiqadmin')
        cy.get('#login-password').type('admin4oiq')
        cy.get('.btn-primary').contains('Login')
    }

    assertAdminTop(){
        cy.get('#adminTop').contains('Administration Panel')
    }

    addNewUser(){
        cy.get('.btn span').contains('Add User').click()
        const username = faker.name.firstName();
        const FullName = faker.name.fullName();
        const email= faker.internet.email();
        cy.get('.admin-table input.input-block-level').eq(0).type('username')
        cy.get('.admin-table input.input-block-level').eq(1).type('Welcome@1234')
        cy.get('.admin-table input.input-block-level').eq(2).type('FullName')
        cy.get('.admin-table input.input-block-level').eq(3).type('email')
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check().wait(2000)
        cy.get('.btn-info span').contains('Save')
    }

  }