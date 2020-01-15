const { Router } = require('express');

const routes = Router();

routes.post('/users', (req, res) => {
    return res.json({ message: 'Server teste' });
});


module.exports = routes;