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
                script {
                    withCredentials([usernamePassword(credentialsId: 'jchacingil-dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        bat 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        bat 'docker push jchacingil/calculator-app:latest'
                    }
                }
            }
        }
    }

    post {
        always {
           bat 'docker logout'
        }
    }
}
