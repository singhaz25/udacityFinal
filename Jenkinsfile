pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Hello World AP"'
                 sh '''
                     echo "Multiline shell steps works too"
                     ls -lah
                 '''
             }
         }
		 stage('BuildDocker') {
             steps {
                 sh 'echo "Building Docker Image"'
                 sh 'docker build --tag=udacityfinal .'
             }
         }

		}
	}         

