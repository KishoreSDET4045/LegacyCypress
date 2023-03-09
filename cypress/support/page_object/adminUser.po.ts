/// <reference types="Cypress" />
import  { faker }  from '@faker-js/faker';
export default class AdminUser {

    adminLogin(){
        cy.visit('/admin')
        cy.get('#login-username').type('oiqadmin')
        cy.get('#login-password').type('admin4oiq')
        cy.get('.btn-block').contains('Login').click()
    }

    logout(){
        cy.get('.main-nav-tabs a span').contains("Logout").click({force:true})
    }
    assertAdminTop(){
        cy.get('#adminTop').should('exist')
    }

    navigateToAddUser(){
        cy.get('.nav-tabs a').contains('Properties').click().wait(5000)
        cy.get('.nav-tabs a').contains('Users').click().wait(5000)
        cy.get('.btn span').contains('Add User').click()
    }

    // addNewUser(){
    //     const username = faker.name.firstName();
    //     const FullName = faker.name.fullName();
    //     const email= faker.internet.email();
    //     cy.get('.admin-table input[name="username"]').clear().type(username)
    //     cy.get('.admin-table input[name="password"]').clear().type('Welcome@1234')
    //     cy.get('.admin-table input[name="fullName"]').clear().type(FullName)
    //     cy.get('.admin-table input[name="emailAddress"]').clear().type(email)
    //     cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check({force:true}).wait(2000)
    //     //cy.get('td a').contains(email).should('exist')
    //     //this.deleteUser(username);
    //    }

       clickOnSave(){
        cy.get('.btn-info span').contains('Save').click().wait(3000)
       }

       clickOnCancel(){
        cy.get('.pull-right .btn span').contains("Cancel").click();
    }

