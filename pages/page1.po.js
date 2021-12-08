const { browser } = require("protractor");

const Homepage = (function () {

    const firstElement = element(by.model('first'));
    const secondElement = element(by.model('second'));
    const goBttn = element(by.id('gobutton'));
    const result = element(by.css('h2'));
    return {

        getURL: function () {
            browser.sleep(10000);
            browser.get('http://juliemr.github.io/protractor-demo/', '200000');
        },

        goButton: async function () {
            await firstElement.sendKeys('1');
            await secondElement.sendKeys('2');
            await goBttn.click();
            await browser.sleep(5000);
        },
        getCount: function () {
            return result.getText();
          },
    }
})();
module.exports = Homepage;
