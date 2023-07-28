pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = 'my-backend-image:latest'
        DOCKER_IMAGE_WEBSITE = 'my-website-image:latest'
        DOCKER_IMAGE_QR = 'my-qr-image:latest'
    }

    stages {
        stage('Build Backend') {
            steps {
                script {
                    dir('applications/backend') {
                        sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                    }
                }
            }
        }

        stage('Build Website') {
            steps {
                script {
                    dir('applications/website') {
                        sh 'docker build -t $DOCKER_IMAGE_WEBSITE .'
                    }
                }
            }
        }

        stage('Build QR') {
            steps {
                script {
                    dir('applications/qr') {
                        sh 'docker build -t $DOCKER_IMAGE_QR .'
                    }
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                script {
                    sh "docker run -d -p 8420:80 $DOCKER_IMAGE_BACKEND"
                }
            }
        }

        stage('Deploy Website') {
            steps {
                script {
                    sh "docker run -d -p 8081:80 $DOCKER_IMAGE_WEBSITE"
                }
            }
        }

        stage('Deploy QR') {
            steps {
                script {
                    sh "docker run -d -p 8421:80 $DOCKER_IMAGE_QR"
                }
            }
        }
    }
}
