pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
              sh 'rm -rf testpipe'
              git 'https://github.com/Yasha1Jan/Demo.git'
              sh 'npm cache clean --force'
              sh 'npm install -g @angular/cli'
             //  sh 'npm install selenium-webdriver'
              // sh 'webdriver-manager clean'
               // sh 'webdriver-manager start'
             
             
                
             }
       }
     
         stage('Test') {
                 steps {
                     sh 'npm install protractor --version=7.0.0'     
                     sh 'protractor --version'
                    // sh  './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.25.exe'
                     // sh 'node ./node_modules/protractor/bin/webdriver-manager update --versions.chrome=83.0.4103.116'
                 // sh 'node ./node_modules/protractor/bin/webdriver-manager update'
                      sh 'node node_modules/protractor/bin/webdriver-manager update'
                    // sh './node_modules/protractor/bin/webdriver-manager update'
                      sh 'npm run test'
                                                
          }
  }
       
        }
        post('publish reports') {
always {
script { 
    allure([ includeProperties: false, jdk: '', properties: [], reportBuildPolicy: 'ALWAYS', results: [[path: './allure-results']] ]) 
}
}
}

}

