# F. Add health checks and resource settings

The readiness probe controls when a Pod receives traffic. The liveness probe restarts a container when its health endpoint fails. Requests help Kubernetes schedule the Pod; limits cap its CPU and memory use.

```sh
kubectl apply -f f-health-checks/
kubectl rollout status deployment/node-app-health
kubectl describe deployment node-app-health
kubectl port-forward deployment/node-app-health 3001:3000
```

Open `http://localhost:3001`; inspect `/healthz` and `/readyz` directly if desired. Remove the Deployment with `kubectl delete -f f-health-checks/`.
