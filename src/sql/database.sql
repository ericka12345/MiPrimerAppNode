CREATE DATABASE PortalNode;

USE PortalNode;

SHOW TABLES;

CREATE TABLE news (
  id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  news TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news (title, news) values ('my title', 'content of the news');

SELECT * FROM news;

USE PortalNode;

SHOW TABLES;

CREATE TABLE Revistas (
  id_rev INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  TituloRevista VARCHAR(100),
  contenido TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO Revistas (TituloRevista, contenido) values ('Revista 1', 'contenido de la revista');

SELECT * FROM Revistas;