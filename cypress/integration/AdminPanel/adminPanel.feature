Feature: Admin user test cases

Background: Admin login to application
Given User login to the application admin panel with the user

@Regression
Scenario: TC: 01 when the admin uses the Users tab to create a new user should create the specified user
    Then admin navigates to add user
    Then admin should be able to create a new user by click on save button

@Regression
Scenario: TC: 02 User administration page when creating a new user and all required fields are filled in and the user clicks cancel should not create a new user
    Then admin navigates to add user
    Then admin should not be able to create a new user by click on cancel button

@Regression
Scenario: TC: 03 User administration page when creating a new user and not all required fields are filled in and the user clicks save button should not create a new user without all required fields
    Then admin navigates to add user
    Then "User requires Role" validation should be present
    Then save button is disabled until all required fields are filled

@Regression
Scenario: TC: 04 User administration page when editing a existing user and full name and email fields are updated and the user clicks cancel button should not update any fields
    Then admin clicks on edit user
    Then admin edits fullname and email and click on cancel
    Then fullname and email are not changed

@Regression
Scenario: TC: 05 User administration page when editing a existing user and full name and email fields are updated and the user clicks update should update full name and email fields
    Then admin clicks on edit user
    Then admin edits fullname and email and click on update
    Then fullname and email are changed

@Regression
Scenario: TC: 06 User administration page when editing a existing user and required field full name is deleted and the user clicks update button should not update full name field
    Then admin clicks on edit user
    Then admin clears the fullname field
    Then update button is disabled

@Regression
Scenario: TC: 07 User administration page when editing a existing user and required field email is deleted and the user clicks update button should not update email field
    Then admin clicks on edit user
    Then admin clears the email field
    Then update button is disabled

@Regression
Scenario: TC: 08 User administration page when resetting password for an existing user and a correct password is populated and the user clicks Reset Password should update password
    Then admin is able to reset the password for the user

@Regression
Scenario: Tc: 09 When the admin uses the Crawl Plan Management tab to create a new crawl plan should create the new crawl plan
    When admin navigates to Crawl Plan management
    Then admin is able to create a new plan

@Regression
Scenario: TC: 10 When the admin uses the Crawl Plan Management tab to create a new validation crawl plan should create the new validation crawl plan
    When admin navigates to Crawl Plan management
    Then admin click on "Validation Crawls"
    Then admin is able to create a new plan

@Regression
Scenario: TC: 11 When the admin uses the Properties tab to search for a specific feature should show the feature that was searched
    When admin navigates to Properties
    Then admin searches for build screen option
    Then admin click on build screen

@Regression
Scenario: TC: 12 When the admin uses the Properties tab to change a specific property should save the changes for that property
    When admin navigates to Properties
    Then admin searches for build screen option
    Then admin click on build screen
    Then admin changes the option and can save the changes

 @Regression
 Scenario: TC: 13 When the admin uses the Queue Management tab to abort a specific profile that is in the queue should abort the selected profile
    When a profile is submitted under a plan
    Then admin navigates to Queue management
    Then admin can abort the specific profile
    
 @Regression
 Scenario: TC: 14 When the admin uses the Queue Management tab to see if there are any profiles in the queue should show the profile that is in queue when refresh is clicked
    When a profile is submitted under a plan
    Then admin navigates to Queue management
    Then admin clicks on refresh to see the profile