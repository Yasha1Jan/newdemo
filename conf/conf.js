exports.config = {
//directConnect: true,
   
     framework: 'jasmine2',
      seleniumAddress: 'http://localhost:4444/wd/hub',
   
   capabilities: {
    browserName: 'chrome',
    maxInstances: 1
   },
  
   
                  
    specs: [
       '../specs/spec.js'
      
     ]
    // "highlightDelay": 1000,
    // "localSeleniumStandaloneOpts": {
    //   "jvmArgs": [
    //     "-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.141.59.exe"
    //   ]
    // },
     
    
   };
