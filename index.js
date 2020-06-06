const express = require('express');
const app = express();
const expresshandlebars = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

//set handlebars middleware
app.engine('handlebars', expresshandlebars());
app.set('view engine', 'handlebars');


// pk_6a0b25b8abf548dca74da17a39044606
app.get('/', (req, res) => {
    res.render('home', {
        stuff: "Kinging /"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        stuff: "Kinging /about"
    });
})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set port to listen on
app.listen( PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})//END OF PROGRAM
