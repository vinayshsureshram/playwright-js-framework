pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'  // Make sure you configure NodeJS in Jenkins tools
    }

    environment {
        ALLURE_RESULTS = 'allure-results'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vinayshsureshram/playwright-js-framework.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests; allow one retry via Playwright retries, and catch exit so we still generate report
                sh 'npx playwright test || true'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report:generate'
            }
        }

        stage('Publish Allure') {
            steps {
                allure([
                  includeProperties: false,
                  jdk: '',
                  results: [[path: "${ALLURE_RESULTS}"]]
                ])
            }
        }
    }

    post {
        always {
            echo "Build result: ${currentBuild.currentResult}"
            // You can add email or Slack notifications here
        }
    }
}