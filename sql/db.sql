CREATE DATABASE IF NOT EXISTS portefolio2;

USE portefolio2;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT,
    name varchar(32),
    price int,
    PRIMARY KEY (id)
);

INSERT INTO products (name, price) VALUES
('linsesuppe', 100),
('ertesuppe', 125),
('brokkolisuppe', 150),
('brenneslesuppe', 75);

CREATE USER IF NOT EXISTS 'anonymous' IDENTIFIED BY 'pikachoo';
GRANT SELECT ON products TO 'ananymous';
