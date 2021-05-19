CREATE DATABASE IF NOT EXISTS portefolio2;

USE portefolio2;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT,
    name varchar(32),
    price int,
    summary varchar(255),
    description mediumtext,
    picture mediumtext,
    PRIMARY KEY (id)
);

INSERT INTO products (name, price, summary, description, picture) VALUES
('Lentil soup', 100, 'A tasty, simple and easy to make soup, with a fresh taste of ginger and orange', 'Ingredients: One onion, two cloves garlic, three carrots, one and a half vegetable broth, one tablespoon ginger, one orange, 200g lentil, half a teaspoon turmeric and fresh coriander.', 'https://www.noracooks.com/wp-content/uploads/2018/11/144A0601.jpg'),
('Yellow pea soup', 125, 'Traditional pea soup with pork knuckle suitable all year round', 'Ingredients: One lightly salted pork knuckle, 200g dried yellow peas, one onion, one celery root, two bay leaf, two liters water, two carrots, two leeks and four thyme stalks', 'https://www.errenskitchen.com/wp-content/uploads/2014/05/Yellow-Split-Pea-and-Bacon-Soup-1-of-1-4-650x975.jpg'),
('Broccoli soup', 150, 'A healthy broccoli soup that is made quickly.', 'Ingredients: One broccoli, two cloves garlic, one liter vegetable broth, three tablespoons olive oil, basil, chives, mint, salt and pepper.', 'https://www.kitchensanctuary.com/wp-content/uploads/2016/10/Broccoli-cheese-soup-with-bacon-fat-croutons-tall.webp'),
('Stinging nettle soup', 75, 'Stinging nettle is annoying to deal with, but it makes a great soup, and is full of useful vitamins!', 'Ingredients: One shallot, two gloves garlic, two tablespoons butter, one liter of nettle, six deciliter chicken broth, one deciliter cream, one handful of fresh thyme, salt and pepper', 'https://www.gettystewart.com/wp-content/uploads/2014/05/IMG_6610.jpg');


CREATE USER IF NOT EXISTS'anonymous' IDENTIFIED BY 'pikachoo';
GRANT SELECT ON products TO 'anonymous';