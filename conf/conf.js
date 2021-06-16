exports.config = {
    //directConnect: true,
   
     framework: 'jasmine2',
    seleniumServerStartTimeout: 90000,
   // seleniumAddress: 'http://localhost:4444/wd/hub',
     
   
     //capabilities: {
    ///   'browserName': 'chrome'
    // },
    WebDriver driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capability);
    capabilities: {'browserName': 'chrome'},                     
    specs: [
       '../specs/spec.js'
      
     ],
     onPrepare: async () => {
     let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'reports/allure-results'
    }));
}
   };
