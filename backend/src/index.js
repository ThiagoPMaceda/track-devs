const express = require('express');
const mongoose = require('mongoose');
const routes= require('./routes');

const app = express();

mongoose.connect('mongodb+srv://tp_nosqlatlas:RI3OIMh7hAtZSaBq@cluster0-2hk2x.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);