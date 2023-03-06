Feature: Bulk adjudication by individually selecting confirm, star, remove, comment contents

  Background: User logged into the application
    When User login into application
    Then Click on View Profiles
    And select Regular-test from Profile Type dropdown and click on Find Profiles
    Then seclect any company getting Profiles

    @Regression

    Scenario: TC: 01 Bulk adjudication by individually selecting hits to confirm should confirm the selected hits
    When If condition to verify confirm content check box
    Then click on adjudication side nav and select confirm contents
    And select one record for confirm contents
    And make assertion for Bulk adjudication header and number of records selected
    Then click on Adjudicate button

    @Regression

    Scenario: TC: 02 Bulk adjudication by individually selecting hits to escalate should escalate the selected hits
    When If condition to verify star content check box
    Then click on adjudication side nav and select star contents
    And select one record for star contents
    And make assertion for Bulk adjudication header and number of records selected
    Then click on Adjudicate button

    @Regression

    Scenario: TC: 03 Bulk adjudication by individually selecting hits to comment should comment on the selected hits
    Then click on adjudication side nav and select comment contents
    And select one record for comment contents
    And make assertion for Bulk adjudication header and number of records selected
    Then add comment and click on Adjudicate button

    @Regression

    Scenario: TC: 04 Bulk adjudication by individually selecting hits to remove should remove the selected hits
    When If condition to verify remove content check box
    Then click on adjudication side nav and select remove contents
    And select one record for remove contents
    And make assertion for Bulk adjudication header and number of records selected
    Then add reagion and click on Adjudicate button