FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json ./client/
RUN npm install --prefix client --omit=dev

COPY server/package*.json ./server/
RUN npm install --prefix server --omit=dev

COPY client/ client/

# Fix missing babel peer dependency (CRA bug)
RUN npm install --prefix client @babel/plugin-proposal-private-property-in-object --save-dev

RUN npm run build --prefix client

COPY server/ server/

USER node

CMD ["npm", "start", "--prefix", "server"]

EXPOSE 8000