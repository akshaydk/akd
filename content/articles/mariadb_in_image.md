---
name: 'mariadb_in_image'
title:  "Installing MariaDB to an existing Docker Image"
date:   2020-02-01 13:00:00 +0530
categories: Docker, MySQL, MariaDB
description: |
  Need db in the container where your code resides? Not a best practice but we had to do.
---


We had a requirement of installing MariaDB to an existing docker image because
the test cases had to run within the same image and the rails framework needs a test database to 
run the tests. 

After installing the MariaDB using yum, we tried to start the sql server within the container, it threw

```shell
ERROR 2002 (HY000): Cant connect to local MySQL server through socket /var/lib/mysql/mysql.sock
```  

Excerpts of step from the [article](https://dba.stackexchange.com/questions/185498/centos-container-installing-mariadb-server): 
- start the service manually and 
- ensure that you have started it such that it will stay in the foreground (because a Docker container exits when the foreground process exits or puts itself into the background).

Inside a docker container, nothing will run  by default. The following code when executed within the container will start the server.

```shell
/usr/libexec/mariadb-prepare-db-dir mariadb.service 

/usr/bin/mysqld_safe --basedir=/usr & 
```

We added these lines to our Dockerfile and every time sql-server was started during the boot up.







