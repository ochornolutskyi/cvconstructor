const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/public/views/'));
app.use(express.static(__dirname + '/public/views/partials/'));


app.get('/', (req, res) => {
    res.send('index');
});
app.get('/view', (req, res) => {
    res.send('viewCV');
});
app.get('/auth', (req, res) => {
    res.end("<h1>Login or register curriculum vitae </h1>");
});
app.get('/create', (req, res) => {
    res.end('<h1> Create your curriculum vitae </h1>');
});
app.listen(PORT, () => console.log(`We work on ${PORT} port`));
