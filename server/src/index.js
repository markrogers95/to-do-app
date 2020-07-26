const express = require('express');

const env = require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const items = require('./api/items');
const router = require('./api/items');

if (env.error){
    console.log(env.error);
}

const app = express();
const port = process.env.PORT || 1337;

mongoose.connect('mongodb://127.0.0.1/toDo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => handleError(error));

app.use(morgan('common'));
app.use(helmet());

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "message": "hello world !"
    });
});

app.use('/api/items', items);

app.use((req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? "No stack" : error.stack
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});