# G. Route HTTP traffic with Ingress

Ingress routes HTTP requests to a Service. This manifest expects the `c-simple-service` Deployment and Service to be running, plus an NGINX Ingress controller. For Minikube, enable the controller with `minikube addons enable ingress`.

Apply the Service example and then the Ingress:

```sh
kubectl apply -f c-simple-service/deployment.yaml
kubectl apply -f c-simple-service/service.yaml
kubectl apply -f g-ingress/ingress.yaml
kubectl get ingress node-app
```

The rule matches host `node-app.local`. Point that hostname at your cluster's Ingress address (for Minikube, check `minikube ip`), then visit `http://node-app.local`. To check the route without changing local DNS, run `curl -H 'Host: node-app.local' http://$(minikube ip)/` from a shell with Minikube running. Remove it with `kubectl delete -f g-ingress/`.
