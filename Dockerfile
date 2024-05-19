FROM ruby:2.5.1

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

ENV BUNDLER_VERSION=2.1.4

RUN gem install bundler:2.1.4 && \
    bundle install

COPY . .

CMD ["./your-daemon-or-script.rb"]