const {Router} = require('express');

const booksRoute = Router();

booksRoute.get('/', (req, res) => {
    res.send("All Books");
});
booksRoute.get('/:id', (req, res) => {
    res.send("About Books");
});
booksRoute.post('/:id/reserve', (req, res) => {
    res.send("Add Books");
});
booksRoute.get('/:id/reserve', (req, res) => {
    const {id} = req.params;
    res.send("Book: " + id);
});
module.exports = booksRoute