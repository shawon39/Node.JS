const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.status(404).send('Hello world!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app'
    });
});

app.get('/users', (req, res) => {
    res.send([{
            name: 'shawon',
            age: 23
        },
        {
            name: 'jebin',
            age: 24
        },
        {
            name: 'baby',
            age: 0
        }
    ]);
});

app.listen(3000);
module.exports.app = app;
