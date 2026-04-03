Expose Using Service

Pods are dynamic → need stable access.

Create service.yaml

Apply:
kubectl apply -f service.yaml
Access app:
minikube service node-app-service

OR manually:

http://<node-ip>:30007