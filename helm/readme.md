kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

#
kubectl get pods,svc
kubectl logs deployment/node-app
minikube service node-app --url
