# Creating a Foreign Key
_______________________________________________________________________________

### What is a foreign key?

It is a key that shows that there is a relationship between two tables
in a database. A foreign key is simply when two tables have a column that 
is related.

Currently there is no foreign key

MariaDB dezly_macauley@localhost:employee
> DESCRIBE department;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| dept_no   | char(4)     | NO   | PRI | <null>  |       |
| dept_name | varchar(40) | NO   | UNI | <null>  |       |
+-----------+-------------+------+-----+---------+-------+

MariaDB dezly_macauley@localhost:employee
> DESCRIBE employee;
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

### How to create a foreign key 

E.g. I want to add to the foreign key `dep_no` to the employee table

#### Step 1 - Add the column

```
ALTER TABLE employee
ADD COLUMN dept_no char(4);
```

#### Step 2 - Add the foreign key

fk stands for foreign key

```
ALTER TABLE employee
ADD CONSTRAINT fk_dept_no
FOREIGN KEY (dept_no)
REFERENCES department(dept_no);
```

_______________________________________________________________________________
