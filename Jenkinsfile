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
                bat 'docker login -u jchacingil -p dckr_pat_veYDtBxLC2ZFOWn7gw6r1zck0pE'
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
