Feature: Admin user test cases

Background: Admin login to application
Given User login to the application admin panel with the user

@Regression
Scenario: TC: 01 when the admin uses the Users tab to create a new user should create the specified user
    When admin navigates to add user
    Then admin should be able to create a new user

@Regression
Scenario: Tc: 02 When the admin uses the Crawl Plan Management tab to create a new crawl plan should create the new crawl plan


@Regression
Scenario: TC: 03 When the admin uses the Crawl Plan Management tab to create a new validation crawl plan should create the new validation crawl plan


@Regression
Scenario: TC: 04 When the admin uses the Properties tab to search for a specific feature should show the feature that was searched


@Regression
Scenario: TC: 05 When the admin uses the Properties tab to change a specific property should save the changes for that property


@Regression
Scenario: TC: 06 When the admin uses the Query Management tab to create a new query plan should create the new query plan


@Regression
Scenario: Tc: 07 When the admin uses the Query Management tab to create a new query set should create the new query set


@Regression
Scenario: TC: 08 When the admin uses the Query Management tab to clone a query set should create the new query set with "Clone" appended


@Regression
Scenario: TC: 09 When the admin uses the Queue Management tab to abort a specific profile that is in the queue should abort the selected profile


@Regression
Scenario: TC: 10 When the admin uses the Queue Management tab to see if there are any profiles in the queue should show the profile that is in queue when refresh is clicked


@Regression
Scenario: TC: 11 When the admin uses the Risk Configuration tab to create a new risk configuration should create the new risk configuration

