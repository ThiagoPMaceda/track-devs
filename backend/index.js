const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Server funcionando' });
});

app.listen(3333);