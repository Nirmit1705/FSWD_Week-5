import express from 'express';

const port = 3000;
const app = express();

let products = [
    {
        id: 1,
        name: "Phone",
        category: "electronics"
    },
    {
        id: 2,
        name: "Headset",
        category: "electronics"
    }, 
    {
        id: 3,
        name: "medicine",
        category: "healthcare"
    },
    {
        id: 4,
        name: "Laptop",
        category: "electronics"
    },
    {
        id: 5,
        name: "First Aid Kit",
        category: "healthcare"
    }
];

app.get('/', (req, res) => {
    res.send("Welcome to E-commerce Platform");
});

app.get('/products', (req, res) => {
    const { category } = req.query;
    let data;
    if (category) {
        data = products.filter((product) => product.category == category);
    } else {
        data = products;
    }
    res.json(data);
});

app.get('/products/:id', (req, res) => {
    const data = products.filter((product) => product.id == req.params.id);
    res.json(data);
});

app.listen(port, () => {
    console.log(`Go to: http://127.0.0.1:${port}/`);
});