Feature: Bulk adjudication by selecting mass hits to escalate 

    @Regression
    Scenario: TC: Bulk adjudication by selecting mass hits to escalate 
    Given User login to the application admin panel with user
    When User is on admin panel
    Then User click on View Profiles
    Then User selects Regular-test
    Then User clicks on Find Profiles
    Then User selecets first row user from results
    Then Click on deescalation all adjudication regulatory items if exist then escalated count should be not exist
    Then click on escalate button and select mass hits for escalation and click cancel button from window model
    Then click on escalate button and select mass hits for escalation and click close button from window model
    Then Bulk adjudication by mass selecting hits should adjudicate all of the hits in that classification with the selected action, when the classification folder is expanded
    Then Click on deescalation all adjudication regulatory items if exist then escalated count should be not exist
    Then Bulk adjudication by mass selecting hits should adjudicate all of the hits in that classification with the selected action, when the classification folder is collapsed
    Then Click on deescalation all adjudication regulatory items if exist then escalated count should be not exist