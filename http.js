const express = require('express');
const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 10000 },
    { id: 2, name: 'Smartphone', category: 'electronics', price: 7000 },
    { id: 3, name: 'Shirt', category: 'fashion', price: 300 },
    { id: 4, name: 'Shoes', category: 'fashion', price: 500 },
];

app.get('/products', (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        return res.json(filteredProducts);
    }

    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
