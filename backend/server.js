require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI

app.listen(MONGO_URI, PORT, () => console.log(`Server running on port ${PORT}`))