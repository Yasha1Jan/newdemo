pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
              sh 'rm -rf testpipe'
              git 'https://github.com/Yasha1Jan/Demo.git'
              sh 'npm cache clean --force'
                                                     
             }
       }
              stage('Test') {
                 steps {
                     sh 'npm install -g protractor --version=7.0.0'     
                     sh 'protractor --version'
                     sh 'webdriver-manager update'
                     sh 'webdriver-manager shutdown'
                    // sh 'webdriver-manager start'
                   //  sh 'npm run test'
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

