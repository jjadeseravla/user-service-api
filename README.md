# User Service API

## To Run:
```node index.js```

## Dockerise:
```docker build -t user-service-api:latest .```
Run a container from the image we have just built:
```docker run --name user-api -d -p 3333:3000 user-service-api:latest```