    userNotCreated(){
        cy.get('#usersTable table tbody tr')
        .its('length') // get the length of the rows
        .then((len) => { // use the length in the next assertion
          cy.get('#usersTable table tbody tr').eq(len) // select the n+1th row
            .should('not.exist') // assert that it doesn't exist
        })
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

    get fullName(){
        return cy.get('#usersTable .table-striped tr:last-child td:nth-child(3)')
    }
     
    get email(){
        return cy.get('#usersTable .table-striped tr:last-child td:nth-child(2)')
    }

    get userNameFromTable(){
        return cy.get('#usersTable .table-striped tr:last-child td:nth-child(3)')
    }
     

    get submit(){
        return cy.get('button[type="submit"]');
    }

    disabledSubmitButton(){
        this.submit.should('be.disabled');
    }

    roleValidation(){
        cy.get('.admin-error').contains("User requires Role").should('be.exist')
    }

    clickOnEditUser(){
        cy.get('#usersTable .table-striped tr:last-child .btn span').contains("Edit").click().wait(2000)
    }

    get username() {
        return cy.get('.admin-table input[name="username"]')
    }

     get password() {
        return cy.get('.admin-table input[name="password"]')
    }

    get fullname() {
        return cy.get('.admin-table input[name="fullName"]')
    }

 get emailAddress() {
        return cy.get('.admin-table input[name="emailAddress"]')
    }

    get userName(){
        return "testuser"+(Math.floor(Math.random() * 1000) + 1).toString();
    }

    get randomNumber(){
        return (Math.floor(Math.random() * 1000) + 1).toString();
    }

    createNewUser(nameofuser: string, password: string, fullname: string, emailAddress: string) {
        this.username.clear().type(nameofuser).should('have.value', nameofuser);
        this.password.clear().type(password).should('have.value', password);
        this.fullname.clear().type(fullname).should('have.value', fullname);
        this.emailAddress.clear().type(emailAddress).should('have.value', emailAddress);
    }

    createIndividualUser()
    {
    cy.get('.admin-table [ng-reflect-name="editRole-role_limited_user"]').check().wait(2000)
    cy.get('.btn span').contains("Save").click().wait(2000)
    }

    createSuperUser()
    {
    cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check().wait(2000)
    cy.get('.btn span').contains("Save").click().wait(2000)
    }

    createSupportUser()
    {
    cy.get('.admin-table [ng-reflect-name="editRole-role_support"]').check().wait(2000)
    cy.get('.btn span').contains("Save").click().wait(2000)
    }

    enableUser(){
        cy.get('#usersTable .table-striped tr:last-child .btn span').contains("Enable").click().wait(2000)
    }

    editUser(){
        cy.get('#usersTable .table-striped tr:last-child .btn span').contains("Edit").click().wait(2000)
    }

    checkSuperUser(){
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').check().wait(2000)
    }

    uncheckSuperUser(){
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').uncheck().wait(2000)
    }

    checkSupportUser(){
        cy.get('.admin-table [ng-reflect-name="editRole-role_support"]').check().wait(2000)
    }

    uncheckSupportUser(){
        cy.get('.admin-table [ng-reflect-name="editRole-role_support"]').uncheck().wait(2000)
    }

    disabledCheckBox(){
        cy.get('.admin-table [ng-reflect-name="editRole-role_superuser"]').should('be.disabled')
        //we can use like this also: cy.get('input[type="checkbox"][disabled]').should('be.disabled')
    }

    updateUser(){
        cy.get('.btn span').contains("Update").click().wait(2000)
    }

    get updateButton(){
       return cy.get('.pull-right button[type="submit"]').eq(0)
    }
    
    resetPasswordButton(){
        cy.get('#usersTable .table-striped tr:last-child .btn span').contains("Reset").click().wait(2000)
    }

    resetPassword(password:string){
        this.resetPasswordButton();
        cy.get('#newPassword').clear().type(password)
        cy.get('.pull-right button span').contains("Reset Password").click().wait(1000)
    }


    loginFailed(){
        cy.get('#login-ctrl').should('exist')
    }

    clickOnProperties(){
        cy.get('.nav-tabs a').contains("Properties").click()
    }
    
    get search(){
        return cy.get('.input-append input')
    }
    
    typeBuildScreenOptions(){
        this.search.type("build screen options")
    }

    selectBuildScreenOptions(){
        cy.get('td span').contains("Build screen options").should('be.exist').click()
    }

   changeValue(){
        //check whether country selected is true or not
        cy.get('[ng-reflect-name="ui.field.sex.required"]').then(($select) => {
                const selectedOption = $select.find('option:selected').text()
                if(selectedOption === "true")
                {
                    cy.get('[ng-reflect-name="ui.field.sex.required"]').select("false")
                }
                else{
                    cy.get('[ng-reflect-name="ui.field.sex.required"]').select("true")
                }
              })
    }

    save(){
        cy.get('#save-property').contains("Save").click()
    }

    clickOnInstance(){
        cy.get('.instance-property th').contains("Instance").click()
        cy.wait(5000)
    }


    // crawlPlan functions


    navigateToCrawlPlanManagement(){
        cy.get('a[href="#"]').contains("Crawl Plan Management").click().wait(3000);
    }

 private get newButton(){
    return cy.get('button span').contains("New")
  }

  clickOnNewButton(){
    this.newButton.click({force:true}).wait(3000);
  }

  newCrawlPlan(randomplan: string){
    cy.get('.plan-info input').eq(0).type(randomplan, { force: true })
    cy.get('.plan-info input').eq(1).type(randomplan, { force: true })
  }

  newRiskPlan(randomplan: string){
    cy.get('.plan-info input').eq(0).type(randomplan, { force: true })
    cy.get('.plan-info input').eq(1).type('newRisk'+randomplan, { force: true })
  }


  private get saveButton(){
    return cy.get('.selected button span').contains("Save")
  }

  clickOnSaveButton(){
    this.saveButton.click({force:true}).wait(2000);
  }
    
  private get cancelButton(){
    return cy.get('.selected button span').contains("Cancel")
  }

  clickOnCancelButton(){
    this.cancelButton.click({force:true}).wait(2000);
  }

  selectCrawlType(crawlType:string){
    cy.get('#crawlplan-management a').contains(crawlType).click().wait(2000) 
}

// Risk configuration

navigateToRiskConfigurations(){
    cy.get('a[href="#"]').contains("Risk Configurations").click().wait(3000);
}

// Query management

navigateToQueryManagement(){
    cy.get('a[href="#"]').contains("Query Management").click().wait(3000);
}

selectQuerySet(set:string){
    cy.get('#query-management a').contains(set).click().wait(2000) 
}

//queue management

navigateToQueueManagement(){
    cy.get('a[href="#"]').contains("Queue Management").click().wait(3000);
}

get nameInQueueTable(){
    return cy.get('#queue-management table tr:last-child td:nth-child(2)')
}

abortProfile(){
    cy.get('.search-narrow .profile-checkbox').eq(0).check().wait(2000)
  cy.get('#abortSelectedBtn span').contains("Abort Selected").click();
}

postNewProfileInQueue(name: string){
    cy.request({
        method: 'POST',
        url:'/ddiq-services/rest/company/submit',
        headers: {
          Authorization: 'Basic ' + btoa('oiqadmin:admin4oiq'),
          Accept: '*/*'
        },
        body: {
          "profiles": [
            {
             "currentAddress": {
                "country": "Russia"
              },
              "monitored": true,
              "companyName": name,
              "sparseSubmission": false,
              "crawlPlanType": "ddiq",
              "crawlScheduleConfig":{
                "priority":9,
                "previewEnabled":true
               },
              "monitorConfig": {
                "frequency": "DAILY",
                "categories": [
                  "ADVERSE",
                  "LEGAL",
                  "REGULATORY",
            "WEBSITESCORECARD"
                ]
              }
             
            }
          ]
        }
        //failOnStatusCode: false,  
      }).then((response) => {
        expect(response.status).to.eq(200)
    })  
}
}
    
  