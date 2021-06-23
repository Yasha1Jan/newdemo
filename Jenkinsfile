pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
              sh 'rm -rf mynewpipeline'
              git 'https://github.com/Yasha1Jan/newdemo.git'
              sh 'npm cache clean --force'
                                                     
             }
       }
              stage('Test') {
                 steps {
                     sh 'npm install'    
                    
                     sh 'npm config set user 0'
                     sh 'npm config set unsafe-perm true'
                   sh 'npm run test' 
                    // sh 'npm install -g chromedriver'
                  //   sh 'webdriver-manager update'
                  
                    
                  // sh 'webdriver-manager start --seleniumPort 12345'
                   //  sh 'protractor conf/conf.js'
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

