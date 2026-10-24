# B. Keep replicas running with a Deployment

A Deployment creates and replaces Pods to maintain the requested replica count.
If you create a YAML file with kind: Deployment, Kubernetes calls that resource a Deployment when you apply it to the cluster.

```sh
kubectl apply -f c-simple-deployment/deployment.yaml
kubectl get deployment,pods
kubectl scale deployment my-node-app-deployment --replicas=3
```

The manifest starts two replicas. To reach them locally, forward the Deployment's port:

```sh
kubectl port-forward deployment/node-app 3001:3000
```

Open `http://localhost:3001`. Clean up with `kubectl delete -f c-simple-deployment/deployment.yaml`.
