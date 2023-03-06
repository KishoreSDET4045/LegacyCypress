FROM cypress/included:9.4.1

RUN mkdir -p ~/e2e
WORKDIR /e2e

COPY ./package-lock.json /e2e 
COPY ./package.json /e2e 
RUN npm ci
RUN $(npm bin)/cypress verify

COPY . /e2e

ENTRYPOINT ["sh", "./utilities/entrypoint.sh"]