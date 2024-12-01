# Adding Data to table
_______________________________________________________________________________

Login to a Database:
```
mycli -u dezly_macauley -h localhost
```

Connect to the employee database:
```
use employee;
```
```
SELECT * FROM department;
```
+---------+--------------------+
| dept_no | dept_name          |
+---------+--------------------+
| d009    | Customer Service   |
| d005    | Development        |
| d002    | Finance            |
| d003    | Human Resources    |
| d001    | Marketing          |
| d004    | Production         |
| d006    | Quality Management |
| d008    | Research           |
| d007    | Sales              |
+---------+--------------------+

```
DESCRIBE department;
```

This will show you what the existing columns are and what variable type you 
are supposed to enter.

+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| dept_no   | char(4)     | NO   | PRI | <null>  |       |
| dept_name | varchar(40) | NO   | UNI | <null>  |       |
+-----------+-------------+------+-----+---------+-------+

_______________________________________________________________________________

### How to insert data into a table 

```
INSERT INTO department (dept_no, dept_name) VALUES ('d012', 'AI Engineering');
```
_______________________________________________________________________________

### How to update information. 

I want to department name from 'AI Engineering'
to 'AI DevOps' 

```
UPDATE department
SET dept_name = 'AI DevOps'
WHERE dept_name = 'AI Engineering';
```
_______________________________________________________________________________

### How to delete a row of data

```
DELETE FROM department WHERE dept_name = 'AI DevOps';
```

_______________________________________________________________________________

