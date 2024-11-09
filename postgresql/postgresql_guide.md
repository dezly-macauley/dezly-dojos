# PostgreSQL Guide
_______________________________________________________________________________

### How to check what version of PostgreSQL you have installed:

```
psql --version
```

You'll get an output that looks like this

_______________________________________________________________________________

### How to log into the default user called "postgres"
```
psql -U postgres
```

Your prompt will now look like this:

```
postgres=#
```

To exit:

```
\q
```
_______________________________________________________________________________

## The rest of these commands need to be run from the PostgreSQL prompt


_______________________________________________________________________________

### View a list of available database

```
\
```

_______________________________________________________________________________

### Create a user

```
CREATE USER "pg4e" WITH PASSWORD 'secret';
```

> Note: Use double quotes for identifies, and single qoutes for strings.

_______________________________________________________________________________

### Create a database

```
CREATE DATABASE "people" WITH OWNER "pg4e";
```

_______________________________________________________________________________

### How to connect to a database with a specific user

First exit the psql prompt

```
\q
```

Then run the following command:
```
psql name-of-database name-of-user
```

Your prompt should now look like this:

```
name-of-database=>
```

_______________________________________________________________________________

## Connect to a database first before running the following commands

### How to display all of the tables in the current database

```
\dt
```

_______________________________________________________________________________

### How to create a table

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
