#!/usr/bin/env bash
export DEBIAN_FRONTEND=noninteractive
echo ">>> Updating system software (this will take a while)..."
apt-get -y update
DEBIAN_FRONTEND=noninteractive DEBIAN_PRIORITY=critical apt-get -q -y -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade
DEBIAN_FRONTEND=noninteractive DEBIAN_PRIORITY=critical apt-get -q -y -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" dist-upgrade
apt-get -y update
echo ">>> System software updated!"

echo ">>> Installing Apache..."
apt-get -y install apache2
echo ">>> Apache installed!"

echo ">>> Installing Python, Git, Vim, ect..."
sudo apt-get install -y git-core vim curl wget build-essential python-software-properties python-dev python-pip -y
echo ">>> Python, Git, Vim, ect Installed!"

echo ">>> Installing package manager and virualenv..."
sudo pip install --upgrade pip
sudo pip install --upgrade virtualenv
sudo pip install virtualenvwrapper
echo ">>> Package manager and virutalenv Installed!"

echo ">>> Installing Google App Engine..."
export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"
echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
apt-get update -y && sudo apt-get install google-cloud-sdk -y
apt-get install google-cloud-sdk-app-engine-python -y
apt-get install google-cloud-sdk-app-engine-python-extras -y
echo ">>> Google App Engine Installed!"

echo ">>> Enabling mod_rewrite..."
a2enmod rewrite
echo ">>> mod_rewrite enabled!"

echo ">>> Creating docroot directory..."
mkdir -p /var/www/chasethedeveloper
echo ">>> docroot directory created!"

echo ">>> Final restarts..."
service apache2 restart
