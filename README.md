# Node JS

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
'''
npm install express
'''

'''
npm install ejs
'''

## Issues
### 1. Password security
Password displayed in plain text accross the payload package

Solution 1: have client side hash the password then pass to server
Drawbacks: Attacker will have access to the hash and algorithm. Can conduct offline brute force attacks to validate hash.

Solution 2: Use Https instead of Http and pass plain text pass and allow server to encrypt.