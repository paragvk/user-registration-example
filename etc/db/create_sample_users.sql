INSERT INTO users(username,password,enabled)
VALUES ('parag','parag', true);
INSERT INTO users(username,password,enabled)
VALUES ('prasad','prasad', true);


INSERT INTO user_roles (username, role)
VALUES ('parag', 'ROLE_USER');
INSERT INTO user_roles (username, role)
VALUES ('prasad', 'ROLE_ADMIN');
