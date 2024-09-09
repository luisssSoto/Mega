import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import PastelColorPage from '../pageObjects/PastelColorPage.js';
import { assert } from 'chai';

// successful message
const successfulURL = "https://colorhunt.co/palette/d1e9f6f6eacbf1d3ceeecad5";

describe('Pastel Color Test', function() {
    it('Verifying the URL', async() => {
        //Open the Home URL
        await Browser.openUrl("https://colorhunt.co");

        //Navigate to 'Pastel'
        await MainPage.clickNavigationLink2('//*[text()="Pastel" and @tab="pastel"]')

        //Calling methods
        await PastelColorPage.clickPaletteButton();
        const url = await PastelColorPage.getTitleUrl();
        console.log(`THIS IS THE URL: ${url}`);

        //Add assertion to check successfulMessage
        assert.strictEqual(url, successfulURL, 'Wrong result of Verifying the URL');
    });
});
// describe('Alert Test', function () {
//     it('Interaction with JavaScript Alert', async function () {
//         await Browser.openUrl('https://the-internet.herokuapp.com/');
        
//         //Navigate to 'JavaScript Alerts'
//         await MainPage.clickNavigationLink('JavaScript Alerts');

//         await JavaScriptAlertsPage.clickForJSAlertButton();

//         await JavaScriptAlertsPage.acceptJSAlert();
        
//         //Add assertion to check successfulMessage
//         assert.strictEqual(await JavaScriptAlertsPage.getResultText(), successfulMessage, 'Wrong result of interaction with JSAlert');
//     });
// });