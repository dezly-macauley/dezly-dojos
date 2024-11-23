# MySQL Guide

_______________________________________________________________________________

### Run the secure installation on MySQL to secure your database access

Run this command in the terminal
```
sudo mariadb-secure-installation

```
Note: MariaDB is a drop-in replacement for MySQL.

_______________________________________________________________________________

#### Follow the prompts

1. Enter current password for root (enter for none): Press enter

2. Switch to unix_socket authentication [Y/n]: Type `Y` and press Enter

3. Change the root password? [Y/n]: Type `n` and press enter

Do not set the root password as `unix_socket authentication` is more
secure and does not expose the password in plain text.

4. Remove anonymous users? [Y/n]: Type `Y` and press enter

5. Disallow root login remotely? [Y/n] Type `Y` and press enter

6. Remove test database and access to it? [Y/n]: Type `Y` and press enter

7. Reload privilege tables now? [Y/n]: Type `Y` and press enter

_______________________________________________________________________________

### Login to MariaDB as a root user using `mycli`

Note: mycli is a command that belongs to the `mycli` program. It is a better
version of the `mariadb` cli that is part of the MySQL/MariaDB installation. 

Now you can login with either with 
`unix_socket authentication` (your Linux sudo password),
or use the root password that you set for the MariaDB root user 
during the installation.

```
sudo mycli -u root -h localhost
```

MariaDB root@localhost:(none)>

You are now logged in to MariaDB as the `root` user and connection 
that you are using is `localhost`. Which means that you are interacting
with databases that are locally available on your computer.

_______________________________________________________________________________

### How to create a new user

First make sure that you are logged in like this:

MariaDB root@localhost:(none)>

```
CREATE USER 'dezly_macauley'@'localhost';
```

Underscores are preferred in SQL

This will create a user called `dezly_macauley`
that is connected to `localhost`.

To verify that the user was created.

```
SELECT user, host FROM mysql.user;
```

_______________________________________________________________________________

### Set the password for the user in a secure way

First create a password for your user that you keep somewhere safe.

Note: The following commands are run from the `zsh` shell,
not the `mycli` shell:

Add this to your .zshrc file (located in the home directory)

```sh

alias zsh-clear-history="cat /dev/null > ~/.zsh_history\
&& rm -f ~/.zsh_history && touch ~/.zsh_history && exec zsh"

disable_history() {
    unset HISTFILE
    export HISTSIZE=0
}

```

_______________________________________________________________________________

You can clear your zsh_history file with this command

```
zsh-clear-history
```
_______________________________________________________________________________

Then run this command to ensure that any passwords
entered in plain text won't be saved in the shell history.

Run this command to prevent commands from being saved in your shell history.

```
disable_history
```
_______________________________________________________________________________

```
SET PASSWORD FOR 'dezly_macauley'@'localhost' = PASSWORD();
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
