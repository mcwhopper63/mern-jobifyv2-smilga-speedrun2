import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

let jobs = [
    { id: nanoid(), company: 'apple', position: 'frontend developer' },
    { id: nanoid(), company: 'google', position: 'backend developer' },
    { id: nanoid(), company: 'meta', position: 'fullstack developer' },
];

// Routes and Handlers

app.get('/', (req, res) => {
    res.send('Hello World11');
});

app.post('/', (req, res) => {
    // console.log(req);
    res.json({ message: 'Hello World Post method is working' });
});

app.get('/api/v1/jobs', (req, res) => {
    res.status(200).json({ jobs });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});
