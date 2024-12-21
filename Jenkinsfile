pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('checkout') {
            steps {
                git branch: 'prak8', url: 'https://github.com/mifta08/Praktikum-PPMPL.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                bat 'npm test'
            }
        }

        // TODO - Tambahkan unit test baru

        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
        }
    }

    post {
        success {
            emailext(
                to: 'rizqhaamifta@gmail.com',
                subject: 'Build Succeeded',
                body: 'The build succeeded!',
                attachLog: true
            )
        }
        failure {
            emailext(
                to: 'rizqhaamifta@gmail.com',
                subject: 'Build Failed',
                body: 'The build failed. Please check the logs.',
                attachLog: true
            )
        }
    }

}