# User Setup
_______________________________________________________________________________

### How to view the existing users in a database

First login as the root user:
```
sudo mycli -u root -h localhost
```

Then run this command:
```
SELECT User, Host FROM mysql.user;
```

These are the four default users. 
Do not delete them.

+-------------+-----------+
| User        | Host      |
+-------------+-----------+
| PUBLIC      |           |
| mariadb.sys | localhost |
| mysql       | localhost |
| root        | localhost |
+-------------+-----------+
_______________________________________________________________________________

### How to delete a User that you created

```
DROP USER 'user1'@'localhost';
```
_______________________________________________________________________________

### How to create a user and set the user password securely

#### Step 1: Set up some useful ZSH Commands

Add this to your `.zshrc` file (located in the home directory)

```sh

clear_shell_history() {
    cat /dev/null > ~/.zsh_history && \
    rm -f ~/.zsh_history && \
    touch ~/.zsh_history && \
    exec zsh
}

disable_shell_history() {
    unset HISTFILE
    export HISTSIZE=0
}
```

_______________________________________________________________________________

#### Step 2 - Examine your shell history

Now you will have access to the commands,
`reload-shell`, `clear_shell_history` 
and `disable_shell_history`

1. To view your zsh_history:
```
history
```

2. If you have any passwords stored in your zsh history, or 
you are extra paranoid...

Run this command:
```
clear_shell_history
```
_______________________________________________________________________________

#### Step 3 - Disable your shell history

```
disable_shell_history
```

_______________________________________________________________________________

#### Step 4 - Create a variable to store the password

```
export my_password="your-password-in-quotes"
```

To confirm that this worked:
```
echo $my_password
```

_______________________________________________________________________________

#### Step 5 - Create the user and set their password

```
sudo mycli -u root -h localhost -e "CREATE USER 'dezly_macauley'@'localhost' IDENTIFIED BY '$my_password';"
```

This means login as root, connect to localhost, and execute the query above.


NOTE: `dezly_macauley@localhost` means that this user can only connect 
to a database from the network `localhost`  

If you want to allow a user to connect from anywhere then do use this:

```
'dezly_macauley'@'%$'
```
_______________________________________________________________________________
#### Step 6 - Set User privileges

Login as the root user:
```
sudo mycli -u root -h localhost
```
Run this command:
```
GRANT ALL PRIVILEGES on employee.* to 'dezly_macauley'@'localhost';
```
This will grant the user dezly_macauley, 
all privileges on the database called `employee`.
`.*` means all the tables in the employee database.

_______________________________________________________________________________

NOTE: You can limit privileges

Instead of `employee.*` you could do `employee.name_of_table` 

Instead of `GRANT ALL PRIVILEGES` you could do `GRANT SELECT, INSERT, DELETE`

_______________________________________________________________________________

### How to show what privileges as User has

Login as root then run this:

```
SHOW GRANTS FOR 'dezly_macauley'@'localhost';
```

_______________________________________________________________________________

### How to revoke the privileges of an account

```
REVOKE ALL PRIVILEGES on *.* from 'dezly_macauley'@'localhost';
```
_______________________________________________________________________________

### How to change the password of an account 

```
ALTER USER 'dezly_macauley'@'localhost' IDENTIFIED BY 'newpassword';
```

_______________________________________________________________________________

### How to log in as a created user

From your zsh shell run this command:
```
sudo mycli -u dezly_macauley -h localhost
```
_______________________________________________________________________________

Your prompt should now look like this:

MariaDB dezly_macauley@localhost:(none)>

If you run the command `SHOW DATABASES;`

+--------------------+
| Database           |
+--------------------+
| employee           |
| information_schema |
+--------------------+

_______________________________________________________________________________



_______________________________________________________________________________

