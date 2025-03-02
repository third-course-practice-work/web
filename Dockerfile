FROM node:20.12.2-buster AS build

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

# leave only the production code without development dependencies 
FROM node:20.12.2-buster AS production

WORKDIR /public 

COPY --from=build /app/build /public