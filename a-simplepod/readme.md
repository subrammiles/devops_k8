# A. Run one Pod

This is the smallest Kubernetes example. Build and load the image by following the [root README](../README.md#build-the-app-image), then apply the Pod:

```sh
kubectl apply -f a-simplepod/pod.yaml
kubectl get pod node-app-pod
kubectl port-forward pod/node-app-pod 3001:3000
```

Open `http://localhost:3001`. Remove the Pod with `kubectl delete -f a-simplepod/pod.yaml`.
