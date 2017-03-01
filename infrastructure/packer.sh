#!/bin/bash
# this script runs as ec2-user

sudo yum -y update
sudo curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
sudo yum -y install nodejs
sudo npm install -g forever@0.15.3
sudo mv /tmp/app /opt
