#!/bin/bash
# this script runs as ec2-user

sudo yum -y update
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum -y install nodejs
# TODO get app and place into /opt/app
sudo npm install -g forever@0.15.3
