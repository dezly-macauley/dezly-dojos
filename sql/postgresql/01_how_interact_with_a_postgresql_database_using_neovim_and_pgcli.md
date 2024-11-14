Login as the PostgreSQL default user
```
pgcli -U "postgres" -d "postgres" -h "localhost" -p "5432"
```
_______________________________________________________________________________

```
CREATE USER "dezly-macauley" WITH LOGIN CREATEDB";
```

"dezly-macauley" is a user with the permission to login and create databases

To confirm that "dezly-macauley" has been created

```
\du
```
_______________________________________________________________________________

### Create a database

```
CREATE DATABASE "demo" WITH OWNER "dezly-macauley";
```

Login to the database
```
pgcli -U "dezly-macauley" -d "demo" -h "localhost" -p "5432"
```

To confirm that it was created 

```
\l
```

_______________________________________________________________________________

### Import the sql file with the data


The next thing you need to do is to logout of the PostgreSQL prompt:

```
\q
```

Then make sure that you are in the directory that contains the `.sql` file:
Then run this command ():
```
psql -U your_username -d name_of_database -f file-path/name_of_file.sql
```

E.g. 

psql -d "demo" -U "dezly-macauley" -f ./demo.sql

_______________________________________________________________________________

### Login with pgcli as your user

```
pgcli -U "dezly-macauley" -d "demo" -h "localhost" -p "5432"
```
_______________________________________________________________________________

### Open Neovim:

Open vim-dadbod user interface by pressing:

```
:DBUI
```

Click `add connection`

postgres://dezly-macauley@localhost:5432/demo

It should look like this:
```
▾ demo ✓
    + New query
    ▸ Saved queries (0)
    ▾ Schemas (3)
        ▸ information_schema (62)
        ▸ pg_catalog (127)
        ▾ public (5)
            ▸ bookmarks
            ▸ categories
            ▸ movies
            ▸ users
            ▸ users_archive
```

_______________________________________________________________________________

