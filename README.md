
# user_quiz
Educational node.js project to start with DBs, sequelize & sockets. The project has a Git branch for each step:

- user: branch with table user & commands (1st commit)
- quiz: branch adding table quiz, 1:n rel & cmds (2nd commit)
- favourite: branch adding n:m rel & cmds (3rd commit)
- migration: branch adding migrations (removes sync, 4th commit)

## Download, instalation and usage

This branch can be downloaded, installed and run as follows:

```
$ git clone -b migration https://github.com/CORE-UPM/user_quiz
$ cd user_quiz
$
$ npm install
$
$ npm run migrate
$
$ npm run seed
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
    > lq | ql | q    ## quizzes: list all
    > cq | qc        ## quiz: create
    > tq | qt | t    ## quiz: test (play)
    > uq | qu        ## quiz: update
    > dq | qd        ## quiz: delete
    >
    > lf | fl | f    ## favourites: list all
    > cf | fc        ## favourite: create
    > df | fd        ## favourite: delete
    >
    > e              ## exit & return to shell
    > 
```

