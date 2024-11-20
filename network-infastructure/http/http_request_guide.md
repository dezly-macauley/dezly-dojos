# HTTP request
_______________________________________________________________________________

This consists of a method, path, version, and a `header section` that is made
up of `header` fields.

```http
GET /api/v1/users HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer your_token_here
```
_______________________________________________________________________________

### Method: GET 
This indicates that the client is requesting data from the server

GET - Retreive data from the server
POST - Send data fo the server
PUT - Updates what is currently on the web server with something else
DELETE - Removes a resource from the server

### Path: /api/v1/users
This is the resource the client wants to access

### Verson: HTTP/1.1
This is the version of HTTP protocol that is being used

### Header Section
- Host - This tells the server which website or service you want
- Accept - This tells the server what data the client expects to receive.
E.g. JSON, HTML, XML 
- Authorization - This let's the server know who the client is by 
providing authentication credentials. 
It usually contains a token (e.g., a bearer token) 
to prove the client's identity and grant access to 
specific resources or actions.
_______________________________________________________________________________
