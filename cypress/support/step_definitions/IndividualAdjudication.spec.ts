import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import IndividualAdjudication from "../page_object/IndividualAdjudication.po";

const adjudication: IndividualAdjudication = new IndividualAdjudication();
When('User login into application', () => {
     adjudication.Login();
  });

Then('Click on View Profiles', () => {
     adjudication.ViewProfile();
});

And('select Regular-test from Profile Type dropdown and click on Find Profiles', () => {
     adjudication.useDropDown();
});
 Then('seclect any company getting Profiles', () => {
     adjudication.SelectProfile();
 });
 //Scenario
 When('If condition to verify confirm content check box', () => {
  adjudication.ConditionConfirm();
 })
Then('click on adjudication side nav and select confirm contents', () => {
    adjudication.SelectNavForConfirm();
})
And('select one record for confirm contents', () => {
    adjudication.SelectRecord();
})
And('make assertion for Bulk adjudication header and number of records selected', () => {
    adjudication.MakeAssertion();
})
Then('click on Adjudicate button', () => {
    adjudication.ClickAdjudicate()
})

//Scenario
When('If condition to verify star content check box', () => {
  adjudication.ConditionStar();
})
Then('click on adjudication side nav and select star contents', () => {
   adjudication.SelectNavForStar();
})
And('select one record for star contents', () => {
  adjudication.SelectRecord();
})
And('make assertion for Bulk adjudication header and number of records selected', () => {
  adjudication.MakeAssertion();
})
Then('click on Adjudicate button', () => {
  adjudication.ClickAdjudicate();
})

 //Scenario
 
 Then('click on adjudication side nav and select comment contents', () => {
   adjudication.SelectNavForComment();
})
And('select one record for comment contents', () => {
   adjudication.SelectRecord();
})
And('make assertion for Bulk adjudication header and number of records selected', () => {
   adjudication.MakeAssertion();
})
Then('add comment and click on Adjudicate button', () => {
   adjudication.AddComment();
})

//Scenario
When('If condition to verify remove content check box', () => {
  adjudication.ConditionRemove();
})

Then('click on adjudication side nav and select remove contents', () => {
   adjudication.SelectNavForRemove();
})

And('select one record for remove contents', () => {
  adjudication.SelectRecord();
})

And('make assertion for Bulk adjudication header and number of records selected', () => {
  adjudication.MakeAssertion();
})

Then('add reagion and click on Adjudicate button', () => {
  adjudication.ReagionToRemove();
})