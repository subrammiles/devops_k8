
# 1 Build docker image


docker build -t node-k8s-app .

Run the app and Check if the app is working fine 
docker run -p 3000:3000 node-k8s-app

Note: If you are using th emini cube
eval $(minikube docker-env)

# 2
Now got to Kubernetes
Create pod.yaml

Apply it:
kubectl apply -f pod.yaml

# 3
Check:
kubectl get pods

# Step 4: Access the Pod

Pods are not directly accessible externally.

Port forward:
kubectl port-forward pod/node-app-pod 3001:3000


Now open:

http://localhost:3001

# 5 If you want to delete the  pod
kubectl delete pod node-app-pod
