const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://tp_nosqlatlas:RI3OIMh7hAtZSaBq@cluster0-2hk2x.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json);

app.get('/', (req, res) => {
    return res.json({ message: 'Server teste' });
});

app.listen(3333);