exports.config = {
   directConnect: false,
   
     framework: 'jasmine2',
  //  seleniumServerStartTimeout: 90000,
//seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
 
   
   multiCapabilities: [{
    browserName: 'chrome',    
    unexpectedAlertBehaviour: 'accept',
    shardTestFiles: true,
    maxInstances: 2,
   
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
     
    
   };
