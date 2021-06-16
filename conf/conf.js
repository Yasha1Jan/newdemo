exports.config = {
   directConnect: true,
   
     framework: 'jasmine2',
  //  seleniumServerStartTimeout: 90000,
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
     
   
     capabilities: {
       'browserName': 'chrome'
     },
   
                  
    specs: [
       '../specs/spec.js'
      
     ],
     "highlightDelay": 1000,
     "localSeleniumStandaloneOpts": {
       "jvmArgs": [
         "-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.59.exe"
       ]
     },
     
     onPrepare: async () => {
      
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
     let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'reports/allure-results'
    }));
}
   };
