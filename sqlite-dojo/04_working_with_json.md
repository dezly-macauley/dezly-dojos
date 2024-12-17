# Working with Json

_______________________________________________________________________________

### Using `SELECT` to make evaluations

The typical use case of `select` (case does not matter) is to make queries,
but you can also use it to return the result of an expression, 
or the results of a built-in function like json().
_______________________________________________________________________________

sqlite_dojo.sqlite>

```
select 5 + 3;
```

This will be the output:
+-------+
| 5 + 3 |
+-------+
| 8     |
+-------+

_______________________________________________________________________________
### How to evaluate a json string

If the expression inside the single qoutes in not valid json,
an error will be returned.

This is a json object:
```
select json('
{}
');
```

This is a json array:
```
select json('
[{},
{},
{}]
');
```

_______________________________________________________________________________

### json_object('key', 'value')

```
select json_object('user_name', 'Dezly');
```

This will return:

{"user_name":"Dezly"}

_______________________________________________________________________________

### json_array()

The syntax is:
```
SELECT json_array(
    json('{"name": "Lee", "age": 36}'),
    json('{"name": "Emilia", "age": 19}')
);
```

This will return:

[{"name":"Lee","age":36},{"name":"Emilia","age":19}]
_______________________________________________________________________________
### json_array_length()

```
SELECT json_array_length(
    json_array(
        json('{"name": "Lee", "age": 36}'),
        json('{"name": "Emilia", "age": 19}')
    )
);
```

This will return:
2
_______________________________________________________________________________
### Reading from a json object

{
    "name": "John", 
    "age": 30, 
    "city": 
    "London"
}

```
select json('
    {
        "name": "John", 
        "age": 30, 
        "city": "London"
    }
') -> '$';
```
'$' means start from the root of the object and give me 
the entire json object.

This will be returned:
{"name":"John","age":30,"city":"London"}
_______________________________________________________________________________
### How to get a specific value of a key

There are two output formats:


Ouput 1: 
-> Returns a valid json string
```
select json('
    {
        "name": "John", 
        "age": 30, 
        "city": "London"
    }
') -> '$.city';
```

This will return the value as a :
"London"

_______________________________________________________________________________

Output 2:
->> Returns plain text
```
select json('
    {
        "name": "John", 
        "age": 30, 
        "city": "London"
    }
') ->> '$.city';
```

This will return the value as a :
London

_______________________________________________________________________________

SQLite does not have a specific data type for json

You are to store your data in a text or blob column

json.parse

json.stringfy

_______________________________________________________________________________

json vs json b

json b is going to be much faster

_______________________________________________________________________________
