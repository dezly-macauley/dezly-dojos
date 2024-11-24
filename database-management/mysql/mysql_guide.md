# MySQL Guide


### Setup your terminal (I will be using Zsh)

Add this to your .zshrc file (located in the home directory)

```sh
alias zsh-clear-history="cat /dev/null > ~/.zsh_history\
&& rm -f ~/.zsh_history && touch ~/.zsh_history && exec zsh"

disable_history() {
    unset HISTFILE
    export HISTSIZE=0
}
```
Now you have access to the commands `zsh-clear-history` and `disable_history`

You can run the command `history` to view your zsh_history

_______________________________________________________________________________

### Create a password for user that you will create later on

Keep this password somewhere safe (Like a password vault)

Then run this command:
```
disable_history
```

Then run these commands. This will store the password in a variable called
$my
```
echo "Enter your password: "
read -s my_password
```

Confirm that it worked:

```
echo $my_password
```
_______________________________________________________________________________

### Create user using the root user account, the `mycli` program

```
sudo mycli -u root -e "CREATE USER 'dezly_macauley'@'localhost' IDENTIFIED BY '$my_password';"
```

mycli -u 'root' -h 'localhost'


Press `ctrl + l` to clear the terminal


Press `ctrl + c` to clear the terminal

_______________________________________________________________________________

### Login as the created user

```
mycli -u dezly_macauley -h localhost
```
Your prompt will look like this now:

MariaDB dezly_macauley@localhost:(none)>

You are now logged in to MariaDB as the `dezly_macauley` user and connection 
that you are using is `localhost`. Which means that you are interacting
with databases that are locally available on your computer.

The reason it says (none) is because you are not connected to any databases.
This is fine for now.

To neaten up the terminal after running some commands, do the following:

To exit the shell press:
```
exit;
```
_______________________________________________________________________________

### How to view the available databases

```
SHOW DATABASES;
```

There should be 4 default databases (do not delete them!!!):

1. information_schema: This is a system database that provides 
metadata about all other databases in your MariaDB instance.

2. mysql: This is the system database that contains user privileges,
system settings, and other internal MariaDB data.

3. performance_schema: This database is used for monitoring and 
analyzing MariaDB server performance.

4. sys: A system database that provides performance and 
operational insights about the server.


#### How to create a database

```
CREATE DATABASE leaf_village;
```

#### How to use a database

```
USE leaf_village;
```

Your terminal prompt should change from this:

> MariaDB root@localhost:(none)>

To this:

> MariaDB root@localhost:leaf_village>


_______________________________________________________________________________

### How to view a list of available users, and the host

The host specifies where the connection is coming from — in other words,
the client machine or IP address that the user is 
allowed to use to connect to the database.

```
SELECT user, host FROM mysql.user;
```

There should be four default users

1. PUBLIC: A special internal user for managing default 
privileges (default, system-related).

2. mariadb.sys: A system user used for internal management (default).

3. mysql: A system user used for internal tasks (default).

4. root: The default administrative user with full privileges (default).

_______________________________________________________________________________
