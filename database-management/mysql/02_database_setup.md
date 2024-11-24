# Database Setup

### Login as the `root` user and connect to `localhost` using `mycli`

```
sudo mycli -u root -h localhost
```

_______________________________________________________________________________

### To view the available database

```
SHOW DATABASES;
```

There are four default databases:
1. information_schema
2. mysql
3. performance_schema
4. sys       

Do NOT delete these databases or modify them!!!

This is what MySQL/MariaDB uses to manage itself and any databases that
you will create in the future.

_______________________________________________________________________________

### How to create a database

NOTE: Use underscores to separate words in file names.

```
CREATE DATABASE training_lab;
```

To confirm that the database was created:

```
SHOW DATABASES;
```

_______________________________________________________________________________

### How to connect to a database

```
USE training_lab;
```

Your prompt should change from this:
MariaDB root@localhost:(none)>

To this:
MariaDB root@localhost:training_lab>


_______________________________________________________________________________

### How to create a table in a database

Run this command and press enter. You will then be prompted to enter the rest
of the query. SQL won't process your query until it finds `;`

Type this and press enter immediately after the comma.
```
CREATE TABLE employees (
```
_______________________________________________________________________________

Start by creating the columns of the table. The first table to created
is the primary key. Think of this as the primary key of the table. 
Think of this as a unique identifier for each row of data in the table.

```
employee_id int auto_increment primary key,
```
auto_increment by default will set the first employee_id to 1 and then the
next number will be 2 and so on.
_______________________________________________________________________________

```
first_name varchar(255) not null,
```

First name can hold up to 255 characters.
`not null` means that for each row of data created, the value of first name
must be set.
_______________________________________________________________________________

```
last_name varchar(255) not null,
```

_______________________________________________________________________________

```
birth_date date
```
This is the last column so that's why there is no comma.

_______________________________________________________________________________

```
);
```
_______________________________________________________________________________

You can also enter everything in one entry:


```
CREATE TABLE employees (
employee_id int auto_increment primary key,
first_name varchar(255) not null,
last_name varchar(255) not null,
birth_date date);
```

_______________________________________________________________________________

### How to view the structure of a table after creating it

```
DESCRIBE employees;
```

The output will look like this:

MariaDB root@localhost:training_lab> DESCRIBE employees;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| employee_id | int(11)      | NO   | PRI | <null>  | auto_increment |
| first_name  | varchar(255) | NO   |     | <null>  |                |
| last_name   | varchar(255) | NO   |     | <null>  |                |
| birth_date  | date         | YES  |     | <null>  |                |
+-------------+--------------+------+-----+---------+----------------+

_______________________________________________________________________________

### How to delete a table in a database

```
DROP TABLE employees;
```
_______________________________________________________________________________

### How to view the tables in a database

```
SHOW TABLES;
```
_______________________________________________________________________________

### How to delete a database

```
DROP DATABASE training_lab;
```
_______________________________________________________________________________
