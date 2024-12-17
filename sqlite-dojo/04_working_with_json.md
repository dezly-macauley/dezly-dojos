SQLite JSON functions

Scalar = Returns a single value

Aggregate

Table

_______________________________________________________________________________

SQLite does not have a specific data type for json

You are to store your data in a text or blob column

json.parse

json.stringfy

_______________________________________________________________________________

json vs json b

json b is going to be much faster

_______________________________________________________________________________

create table if not exists users(
user_id integer primary key autoincrement,
json_data text);

_______________________________________________________________________________
