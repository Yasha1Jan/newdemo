pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
              sh 'rm -rf mynewpipeline'
              git 'https://github.com/Yasha1Jan/Demo.git'
              sh 'npm cache clean --force'
                                                     
             }
       }
              stage('Test') {
                 steps {
                     sh 'npm install --latest'     
                     sh 'npm install -g protractor --latest' 
                     sh 'webdriver-manager update'
                  
                    
                  // sh 'webdriver-manager start --seleniumPort 12345'
                     sh 'protractor test/conf.js'
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

