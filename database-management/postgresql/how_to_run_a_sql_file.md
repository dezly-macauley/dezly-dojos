# How to run a sql file

_______________________________________________________________________________

### First create the database where you will be adding the table and query

_______________________________________________________________________________

### Step 1: Navigate to the directory where your SQL files are

This sql file will be loaded into the database

smallint_example.sql
```
CREATE TABLE smallint_example (
    person_name TEXT,
    age SMALLINT
)
```

_______________________________________________________________________________

### Step 2: From that directory connect to the database

NOTE: I will be using `pgcli`. This is a better version of the `psql` command
that is built-in to PostgreSQL. `pgcli` has autocomplete,
and syntax highlighting.

```
pgcli -U "dezly-macauley" -d "demo"
```

Your prompt should now look like this:

dezly-macauley@(none):demo>

Then run this command

`i` means the input that contains the SQL file

```
\i ./smallint_example.sql
```

_______________________________________________________________________________

To view the columns in the table

```
\d smallint_example
```

_______________________________________________________________________________
