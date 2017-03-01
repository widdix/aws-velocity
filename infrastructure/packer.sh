#!/bin/bash
# this script runs as ec2-user

sudo su
yum -y update
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs
npm install -g forever@0.15.3
mv /tmp/app /opt
