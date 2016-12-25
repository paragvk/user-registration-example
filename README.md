# user-registration-example

Spring Boot + Security Form Login + MySQL for UserDetails + FreeMarker Templating + User Registration


# MySQL Setup

- Install MySQL Database Server (and MySQL Workbench to deal with it) if not already present
- Create new schema named `myappdb`
- Add new account with login name `test_user` and password `test123` under `Users and Privileges`
- Execute DDL script `etc/create_tables.sql` to create tables to store user details using MySQL Workbench
- Execute DML script `etc/create_sample_users.sql` to add some sample users

# Running the app

- Checkout the app (`git clone`)
- Import as Maven project in Eclipse
- Run `UserRegistrationApplication.java` as Java Application
- Login with user `hello_user/user123` and notice the `Search` menu
- Login with user `hello_admin/admin123` and notice additional `Management` menu available

# TODO : New user registration
