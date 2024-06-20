pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('hubid')
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t jchacingil/calculator-app:latest .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'docker run --rm jchacingil/calculator-app:latest npm run test'
                }
            }
        }
        
        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker push jchacingil/calculator-app:latest'
            }
        }
    }

    post {
        always {
           sh 'docker logout'
        }
    }
}
