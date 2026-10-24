
A sidecar is a helper container that runs alongside your main application container in the same Kubernetes Pod.
The name comes from a motorcycle sidecar — a small compartment attached to a motorcycle that travels alongside it. 🏍️

What can a sidecar do?
Sidecar purpose	What it does
Logging	Collects application logs and forwards them to a logging system.
Monitoring	Collects metrics about the application.
Proxy	Handles or forwards network traffic.
Security	Helps manage certificates or secure communication.
Configuration	Retrieves configuration and makes it available to the main application.


A sidecar is a general architectural pattern. It doesn't have to be a particular technology or programming language.

A Kubernetes Pod can contain one or more containers. Let's build a practical Node.js example to test this on your Ubuntu machine using Minikube.

We'll create two Node.js containers inside a single Pod:
1. Container 1 — Web App: Returns a message on port 3000.
2. Container 2 — Sidecar: Returns a message on port 3001.
Both containers will run in the same Pod and share its network namespace. This means they can communicate using localhost.

One important rule: because they share the same network namespace, each container must listen on a different port. Otherwise, they would conflict.


#
Build the image
docker build -t multi-container-demo:1.0 .

 Load the image into Minikube
 minikube image load multi-container-demo:1.0


 #

 Understand the important part
Notice that we have two entries under containers:
containers:
  - name: web-app
    image: multi-container-demo:1.0

  - name: sidecar
    image: multi-container-demo:1.0

Both containers use the same image, but they have different names and environment variables.

One Pod, two containers, one shared network namespace.

#
kubectl apply -f multi-container-pod.yaml

Check its status:
kubectl get pods


Access both containers from Ubuntu
Start port forwarding:
kubectl port-forward pod/two-node-containers 3000:3000 3001:3001

Keep this terminal open.

This maps:
Ubuntu port	Container port	Purpose
3000	3000	Web App
3001	3001	Sidecar


Open another terminal and test the Web App:
curl http://localhost:3000

Test communication between containers
Now comes the interesting part!

Run:
curl http://localhost:3000/call-sidecar

Expected response:
Web App received: Hello from the Sidecar. Listening on port 3001

What happened?
1. Your Ubuntu machine sent a request to port 3000.
2. Kubernetes forwarded it to port 3000 in the Pod.
3. The Web App container received the request.
4. The Web App called http://127.0.0.1:3001.
5. The Sidecar container received the request on port 3001.
6. The Sidecar returned its response to the Web App.
7. The Web App returned that response to your Ubuntu machine.
The communication looks like this:

              Ubuntu Machine
                     |
              Port-forwarding
                     |
                     v
        +---------------------------+
        |       Kubernetes Pod      |
        |                           |
        |  +---------------------+  |
        |  | Web App Container   |  |
        |  | Port 3000           |  |
        |  +----------+----------+  |
        |             |             |
        |             | localhost   |
        |             | :3001       |
        |             v             |
        |  +---------------------+  |
        |  | Sidecar Container   |  |
        |  | Port 3001           |  |
        |  +---------------------+  |
        |                           |
        +---------------------------+



Both containers share the Pod's IP address, so they can communicate through localhost using different ports.
Step 8: Verify that these are two containers in one Pod
Run:
kubectl get pod two-node-containers

Then:
kubectl get pod two-node-containers \
  -o jsonpath='{.status.containerStatuses[*].name}'

To see the logs from the Web App:
kubectl logs two-node-containers -c web-app

To see the logs from the Sidecar:
kubectl logs two-node-containers -c sidecar

Notice the -c option: it specifies which container's logs you want.


Clean up when you're finished
Stop port forwarding with Ctrl + C, then delete the Pod:
kubectl delete pod two-node-containers