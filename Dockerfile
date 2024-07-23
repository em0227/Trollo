FROM node:16.0.0

WORKDIR /usr/src/app

COPY . .

RUN npm install  --frozen-lockfile

ENV BUNDLER_VERSION=2.1.4

RUN \
  apt-get update && apt-get install -y --no-install-recommends --no-install-suggests sudo postgresql curl bzip2 build-essential libssl-dev libreadline-dev zlib1g-dev && \
  rm -rf /var/lib/apt/lists/* && \
  curl -L https://github.com/sstephenson/ruby-build/archive/v20180329.tar.gz | tar -zxvf - -C /tmp/ && \
  cd /tmp/ruby-build-* && ./install.sh && cd / && \
  ruby-build -v 2.5.1 /usr/local && rm -rfv /tmp/ruby-build-*


RUN gem install bundler:2.1.4 --no-rdoc --no-ri && \
    bundle install

EXPOSE 3000

# CMD ["bundle", "exec", "rails", "server"]