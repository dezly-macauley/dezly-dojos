### How to create a table with specific data types

Data Types: integer, text

```
create table my_cool_table(a integer, b text);
insert into my_cool_table values (2, 'Tom');
```

### Warning about strings in SQLite:
Always use single quotes for strings.

Double qoutes are reserved for identifiers like a column name.

If a string contains quotes then enter it like this. 
E.g. Ren's Kitchen should be entered as 'Ren''s Kitchen'

```
INSERT INTO my_cool_table(a, b) VALUES (1, 'Ren''s Kitchen');
```
_______________________________________________________________________________
