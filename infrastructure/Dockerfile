FROM amazonlinux:2016.09

RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs

RUN mkdir -p /usr/src/app

ADD app /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node", "index.js" ]
