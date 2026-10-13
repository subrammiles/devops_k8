# Local setup

These examples use Docker, `kubectl`, and a Kubernetes cluster. Minikube is the suggested local cluster; Helm is needed only for the chart, and an Ingress controller is needed only for the Ingress example.

## Check the tools

```sh
docker --version
kubectl version --client
minikube version
helm version
```

`kubeadm` and `kubelet` are cluster administration components; they are not needed to follow this local learning path.

## Start Minikube and prepare the image

```sh
minikube start
docker build -t node-app:1.0 -f nodejs/dockerfile nodejs
minikube image load node-app:1.0
```

The Docker image build and local run instructions are in the [project README](README.md#build-the-app-image).

## Check cluster access

```sh
kubectl cluster-info
kubectl get nodes
```

For Ingress, enable Minikube's NGINX controller:

```sh
minikube addons enable ingress
```
