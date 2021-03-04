FROM mhart/alpine-node:14

WORKDIR /app

COPY package.json package-lock.json ./

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python3

RUN npm ci

COPY . .

RUN npm run build

# Run the npm start command to host the server
CMD ["npm", "start"]