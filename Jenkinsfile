pipeline {
     agent any
     stages {
         stage('Build package') {
             steps {
                 sh 'echo "Inject build details into node package and Kubernetes deployment script "'
                 sh '''
                     sed -i -e "s/@BuildNumber@/${BUILD_NUMBER}/; s/@GIT_COMMIT@/${GIT_COMMIT}/;" testProj/index.js
					 sed -i -e "s/@BuildNumber@/${BUILD_NUMBER}/;" kubernetes/deployment.yaml
					 cat testProj/index.js
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
		/**
		
		Kubernetes deployment requires Jenkins slave configured -https://issues.jenkins-ci.org/browse/JENKINS-62954
		 stage('Deploy on kubernetes using plugin') {
            steps {
                kubernetesDeploy(
                    kubeconfigId: 'k8sconfig',
                    configs: 'kubernetes /deployment.yaml',
                    enableConfigSubstitution: true
                )
            }
		}*/
		
		stage('Deploy Kubernetes with kubectl installed on jenkins servers') {
            steps {
				
				sh "kubectl apply -f kubernetes/deployment.yaml"
				sh "kubectl apply -f kubernetes/service.yaml"
            }
		} 
	} 
}	

