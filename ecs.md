# ECS and Kubernetes concepts

This is a simplified comparison for the Node.js examples in this repository. The resources are not exact one-to-one equivalents.

| Amazon ECS | Kubernetes | Rough relationship |
| --- | --- | --- |
| Task | Pod | A running unit containing one or more containers |
| Task definition | Container definition in a Pod template | Describes how containers should run |
| ECS service | Deployment plus Service | A Deployment maintains replicas; a Service provides stable network access |
| Container image | Container image | The packaged application and runtime |

## Main difference

An ECS service commonly manages tasks and may integrate with load balancing. In Kubernetes, these responsibilities are split across resources:

- A **Deployment** creates and replaces Pods and can scale their replica count.
- A **Service** selects matching Pods and gives them a stable network address.
- An **Ingress** can route HTTP traffic from outside the cluster to a Service, when an Ingress controller is installed.

The examples in this repository show the progression from a [Pod](a-simplepod/) to a [Deployment](b-simple-deployment/), then a [Service](c-simple-service/).
