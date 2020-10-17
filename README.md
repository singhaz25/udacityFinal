Description
Continuous Deployment pipeline for Nodejs applications using rolling deployment strategy. Continuous Integration is managed using Jenkins, demonstrating application build step, Docker file linting, container image creation and publish built container to the Docker Hub repository. Docker container are then deployed to Kubernetes cluster created using AWS EKS. 

Steps:
	Create Nodejs / Express application which listenes on port 80. It exposes two API endpoint a) Brief description of project b) UdacityFinal project Jenkins build number and build date. 
	Nodejs application is then containerised using 'node:10' base container image.
	Hadolint is used to lint Dockerfile used to create image 
	Build docker image
	Push docker image to the registry
	Apply k8s deployment (yaml)
	Application deployment
	Load balancer service
	Update k8s deployment with specific docker image tag
	Wait for the pods update to finish
	Service deployment using internal Load Balancing

