FROM node:10

RUN mkdir -p /src

WORKDIR /src

COPY testProj/* /src/

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
