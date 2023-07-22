FROM node:current-bullseye-slim


# Set build shell to bash, default has has some issues sometimes
SHELL ["/bin/bash", "-c"]

WORKDIR /root
COPY . .

RUN npm i \
 && npm run build

CMD npm run prod
