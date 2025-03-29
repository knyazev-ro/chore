FROM node:18.20.7

WORKDIR /web/chore-frontend

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

EXPOSE 5173
