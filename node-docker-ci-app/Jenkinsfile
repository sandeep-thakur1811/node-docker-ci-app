pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/sandeep-thakur1811/node-docker-ci-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("node-docker-ci-app")
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                sh "docker rm -f node-app || true"
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d --name node-app -p 3000:3000 node-docker-ci-app"
            }
        }
    }
}

