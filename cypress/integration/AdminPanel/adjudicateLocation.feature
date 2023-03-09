Feature:adjudicating Related Location

  Background:adjudicating Related Location
    Given User login to the application with user
    Then User click on View Profiles
    Then User selects DDIQ EDD
    Then User clicks on Find Profiles
    Then User selects first row user from results

  @Regression
  Scenario:Tc-13 Adjudicating related location hits for company by confirming should confirm the hit
     Then user clicks on location link
     Then user check the confirm checkbox
     Then confirmed message will be display
  

  @Regression
  Scenario:Tc-14 Adjudicating related location hits for company by un-confirming a previously confirmed hit should unconfirm the hit
     Then user clicks on location link
     Then user uncheck the confirm checkbox
     Then Unconfirmed message will be display


  @Regression
  Scenario:Tc-15 Adjudicating related location hits for company by escalating and re-selecting previously escalated hit should escalate and deescalate the hit
     Then user clicks on location link
     Then user clicks on star content link
     Then Escalated message will be display
     Then user clicks on star content link
     Then Deescalated message will be display
  

  @Regression
  Scenario:Tc-16  Adjudicating related location hits for company by removing should remove the hit
     Then user clicks on location link
     Then user clicks on remove symbol link and select ignored
     Then Remove message will be display
  
  @Regression
  Scenario:Tc-17  Adjudicating related location hits for company by adding a previously removed hit should add the hit
     Then user clicks on location link
     Then user clicks on add symbol link
     Then Adjudication Removed message will be display
     
   @Regression
   Scenario:Tc-18 Adjudicating related location hits for company by commenting should add a comment to the hit
     Then user clicks on location link
     Then user clicks on comment link
     Then type a comment and clicks on ok button
     Then typed comment will be display


