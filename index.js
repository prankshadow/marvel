const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

//to check changes
app.listen(port, () => console.log(`Marvel app listening on port ${port}!`));
