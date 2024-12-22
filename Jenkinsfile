pipeline {
    agent any

    environment {
        CI = 'true'
        VERCEL_TOKEN = credentials('VERCEL_TOKEN')
        VERCEL_ORG_ID = credentials('VERCEL_ORG_ID')
        VERCEL_PROJECT_ID = credentials('VERCEL_PROJECT_ID')
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
        stage('Run Integration Tests') {
            steps {
                bat 'npm run integration-test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'prak8'  // Deploy hanya jika branch yang digunakan adalah main
            }
            steps {
                    // Deploy to Vercel using Vercel CLI
                    bat 'npm install -g vercel'
                    bat 'vercel --token $VERCEL_TOKEN --prod'
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