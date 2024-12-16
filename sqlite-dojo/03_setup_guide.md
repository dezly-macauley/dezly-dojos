
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
