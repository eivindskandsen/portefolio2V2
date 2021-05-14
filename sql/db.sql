CREATE DATABASE IF NOT EXISTS portefolio2;

USE portefolio2;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT,
    name varchar(32),
    price int,
    summary varchar(255),
    description mediumtext,
    PRIMARY KEY (id)
);

INSERT INTO products (name, price, summary, description) VALUES
('Lentil soup', 100, 'A tasty, simple and easy to make soup, with a fresh taste of ginger and orange', 'Ingredients: One onion, two cloves garlic, three carrots, one and a half vegetable broth, one tablespoon ginger, one orange, 200g lentil, half a teaspoon turmeric and fresh coriander.'),
('Yellow pea soup', 125, 'Traditional pea soup with pork knuckle suitable all year round', 'Ingredients: One lightly salted pork knuckle, 200g dried yellow peas, one onion, one celery root, two bay leaf, two liters water, two carrots, two leeks and four thyme stalks'),
('Broccoli soup', 150, 'A healthy broccoli soup that is made quickly.', 'Ingredients: One broccoli, two cloves garlic, one liter vegetable broth, three tablespoons olive oil, basil, chives, mint, salt and pepper.'),
('Stinging nettle soup', 75, 'Stinging nettle is annoying to deal with, but it makes a great soup, and is full of useful vitamins!', 'Ingredients: One shallot, two gloves garlic, two tablespoons butter, one liter of nettle, six deciliter chicken broth, one deciliter cream, one handful of fresh thyme, salt and pepper');


CREATE USER IF NOT EXISTS'anonymous' IDENTIFIED BY 'pikachoo';
GRANT SELECT ON products TO 'anonymous';