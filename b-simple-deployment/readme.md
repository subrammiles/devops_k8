# Previous step
Port forward:
kubectl port-forward pod/node-app-pod 3001:3000

You already created a pod and exposed the port

#
Use Deployment (Like ECS Service)

Pods alone are not practical. Use Deployment.

Create deployment.yaml

kubectl apply -f deployment.yaml

Check:
kubectl get pods

👉 You’ll see 2 pods running