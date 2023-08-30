# Node JS
Link to NodeJS documentation [Node JS Documentation](https://nodejs.org/en/docs)

## Using Ubuntu as root user

## Next tasks
- [ ] Store usernames and hashed passwords into database
	- [ ] MariaDB (SQL)
	- [ ] Redis (NoSQL)
- [ ] Handle sensitive information via #Issue section below

## Install
1. install nodejs
```
sudo apt install nodejs
```

2. install nodejs package manager (npm)
```
sudo apt install npm
```
This command will put "package.json", "package-lock.jsaon", and "node_modules" in current directory.

3. build a project
```
npm init
```

This will prompt you with a series of questions such as project name and starting point of project. Also manipulates package.json (file similar to pom.xml that maintains dependancy versions)

## Install additional packages
Packages used in this particular app
```
npm install express
```

```
npm install ejs
```

```
npm install mariadb
```

## Install MariaDB on Ubuntu
```
sudo apt install mariadb-server
```

```
sudo mysql_secure_installation
```

```
CREATE DATABASE nodetrain;
```

Create table "users" on database "nodetrain"
```
CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	tag VARCHAR(255),
	hash VARCHAR(511),

	PRIMARY KEY(id),
	UNIQUE(tag)
);
```

Create a mysql user, grant all permissions to that user, then flush privileges.
```
CREATE USER bot@'%' IDENTIFIED BY 'secretnodejs';
```

```
 GRANT ALL PRIVILEGES ON *.* TO 'bot'@'%';
```

```
FLUSH PRIVILEGES;
```

Currently following this guide to establish mariadb connection via nodejs:
https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector

## Install Redis on Ubuntu
Comming soon!

## Issues
### 1. Password security
Password displayed in plain text accross the payload package

Solution 1: have client side hash the password then pass to server
Drawbacks: Attacker will have access to the hash and algorithm. Can conduct offline brute force attacks to validate hash.

Solution 2: Use Https instead of Http and pass plain text pass and allow server to encrypt.