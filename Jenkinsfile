pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('hubid')
    }

    stages {
        stage('Build') {
            steps {
                script {
                    bat 'docker build -t jchacingil/calculator-app:latest .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    bat 'docker run --rm jchacingil/calculator-app:latest npm run test'
                }
            }
        }
        
        stage('Login') {
            steps {
                bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker push jchacingil/calculator-app:latest'
            }
        }
    }

    post {
        always {
           bat 'docker logout'
        }
    }
}
