# README

# Getting Started
TLDR: need to clone with new name, replace db with unique name


1. git clone git@github.com:zyzzyxis/Starter.git <NewProjectName>
2. cd <NewProjectName>
3. $ bundle
4. Rename the database to something unique, such as your new project name, in `database.yml`
  - seacrch for `StarterProject.git` and replace `NewProjectName` (be careful of name convention)
5. $ rails db:create
6. $ cd client
7. $ yarn

## TO TEST

1. rails s -p 3001
2. cd client, then yarn start

## HANDLE GITHUB (new repo)
Two ways to do this. 
1. Remove remote to github and add new one (easiest and preferred) This keeps the commit history of the shell project.
    - `git remote rm origin`
    - create a new github repo
    - `git remote add origin sshlinktorepo`
    
2. Remove git repo entirely and recreate a new repo. this will get rid of the history of any prior commits in the shell project
   - $ rm -rf .git
   - $ git init
   - $ git status
   - $ git add .
   - $ git commit -m 'init'
   - $ git remote add origin sshlinktorepo
   - $ git push origin master
