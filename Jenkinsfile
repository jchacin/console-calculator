pipeline {
    agent any

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
                    bat 'docker run --rm jchacingil/calculator-app:latest npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jchacingil-dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        bat 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
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
