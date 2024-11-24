# This Project is using Basic Nodejs Project including MongoDB as the Database.

Author # DJ

I have done this Project on my Local system using "Hyper-V" Virtual machine and the OS I used is "Alma-Linux".

[git@git-node ~]$ sudo yum update


[git@git-node ~]$ sudo yum install wget vim tar unzip


[git@git-node ~]$ sudo yum install git


[git@git-node ~]$ sudo yum groupinstall 'Server with GUI'
Last metadata expiration check: 0:54:13 ago on Tue Nov 19 12:47:28 2024.
Dependencies resolved.


[git@git-node ~]$ sudo systemctl set-default graphical.target
Removed "/etc/systemd/system/default.target".
Created symlink /etc/systemd/system/default.target → /usr/lib/systemd/system/graphical.target.


[git@git-node ~]$ git --version
git version 2.43.5


[git@git-node ~]$ sudo dnf install curl dnf-plugins-core


[git@git-node ~]$ dnf module list nodejs
                                                           15 kB/s |  13 kB     00:00
Last metadata expiration check: 0:00:01 ago on Tue Nov 19 14:17:58 2024.
AlmaLinux 9 - AppStream
Name                          Stream                        Profiles                                                     Summary
nodejs                        18                            common [d], development, minimal, s2i                        Javascript runtime
nodejs                        20                            common [d], development, minimal, s2i                        Javascript runtime
nodejs                        22                            common [d], development, minimal, s2i                        Javascript runtime


[git@git-node ~]$ sudo dnf module install nodejs:20


[git@git-node ~]$ node -v
v20.17.0


[git@git-node ~]$ npm -v
10.8.2

[git@git-node ~]$ sudo dnf makecache --refresh

[git@git-node ~]$ sudo dnf groupinstall "Development Tools"


[git@git-node ~]$ printf "[vscode]\nname=packages.microsoft.com\nbaseurl=https://packages.microsoft.com/
yumrepos/vscode/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://
packages.microsoft.com/keys/microsoft.asc\nmetadata_expire=1h" | sudo tee -a /etc/yum.repos.d/vscode.repo

[git@git-node ~]$ sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc


[git@git-node ~]$ sudo dnf update
packages.microsoft.com                                                                                                                              944  B/s | 481  B     00:00
packages.microsoft.com                                                                                                                               13 kB/s | 983  B     00:00
Importing GPG key 0xBE1229CF:


[git@git-node ~]$ sudo dnf install code

[git@git-node ~]$ code

[git@git-node ~]$ pwd
/home/git


[git@git-node ~]$ mkdir my-node-app


[git@git-node my-node-app]$ pwd
/home/git/my-node-app


[git@git-node my-node-app]$ npm init -y


[git@git-node my-node-app]$ npm install express


[git@git-node my-node-app]$ npm install --save-dev nodemon


[git@git-node my-node-app]$ npm install --save-dev mocha chai


[git@git-node my-node-app]$ ll -alt
total 44
-rw-r--r--.  1 git git 29989 Nov 19 14:54 package-lock.json
-rw-r--r--.  1 git git   355 Nov 19 14:54 package.json
drwxr-xr-x. 70 git git  4096 Nov 19 14:54 node_modules

[git@git-node src]$ touch server.js


[git@git-node src]$ mkdir public

[git@git-node src]$ touch public/index.hmtl

[git@git-node src]$ touch public/style.css


[git@git-node ~]$ sudo dnf -y update


[git@git-node ~]$ sudo vim /etc/yum.repos.d/mongodb.repo


[git@git-node ~]$ sudo dnf update
MongoDB Repository                                                                                                                 69 kB/s |  68 kB     00:00
Dependencies resolved.


[git@git-node ~]$ sudo dnf repolist


[git@git-node ~]$ sudo dnf repolist mongodb-org-6.0
repo id                                                                     repo name                                                                      status
mongodb-org-6.0                                                             MongoDB Repository                                                             enabled


[git@git-node ~]$ sudo dnf -y install mongodb-org
Last metadata expiration check: 0:00:32 ago on Fri Nov 22 09:10:14 2024.
Dependencies resolved.


[git@git-node ~]$ sudo systemctl start mongod


[git@git-node ~]$ sudo systemctl enable mongod


[git@git-node ~]$ sudo systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/usr/lib/systemd/system/mongod.service; enabled; preset: disabled)
     Active: active (running) since Fri 2024-11-22 09:12:04 IST; 11s ago


[git@git-node my-node-website]$ sudo firewall-cmd --permanent --add-port=27017/tcp
success


[git@git-node my-node-website]$ sudo firewall-cmd --reload
success


[git@git-node my-node-website]$ npm install mongodb


[git@git-node my-node-website]$ touch db.js


[git@git-node my-node-website]$ npm start

> my-node-website@1.0.0 start
> nodemon server.js
Server is running on http://localhost:3000
Connected to MongoDB


[git@git-node ~]$ npm install --save-dev jest


[git@git-node ~]$ mkdir test


[git@git-node ~]$ touch test/server.test.js


[git@git-node ~]$ npm test


[git@git-node ~]$ npm start