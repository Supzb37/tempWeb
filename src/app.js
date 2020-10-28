const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5000;

//static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));

//routing
app.get("", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404error", {
        errormsg: "Oops! Page Not Found, Please go back"
    });
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})