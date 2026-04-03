| ECS / Fargate   | Kubernetes           | What it means                            |
| --------------- | -------------------- | ---------------------------------------- |
| Task            | Pod                  | Smallest deployable unit (1+ containers) |
| Container       | Container            | Same concept                             |
| Task Definition | Pod Spec             | Blueprint of how to run containers       |
| Service         | Deployment / Service | Keeps app running + exposes it           |


ECS Service vs Kubernetes Deployment
ECS Service:
Keeps tasks running
Handles scaling
Load balancing
Kubernetes equivalent:
Feature	Kubernetes Resource
Keep pods running	Deployment
Scaling	Deployment
Networking	Service

👉 In K8s, one ECS Service = 2 resources

Deployment (manages pods)
Service (exposes them)