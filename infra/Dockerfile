FROM node:18

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


# default to port 3000 for node, and 9229 and 9230 (tests) for debug
# ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 3000

#Path to get the code and the package json
ARG PATH_TO_CODE

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app

# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node
COPY --chown=node:node ${PATH_TO_CODE}package.json ./
RUN npm i && npm cache clean --force

ENV PATH /opt/node_app/node_modules/.bin:$PATH
ENV PATH /opt/node_app/typescript/bin:$PATH

# copy in our source code last, as it changes the most
# copy in as node user, so permissions match what we need
WORKDIR /opt/node_app/app
COPY --chown=node:node ${PATH_TO_CODE} .
