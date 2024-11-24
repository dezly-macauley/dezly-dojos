# MySQL Setup
_______________________________________________________________________________

### First check that you have `mariadb` and `mycli` installed

```
mariadb --version
```

```
mycli --version
```

Note: MariaDB is a drop-in replacement for MySQL and `mycli` is better
version of the default cli tool that mariadb/mysql comes with.

Check that the server is running with the following command:

```
sudo systemctl status mysql.service
```

If you see something that says active (running), you should be good to go.

If not then run this command:

```
sudo systemctl start mysql.service
```

_______________________________________________________________________________

### Run the secure installation on MySQL to secure your database access

Run this command in the terminal

```
sudo mariadb-secure-installation
```

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
