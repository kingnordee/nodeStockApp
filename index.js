const express = require('express');
const app = express();
const expresshandlebars = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;



//set handlebars middleware
app.engine('handlebars', expresshandlebars());
app.set('view engine', 'handlebars');

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
})

// console.log("Kinging MajorLeaguely");
