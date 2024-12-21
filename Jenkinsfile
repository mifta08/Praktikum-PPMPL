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
            echo 'Pipeline finished successfully!',
            emailext subject: 'Build Succeeded', body: 'The build succeeded!',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
        failure {
            echo 'Pipeline failed!',
            emailext subject: 'Build Failed', body: 'The build failed.',
            recipientProviders: [[$class: 'DevelopersRecipientProvider']]
        }
    }

}