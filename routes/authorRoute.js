const {Router} = require('express');

const authorRoute = Router();

const { getAuthorById } = require('../controllers/authorController');


// ... other route handlers
authorRoute.get("/:authorId", getAuthorById);

authorRoute.get('/', (req, res) => {
    res.send("All Authors");
});
authorRoute.get('/about', (req, res) => {
    res.send("About Authors");
});
authorRoute.get('/contact', (req, res) => {
    res.send("Contact Authors");
});

module.exports = authorRoute