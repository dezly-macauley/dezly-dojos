# Database Queries
_______________________________________________________________________________

Login to a Database:
```
mycli -u dezly_macauley -h localhost
```

Use this command to see what databases are available to connect to:

```
SHOW DATABASES;
```
+--------------------+
| Database           |
+--------------------+
| employee           |
| information_schema |
+--------------------+

Connect to the employee database:
```
use employee
```

Your prompt should look like this now:

```
MariaDB dezly_macauley@localhost:employee>
```
_______________________________________________________________________________

To view all the tables in the database that you connected to:

```
SHOW TABLES;
```

+----------------------+
| Tables_in_employee   |
+----------------------+
| current_dept_emp     |
| department           |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employee             |
| salary               |
| title                |
+----------------------+
_______________________________________________________________________________

### How to check how many records (rows of data) a specific table has

```
SELECT COUNT(*) AS total_records FROM employee;
```
+---------------+
| total_records |
+---------------+
| 300024        |
+---------------+

_______________________________________________________________________________

### How to check the structure of the columns in a table

```
DESCRIBE employee;
```

+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| emp_no     | int(11)       | NO   | PRI | <null>  |       |
| birth_date | date          | NO   |     | <null>  |       |
| first_name | varchar(14)   | NO   |     | <null>  |       |
| last_name  | varchar(16)   | NO   |     | <null>  |       |
| gender     | enum('M','F') | NO   |     | <null>  |       |
| hire_date  | date          | NO   |     | <null>  |       |
+------------+---------------+------+-----+---------+-------+
_______________________________________________________________________________



### How to view all of the records from a table

E.g. View all columns from the `employee` table

```
SELECT * FROM employee limit 10;
```

The limit of 10 is so that is only shows the first 10 rows.
You want a limit because some tables may have thousands of records.

_______________________________________________________________________________

### How to display only specific columns

```
SELECT emp_no, first_name, last_name FROM employee limit 10;
```

_______________________________________________________________________________

### How to display rows according to a specific criteria

E.g. I want all columns where the employee number is 10003

```
SELECT * FROM employee WHERE emp_no = "10003";
```

```
SELECT * FROM employee WHERE gender = 'M' and last_name = 'Bamford';
```

_______________________________________________________________________________

### How to display the data in a specific order

```
SELECT * FROM employee ORDER BY hire_date ASC limit 10;
```

If you wanted it in descending order then do this.

```
SELECT * FROM employee ORDER BY hire_date DESC limit 10;
```

_______________________________________________________________________________

### Pattern Matching

```
SELECT * FROM employee where birth_date like '%1952%' limit 10;
```

This will display all of the employees where `1952` appears somewhere in the birth date.

_______________________________________________________________________________
