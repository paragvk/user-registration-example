INSERT INTO users(username,password,enabled)
VALUES ('hello_user','user123', true);
INSERT INTO users(username,password,enabled)
VALUES ('hello_admin','admin123', true);


INSERT INTO authorities (username, authority)
VALUES ('hello_user', 'ROLE_USER');
INSERT INTO authorities (username, authority)
VALUES ('hello_admin', 'ROLE_ADMIN');
