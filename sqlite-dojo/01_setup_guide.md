To check if you have SQLite installed

```
sqlite3 --version
```
_______________________________________________________________________________
To open a database in sqlite3

```
cd location-of-directory-where-the-database-is
sqlite3 name_of_database.sqlite
```

You prompt should look like this:
```
sqlite>
```

To clear it:
```
.shell clear
```

To close it
```
.exit
```

_______________________________________________________________________________
### How to view the available tables in a database

```
.tables
```

To check how many rows of data a table has:
E.g. a table called users
```
select count(*) from users;
```

To check what columns a table has:
```
pragma table_info(users);
```

You will get an output that looks like this:
```
0|id|INTEGER|1||1
1|first_name|varchar|1||0
2|last_name|varchar|1||0
3|email|varchar|1||0
4|birthday|varchar|0||0
5|is_pro|INTEGER|1|'0'|0
6|deleted_at|varchar|0||0
7|created_at|datetime|0||0
8|updated_at|datetime|0||0
```

You can also run `.schema name_of_table` to see how to create that table
using SQL commands

_______________________________________________________________________________
### How to use `.mode` and `select` to view data from a table

Turn on the table headings
```
.headers on
```

This will select all columns from the table called `users`, 
but only the first 5 rows of data will be displayed.
```
select * from users limit 5;
```

You can also change the format of the output:

A combination of settings to make the output easier to work with:
```
.mode qbox
```

Gives you SQL insert statements:
```
.mode insert
```

Comma separated values:
```
.mode csv
.separator "what symbol you want to use to separate the values"
```

Other modes: json, markdown


To check what mode you are currently using:
```
.mode
```

_______________________________________________________________________________
### How to save the results of your SQL queries to a file

```
.output ./my_saved_query.sql
```

Then run a simple query:
```
select id, first_name, is_pro from users limit 5; 
```
_______________________________________________________________________________
### Pragmas - Used for optimising the database

View list of the pragmas
```
prama pragma_list;
```

To view a summary of the database configuration:
```
.dbconfig
```

_______________________________________________________________________________

(Come back to this section. Technical issues)
### How to query a csv file using the `csv.c` SQLite extension

This is a file that I downloaded.

https://www.sqlite.org/csv.html

This is a sqlite extension that lets you run SQL queries on a csv file by 
creating a virtual table base on the data in the csv file.

Use case:

Make sure that the csv file you want to query, and the `csv.c` extension are
in the same directory and then do this:

```
cd directory-that-contains-the-files
.load ./csv
CREATE VIRTUAL TABLE temp.t1 USING csv(filename='name_of_my_csv_file.csv');
SELECT * FROM t1;
```
_______________________________________________________________________________
