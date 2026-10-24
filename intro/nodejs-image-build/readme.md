# Build from the repository root
docker build -t my-node-app:1.0 -f nodejs-image-build/dockerfile nodejs

docker image ls
if you wan to remove 
docker rmi my-node-app:1.0

# Run locally
docker run --rm -p 3000:3000 my-node-app:1.0
 to stop 
 docker stop <container_id>