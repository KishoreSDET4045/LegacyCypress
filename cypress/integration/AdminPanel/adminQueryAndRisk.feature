Feature: Admin user test cases

Background: Admin login to application
Given User login to the application admin panel with the user

@Regression
Scenario: TC: 15 When the admin uses the Risk Configuration tab to create a new risk configuration should create the new risk configuration
    When admin navigates to Risk config panel
    Then admin is able to create a new risk Config
    Then admin logout of the application

    
@Regression
Scenario: TC: 16 When the admin uses the Query Management tab to create a new query plan should create the new query plan
    When admin navigates to Query management
    Then admin is able to create a new plan

# # @Regression
# # Scenario: Tc: 17 When the admin uses the Query Management tab to create a new query set should create the new query set
# #     When admin navigates to Query management
# #     Then admin clicks on "Query Sets"
# #     Then admin is able to create a new query set

# @Regression
# Scenario: TC: 18 When the admin uses the Query Management tab to clone a query set should create the new query set with "Clone" appended

