pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = 'my-backend-image:latest'
        DOCKER_IMAGE_WEBSITE = 'my-website-image:latest'
        DOCKER_IMAGE_QR = 'my-qr-image:latest'
    }

    stages {
        stage('Build and Push Backend') {
            steps {
                script {
                    dir('applications/backend') {
                        sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                        sh 'docker push $DOCKER_IMAGE_BACKEND'
                    }
                }
            }
        }

        stage('Build and Push Website') {
            steps {
                script {
                    dir('applications/website') {
                        sh 'docker build -t $DOCKER_IMAGE_WEBSITE .'
                        sh 'docker push $DOCKER_IMAGE_WEBSITE'
                    }
                }
            }
        }

        stage('Build and Push QR') {
            steps {
                script {
                    dir('applications/qr') {
                        sh 'docker build -t $DOCKER_IMAGE_QR .'
                        sh 'docker push $DOCKER_IMAGE_QR'
                    }
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                script {
                    sh "docker run -d -p 8420:8420 $DOCKER_IMAGE_BACKEND"
                }
            }
        }

        stage('Deploy Website') {
            steps {
                script {
                    sh "docker run -d -p 80:80 $DOCKER_IMAGE_WEBSITE"
                }
            }
        }

        stage('Deploy QR') {
            steps {
                script {
                    sh "docker run -d -p 8420:8420 $DOCKER_IMAGE_QR"
                }
            }
        }
    }
}
