#!/bin/bash -ex
# this script runs as ec2-user

sudo yum -y update
curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
sudo yum -y install nodejs awslogs
sudo npm install -g forever@0.15.3
sudo mv /tmp/app /opt

