# This project use ExpressJS

To run this project:
- Copy file `.env.example` and rename to `.env`
    ```
    PORT # Port for app running
    SQL_DATABASE_TYPE # Database type # sqlite | mysql | postgres
    # leave it blank or delete this if you want to use sqlite (db file will be saved at /data)
    SQL_DATABASE_HOST # Database host. Require when use mysql or postgres
    SQL_DATABASE_PORT # Database port. Require when use mysql or postgres # postgres 5432 | mysql 3306
    SQL_DATABASE_NAME # Database name. Use to connect to database
    SQL_DATABASE_USER # Database user. Use to connect to database
    SQL_DATABASE_PASSWORD # Database password. Use to connect to database
    ```
- Change your config in `.env` file. Example:
    ```ini
    PORT=5000 # App will runs at localhost:5000 or <your-ip>:5000
    SQL_DATABASE_TYPE=postgres # Use postgresql
    SQL_DATABASE_HOST=localhost
    SQL_DATABASE_PORT=5432
    SQL_DATABASE_NAME=database
    SQL_DATABASE_USER=root
    SQL_DATABASE_PASSWORD=password
    ```
  Note: If you use mysql or postgres you have to start database first. 
  Or use simple sqlite:
  ```
    PORT=5000
    SQL_DATABASE_TYPE=sqlite
    # No need to config any more
  ```
- Install package by running:
  ```bash
  npm install
  ```  
- Then run `npm start`