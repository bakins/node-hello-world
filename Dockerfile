FROM ubuntu:14.04
RUN apt-get update && \
    apt-get install -y curl

ADD . /app

RUN cd app && \
    heroku-buildpack-nodejs/bin/compile . /tmp

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
