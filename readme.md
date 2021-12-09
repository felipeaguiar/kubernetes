# HA with Kubernetes

## Docker

```sh
docker build -t feliperdaguiar/node .
docker run -d --name node -p 8000:8000 feliperdaguiar/node

docker login
docker push feliperdaguiar/node
```

## Kubernetes

```sh
docker build -t feliperdaguiar/node .
docker run -d --name node -p 8000:8000 feliperdaguiar/node

docker login
docker push feliperdaguiar/node
```
