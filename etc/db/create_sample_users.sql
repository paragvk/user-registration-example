INSERT INTO users(username,password,enabled)
VALUES ('parag','parag', true);
INSERT INTO users(username,password,enabled)
VALUES ('prasad','prasad', true);


INSERT INTO authorities (username, authority)
VALUES ('parag', 'ROLE_USER');
INSERT INTO authorities (username, authority)
VALUES ('prasad', 'ROLE_ADMIN');
