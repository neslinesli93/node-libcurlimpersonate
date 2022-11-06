FROM lwthiker/curl-impersonate:0.5.2-chrome-slim-buster

ARG UID=1000
ARG GID=1000

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
  apt install -y curl python libcurl4-openssl-dev build-essential

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
  apt install -y nodejs && \
  npm install --global yarn

RUN groupadd -g "$UID" app && \
  useradd -u "$UID" -g app app && \
  mkdir -p /home/app && \
  chown -R app:app /home/app

RUN mkdir -p /build/install/lib

WORKDIR /home/app/src

COPY . .

RUN yarn

USER app
