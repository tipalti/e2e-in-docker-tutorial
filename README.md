# e2e-in-docker-tutorial

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Runs e2e tests
```
npm run test:e2e
```

## Docker commands

### Hosting the app

```
docker build . -t arthur
docker run -p 9000:8080 arthur
```

### Running the e2e tests
```
docker build . -f Dockerfile.e2e -t arthur-e2e 
docker run --rm arthur-e2e
```
