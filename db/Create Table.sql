CREATE TABLE shelfieform
(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(1000),
    price INTEGER,
    image_url TEXT
)