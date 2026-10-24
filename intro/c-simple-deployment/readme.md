# B. Keep replicas running with a Deployment

A Deployment creates and replaces Pods to maintain the requested replica count.

```sh
kubectl apply -f b-simple-deployment/deployment.yaml
kubectl get deployment,pods
kubectl scale deployment/node-app --replicas=3
```

The manifest starts two replicas. To reach them locally, forward the Deployment's port:

```sh
kubectl port-forward deployment/node-app 3001:3000
```

Open `http://localhost:3001`. Clean up with `kubectl delete -f b-simple-deployment/deployment.yaml`.
