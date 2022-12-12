BEGIN;

DROP TABLE IF EXISTS user, post, comment, reply , one_post_version , reply_to_reply;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE post (
  id INT NOT NULL AUTO_INCREMENT,
  post_content TEXT NOT NULL,
  post_version INT NOT NULL DEFAULT 1,
  seen INT NOT NULL DEFAULT 0,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE 
);
ALTER TABLE `express`.`post` 
ADD COLUMN `date_created` TEXT NOT NULL FIRST;

CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT,
  comment_content TEXT NOT NULL,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE reply (
  id INT NOT NULL AUTO_INCREMENT,
  reply_content TEXT NOT NULL,
  user_id INT NOT NULL,
  comment_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE
);

CREATE TABLE one_post_version (
  id INT NOT NULL AUTO_INCREMENT,
  post_content TEXT NOT NULL,
  post_version INT NOT NULL,
  post_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE reply_to_reply (
  id INT NOT NULL AUTO_INCREMENT,
  reply_to_reply_content TEXT NOT NULL,
  reply_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (reply_id) REFERENCES reply(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);



COMMIT;

-- INSERT INTO post (post_content, user_id) VALUES ('This is a post', 1), ('This is another post', 2);
-- INSERT INTO comment (comment_content, user_id, post_id) VALUES ('This is a comment', 1, 1), ('This is another comment', 1, 2), ('This is a comment', 2, 1), ('This is another comment', 2, 2);
-- INSERT INTO reply (reply_content, user_id, comment_id) VALUES ('This is a reply', 1, 1), ('This is another reply', 1, 2), ('This is a reply', 2, 1), ('This is another reply', 2, 2);
-- INSERT INTO watch (num_of_watches, user_id, post_id) VALUES (1, 1, 1), (1, 1, 2), (1, 2, 1), (1, 2, 2); 
