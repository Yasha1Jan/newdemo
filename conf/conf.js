exports.config = {
   // directConnect: true,
   
     framework: 'jasmine2',
    seleniumServerStartTimeout: 90000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
     
   
     //capabilities: {
    ///   'browserName': 'chrome'
    // },
    multiCapabilities: [{
      browserName: 'chrome',
      ACCEPT_SSL_CERTS: true,
      trustAllSSLCertificates: true,
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        w3c: false,
      },       
      unexpectedAlertBehaviour: 'accept',
      shardTestFiles: true,
      maxInstances: 1,
      chromeOptions: {
        w3c: false,     
        excludeSwitches: ['enable-automation'],
        useAutomationExtension: false,
        prefs: {
          download: {
            prompt_for_download: false,
            directory_upgrade: true,         
          },
          credentials_enable_service: false,
          profile: {
            password_manager_enabled: false,
          },
        },
        args: [
          '--no-sandbox',
          '--ignore-ssl-errors',
          '--disable-gpu',
          '--window-size=1280,1440',
          '--serve_after_close',
          '--disable-dev-shm-usage',
          '--ignore-certificate-errors'
        ],
      },
    }],               
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
