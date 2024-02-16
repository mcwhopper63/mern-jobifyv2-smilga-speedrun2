import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'Hello World 11' });
});

app.listen(5100, () => {
    console.log('server running....');
});
