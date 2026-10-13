# D. Package the app with Helm

The chart renders a Deployment and a ClusterIP Service. Build and load `node-app:1.0` first as described in the [root README](../README.md#build-the-app-image).

Run from this directory:

```sh
helm install node-app .
helm status node-app
kubectl port-forward service/node-app 3001:80
```

Open `http://localhost:3001`. Override chart values, for example, `helm upgrade node-app . --set replicaCount=3`. Remove the release with `helm uninstall node-app`.
