FROM node:23-slim

WORKDIR /app

# Copie tout depuis le sous-dossier time-api/
COPY ./time-api/package*.json ./
RUN npm install

COPY ./time-api ./

EXPOSE 3000
CMD ["node", "index.js"]