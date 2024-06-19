pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t jchacingil/calculator-app:${BUILD_NUMBER} .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'docker run --rm jchacingil/calculator-app:${BUILD_NUMBER} npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jchacingil-dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        sh 'docker push jchacingil/calculator-app:${BUILD_NUMBER}'
                    }
                }
            }
        }
    }

    post {
        always {
           sh 'docker logout'
        }
    }
}
