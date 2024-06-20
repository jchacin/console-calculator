pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('jchacingil-dockerhub')
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
        
        stage('Deploy') {
            steps {
                bat 'echo "$DOCKERHUB_CREDENTIALS_PSW" | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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
