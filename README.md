
# user_quiz
Educational node.js project to start with DBs, sequelize & sockets. The project has a Git branch for each step:

- user: branch with table user & commands (1st commit)
- quiz: branch adding table quiz, 1:n rel & cmds (2nd commit)
- favourite: branch adding n:m rel & cmds (3rd commit)
- migration: branch adding migrations (removes sync, 4th commit)

## Download, instalation and usage

This branch can be downloaded, installed and run as follows:

```
$ git clone -b user https://github.com/CORE-UPM/user_quiz
$ cd user_quiz
$
$ npm install
$
$ npm start     ##  or 'node main'
....
> h
  Commands (params are requested after):
    > h              ## show help
    >
    > lu | ul | u    ## users: list all
    > cu | uc        ## user: create
    > ru | ur | r    ## user: read (show age)
    > uu             ## user: update
    > du | ud        ## user: delete
    >
    > e              ## exit & return to shell
    > 
```

