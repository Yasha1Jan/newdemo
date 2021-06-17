exports.config = {
   directConnect: false,
   
     framework: 'jasmine2',
  //  seleniumServerStartTimeout: 90000,
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
     
   
   multiCapabilities: [{
    browserName: 'chrome',
    maxInstances: 1,
      seleniumServerJar: '/var/jenkins_home/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/node/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar -port 5555',
  seleniumPort: 5555,
  seleniumArgs: ['-browserTimeout=60']
   }],
   {
    spawnOptions: {
        detached: true,
        stdio: 'ignore'
    },
    drivers : drivers,
    seleniumArgs : ['-port=5555']
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
