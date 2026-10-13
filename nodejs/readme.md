# Build from the repository root
docker build -t node-app:1.0 -f nodejs/dockerfile nodejs


# Run locally
docker run --rm -p 3000:3000 node-app:1.0
