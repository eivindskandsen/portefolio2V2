CREATE DATABASE portefolio2;

USE portefolio2;

CREATE TABLE products (
    id INT AUTO_INCREMENT,
    name varchar(32),
    price int,
    PRIMARYKEY id
);

INSERT INTO products (name, price) VALUES
('linsesuppe', 100),
('ertesuppe', 125),
('brokkolisuppe', 150),
('brenneslesuppe', 75);

CREATE USER 'anonymous' IDENTIFIED BY 'pikachoo';
GRANT SELECT ON products TO 'ananymous';

