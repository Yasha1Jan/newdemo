pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
           steps {
             // sh 'rm -rf mynewpipeline'
              git 'https://github.com/Yasha1Jan/newdemo.git'
             // sh 'npm cache clean --force'
              // sh 'npm install protractor'
             //  sh 'npm install selenium-webdriver'
              // sh 'webdriver-manager clean'
               // sh 'webdriver-manager start'
              sh 'sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose'
                sh 'docker-compose -f docker-compose.yml up --build --abort-on-container-exit'
           }
        }
    }
}
             
             
      
