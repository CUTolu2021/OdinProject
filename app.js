const express = require("express");
const app = express();
const path = require("node:path");
const booksRoute = require("./routes/booksRoute");
const authorRoute = require("./routes/authorRoute");
const mainRoute = require("./routes/mainRoute");

app.use(express.urlencoded({ extended: true }));
app.use("/books", booksRoute);
app.use("/author", authorRoute);
app.use("/", mainRoute);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = 8080;      
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
  });