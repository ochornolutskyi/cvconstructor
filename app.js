const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));
// app.use(express.static(__dirname + '/views/'));
// app.use(express.static(__dirname + '/public/views/partials/'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index',{
        title: 'СVConstructor'
    });
});
app.get('/view', (req, res) => {
    res.render('partials/viewcv',{
        title: 'Author CV'
    });
});
// app.get('/auth', (req, res) => {
//     res.end("<h1>Login or register curriculum vitae </h1>");
// });
// app.get('/create', (req, res) => {
//     res.end('<h1> Create your curriculum vitae </h1>');
// });
app.listen(PORT, () => console.log(`We work on ${PORT} port`));
