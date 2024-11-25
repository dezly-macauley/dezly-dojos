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
SELECT * FROM department limit 10;
```

The limit of 10 is so that is only shows the first 10 rows.
You want a limit because some tables may have thousands of records.

_______________________________________________________________________________


_______________________________________________________________________________
