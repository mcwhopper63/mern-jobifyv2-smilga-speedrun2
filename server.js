import express from 'express';
const app = express();

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
