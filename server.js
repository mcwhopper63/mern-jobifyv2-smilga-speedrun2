import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Handlers

app.get('/', (req, res) => {
    res.send('Hello World11');
});

app.post('/', (req, res) => {
    // console.log(req);
    res.json({ message: 'Hello World Post method is working' });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});
