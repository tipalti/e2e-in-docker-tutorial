FROM mhart/alpine-node:14

RUN npm i -g http-server

WORKDIR /app

COPY package.json package-lock.json ./

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python3

RUN npm ci

COPY . .

RUN npm run build

# Run http-server on port 8080 to serve the files in dist
CMD ["http-server", "dist", "-p", "8080"]