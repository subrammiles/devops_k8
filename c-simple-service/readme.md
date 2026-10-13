# C. Give Pods a stable address with a Service

This folder applies a two-replica Deployment and a NodePort Service. The Service selects Pods using the `app: node-app` label.

```sh
kubectl apply -f c-simple-service/deployment.yaml
kubectl apply -f c-simple-service/service.yaml
kubectl get deployment,pods,service
minikube service node-app
```

The NodePort is `30007`; `minikube service` opens the reachable URL for your cluster. For other clusters, use the cluster's node address and port `30007` if NodePort access is enabled. Clean up both resources with `kubectl delete -f c-simple-service/`.
