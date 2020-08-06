const express = require('express');
const app = express();
const connection = require('./database/database');
const routes = require('./routes');

const port = 3001;

try {
    connection.authenticate();
} catch (error) {
    console.log(error);
}

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});