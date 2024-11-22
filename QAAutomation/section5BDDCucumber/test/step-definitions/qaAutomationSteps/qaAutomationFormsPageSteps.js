import { When, Then } from "@wdio/cucumber-framework";
import AllureReporter from "@wdio/allure-reporter";
import { assert } from "chai";
import QAAutomationFormsPage from "../../page-objects/QAAutomationPages/QAAutomationFormsPage.js";

Then('Practice Form is displayed', async() => {
    AllureReporter.addStep('Check if the Form Page is displayed');
    assert.isTrue(await QAAutomationFormsPage.isPageOpened(), 'The Form Page was not displayed');
});
When('The user clicks on Practice Form Button', async() => {
    AllureReporter.addStep('Click on Form Button');
    await QAAutomationFormsPage.clickOnPracticeFormButton();
});
Then('A form is displayed', async() => {
    AllureReporter.addStep('Check if the form is displayed');
    await QAAutomationFormsPage.isStudentFormDisplayed();
});
When('The user fills out the first name', async() => {
    AllureReporter.addStep('Fill out the first name field');
    await QAAutomationFormsPage.fillOutFirstNameInput(process.env.userFirstName);
});
When('the last name', async() => {
    AllureReporter.addStep('Fill out the last name field');
    await QAAutomationFormsPage.fillOutLastNameInput(process.env.userLastName);
});
When('the checkbox male', async() => {
    AllureReporter.addStep('Check the male checkbox');
    await QAAutomationFormsPage.checkMaleInput();
});
When('the phone number field', async() => {
    AllureReporter.addStep('Fill out the mobile phone field');
    await QAAutomationFormsPage.fillOutMobilePhoneInput(process.env.userMobilePhone);
});
Then('A Success modal is displayed', async() => {
    AllureReporter.addStep('Check if the success modal is displayed');
    assert.isTrue(await QAAutomationFormsPage.isModalDisplayed(), 'The Success modal was not displayed');
});