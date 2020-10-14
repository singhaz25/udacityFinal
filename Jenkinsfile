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
		 stage('DockerLint') {
             steps {
                 sh 'echo "Checking DockerFile"'
                 sh 'hadolint Dockerfile'
             }
         }
		 stage('BuildDocker') {
             steps {
                 sh 'echo "Building Docker Image"'
                 sh "docker build --tag=udacityfinal:${BUILD_NUMBER} ."
             }
         }
		 stage('Docker hub upload') {
             steps {
					sh "docker tag udacityfinal:${BUILD_NUMBER} amar2507/udacityfinal:${BUILD_NUMBER}"
                    withDockerRegistry([ credentialsId: "DockerHubCredentials", url: "" ]) {
						sh 'docker push amar2507/udacityfinal:${BUILD_NUMBER}'

             }
         }
		}
		 stage('Deploy on kubernetes') {
            steps {
                kubernetesDeploy(
                    kubeconfigId: 'k8sconfig',
                    configs: 'kubernetes/deployment.yml',
                    enableConfigSubstitution: true
                )
            }
		}
	}  
}	

