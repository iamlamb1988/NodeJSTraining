# Node JS

## Using Ubuntu as root user

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

## Issues
home.esj stylesheet not recognizing relative or absolute path (from app.js) file
