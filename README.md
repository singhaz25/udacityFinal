### Description
Continuous Deployment pipeline for Nodejs applications using rolling deployment strategy. Continuous Integration is managed using Jenkins, demonstrating application build step, Docker file linting, container image creation and publish built container to the Docker Hub repository. Docker container are then deployed to Kubernetes cluster created using AWS EKS. 

### Application
Create Nodejs / Express application which listenes on port 3000. It exposes two REST API endpoint 
* / 		(Brief description of project) res.send("Udacity Final project by Amarinder v2 ");
* /about 	(UdacityFinal project Jenkins BUILD_NUMBER and GIT_COMMITGIT_COMMIT number.)
	app.get('/about', function(req, res){ res.send('Udacity Final Jenkins Build @BuildNumber@ ,  Git repo version @GIT_COMMIT@');

Application is Docker containerised using 'node:10' base container image.

### Jenkins Pipeline  Steps:

	1) Inject build details (BUILD_NUMBER and GIT_COMMITGIT_COMMIT ) into Nodejs package.

	2) Hadolint is used to lint Dockerfile used to create image 

	3) Build docker image

	4) Push docker image to the Docker Hub registry

	5) Apply new container image to Kubernetes cluster  - image: amar2507/udacityfinal:@BuildNumber@

	6) Apply k8s service  using internal Load Balancing - it maps port: 80 to container port: 3000

### Jenkins server is configured to connect with Kubeernetes cluster using command line 'kubectl' binary.
Switch to jenkins user and copy Kube config file into .kube/config folder.
 ```
 $ sudo -i -u jenkins
 $ cp /home/ubuntu/.kube/config ~/.kube/config
 ```
 
