import { Then, When } from "cypress-cucumber-preprocessor/steps";
import AdjudicateMassEscalate from "../page_object/adjudicate.po";
import IndividualAdjudication from "../page_object/IndividualAdjudication.po";

const adjudication: IndividualAdjudication = new IndividualAdjudication();
const adjudicate: AdjudicateMassEscalate = new AdjudicateMassEscalate();

 //Scenario
 When('If condition to verify confirm content check box', () => {
  adjudication.ConditionConfirm();
 })
Then('click on adjudication side nav and select confirm contents', () => {
    adjudication.SelectNavForConfirm();
})
Then('select one record for confirm contents', () => {
    adjudication.SelectRecord();
})
Then('make assertion for Bulk adjudication header and number of records selected', () => {
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

Then('select one record for star contents', () => {
  adjudication.SelectRecord();
})

Then('click on Adjudicate button', () => {
  adjudication.ClickAdjudicate();
})

 //Scenario
 
 Then('click on adjudication side nav and select comment contents', () => {
   adjudication.SelectNavForComment();
})

Then('select one record for comment contents', () => {
   adjudication.SelectRecord();
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

Then('select one record for remove contents', () => {
  adjudication.SelectRecord();
})

Then('add reagion and click on Adjudicate button', () => {
  adjudication.ReagionToRemove();
})