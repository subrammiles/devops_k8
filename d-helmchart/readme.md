minikube start


# delete old
kubectl delete service node-app
kubectl delete deployment node-app

# install now
helm install node-app .

helm upgrade node-app .
helm template node-app .
