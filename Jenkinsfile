pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
              sh 'rm -rf testpipe'
              git 'https://github.com/Yasha1Jan/Demo.git'
              sh 'npm cache clean --force'
              // sh 'npm install protractor'
             //  sh 'npm install selenium-webdriver'
              // sh 'webdriver-manager clean'
               // sh 'webdriver-manager start'
             
             
                
             }
       }
      stage('install') {
          steps {
             sh 'npm install --force Demo' 
            // sh 'npm run test'
          }
            }
         stage('Test') {
                 steps {
                   sh  'npm install protractor'            
                   // sh 'node ./node_modules/webdriver-manager/bin/webdriver-manager clean'
                    // sh  './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.25.exe'
                  sh './node_modules/protractor/bin/webdriver-manager update'
                      sh 'npm run test'
                                                
          }
  }
       
        }
        

}