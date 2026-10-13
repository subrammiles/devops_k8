# Kubernetes learning examples

A small, hands-on path from a containerized Node.js app to common Kubernetes resources. The examples use the same app image (`node-app:1.0`) and listen on container port `3000`.

```text
Developer -> Application image -> Kubernetes cluster
                                  ├── Pod 1: Node.js app
                                  └── Pod 2: Node.js app
```

## Prerequisites

- Docker
- `kubectl`
- A Kubernetes cluster. The instructions below use Minikube.
- Helm for the chart example
- An Ingress controller for the Ingress example

See [setup.md](setup.md) for installation checks and [ecs.md](ecs.md) for an ECS-to-Kubernetes comparison.

## Build the app image

From the repository root:

```sh
docker build -t node-app:1.0 -f nodejs/dockerfile nodejs
```

To run it locally:

```sh
docker run --rm -p 3000:3000 node-app:1.0
```

Open `http://localhost:3000`. The app also serves `/healthz` and `/readyz` for the probe example.

For Minikube, start the cluster and load the local image:

```sh
minikube start
minikube image load node-app:1.0
```

## Learning path

| Folder | Resource | What it demonstrates |
| --- | --- | --- |
| [a-simplepod](a-simplepod/) | Pod | Run one container and use port forwarding |
| [b-simple-deployment](b-simple-deployment/) | Deployment | Keep two replicas running |
| [c-simple-service](c-simple-service/) | Service | Give the replicas stable network access |
| [d-helmchart](d-helmchart/) | Helm chart | Package configurable Deployments and Services |
| [e-configmap](e-configmap/) | ConfigMap | Inject non-sensitive configuration into a Pod |
| [f-health-checks](f-health-checks/) | Probes and resources | Check app health and set CPU/memory requests and limits |
| [g-ingress](g-ingress/) | Ingress | Route HTTP traffic to a Service |

Apply an example from the repository root with `kubectl apply -f <folder>/`. For example:

```sh
kubectl apply -f b-simple-deployment/
kubectl get deployments,pods
```

Use `kubectl delete -f <folder>/` to remove resources created by a manifest-based example. Manage the Helm example with `helm install`, `helm upgrade`, and `helm uninstall` as described in its README.

## Access the app

For a Pod, Deployment, or ClusterIP Service, use port forwarding:

```sh
kubectl port-forward deployment/node-app 3001:3000
```

Then open `http://localhost:3001`. The Service example uses a NodePort and can also be opened with `minikube service node-app`.

## Notes

- The examples are independent; use one at a time or clean up the previous example first if names overlap.
- Local images are configured with `IfNotPresent`; load the image into Minikube before applying manifests.
- The Ingress resource requires an Ingress controller. On Minikube, enable one with `minikube addons enable ingress`.
