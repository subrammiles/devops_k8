# E. Configure a Pod with a ConfigMap

The ConfigMap sets `APP_MESSAGE`, which the app displays at `/`. ConfigMaps are for non-sensitive settings.

```sh
kubectl apply -f e-configmap/
kubectl get configmap node-app-config
kubectl port-forward deployment/node-app-configured 3001:3000
```

Open `http://localhost:3001` to see the configured message. Environment variables are read when a container starts, so restart the Deployment after changing the ConfigMap:

```sh
kubectl rollout restart deployment/node-app-configured
```

Remove the resources with `kubectl delete -f e-configmap/`.
