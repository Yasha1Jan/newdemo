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
                     sh 'npm -g protractor' 
                     sh 'npm config set user 0'
                     sh 'node node_modules/protractor/bin/webdriver-manager update'
                     sh 'protractor-conf.js' 
                  
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

