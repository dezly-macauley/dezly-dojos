# PostgreSQL Guide
_______________________________________________________________________________

### How to check what version of PostgreSQL you have installed:

```
postgres --version
```

You'll get an output that looks like this

```
postgres (PostgreSQL) 15.8
```

_______________________________________________________________________________

### How to connect to the default database as a superuser

```
psql -U "postgres" -d "postgres""
```

The will connect using a default user called "postgresql" and a default 
database called "postgres".

Your prompt will now look like this:

```
postgres=#
```

Run this command once after connecting to the database:
```
\x auto
```

To neaten up the prompt after running commands,
just press `Ctrl and l`

To exit:

```
\q
```
_______________________________________________________________________________

## The rest of these commands need to be run from the PostgreSQL prompt

_______________________________________________________________________________

### View a list of available database

```
\l
```

By default, you should see three databases: 
postgres, template0, and template1

These databases are owned by postgres and it's generally a bad idea to 
delete them, because this could cause PostgreSQL to start behaving 
in unexpected ways.

_______________________________________________________________________________

### To display users

```
\du
```
_______________________________________________________________________________

### How to Create a user

Login as the "postgres" user:
```
psql -U "postgres"
```

Create another user:
```
CREATE USER "dezly-macauley";
```

_______________________________________________________________________________

### How to set a password for a User or change that password

While logged in as the postgres user do this:

```
ALTER USER "dezly-macauley" WITH PASSWORD 'the-password-you-want';
```

> Note: Use double quotes for identifies, and single qoutes for strings.

_______________________________________________________________________________

### How to give a user permission to create databases

```
ALTER ROLE "dezly-macauley" WITH CREATEDB;
```
_______________________________________________________________________________

### Create a database

I have a database file called "demo" so I will create a
database with the same name, that is owned by the user dezly-macauley.

```
CREATE DATABASE "demo" WITH OWNER "dezly-macauley";
```

_______________________________________________________________________________

### How to enter the psql cli as a specific user 
### and connect to a specific database

First exit psql

```
\q
```

```
psql -U "dezly-macauley" -d "demo";
```

Your prompt should look like this now:

```
demo=>
```

To confirm that you are connected to the correct database 
and the correct user, use this command:

```
\conninfo
```
_______________________________________________________________________________

### How to import data from a file into PostgreSQL

First create a database for the file that you want to import.

E.g. If the file is called "demo", then you could just create a database with
the same name.

```
CREATE DATABASE "demo" WITH OWNER "dezly-macauley";
```

_______________________________________________________________________________

The next thing you need to do is to logout of the PostgreSQL prompt:

```
\q
```

Then make sure that you are in the directory that contains the file:
Then run this command:
```
psql -d demo -U your_username -f file-path/name_of_file.sql
```

E.g. 

psql -d "demo" -U "dezly-macauley" -f ./demo.sql

_______________________________________________________________________________

## Connect to a database first before running the following commands

```
psql -U "dezly-macauley" -d "demo";
```

Your prompt should look like this now:

```
demo=>
```

### How to display all of the tables in the current database

```
\dt
```

### To view how large each table is:

```
\dt+
```

_______________________________________________________________________________

### How to view what columns a specific table has

```
\d users
```
_______________________________________________________________________________

### How to view data from a specific table

This will select all columns from the table called "users",
and display only the first 10 rows of data.
```
select * from "users" limit 10;
```

You can select specific columns
```
select id, first_name, last_name from "users" limit 5;
```

_______________________________________________________________________________

### How to create a table from scratch

While logged in as a user and connected to a database, run this command:

```
CREATE TABLE users(name VARCHAR(128), email VARCHAR(128));
```

This is known as the schema of the database. 
This table called "users", it has two columns, 
and each of those columns can hold up to 128 characters of text.

_______________________________________________________________________________

### How to view the schema of a table

```
\d+ name-of-table
```

_______________________________________________________________________________
