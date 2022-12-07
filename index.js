const express = require("express");
const app = express();
const port = 3120;

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server: running on port ${port}`)
});