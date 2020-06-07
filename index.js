const express = require('express');
const app = express();
const expresshandlebars = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

//set handlebars middleware
app.engine('handlebars', expresshandlebars());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));


function call_api(ticker, completed){
    const stock_url = 'https://cloud.iexapis.com/stable/stock/'+ ticker +'/quote?token=pk_6a0b25b8abf548dca74da17a39044606';
    request(stock_url, {json: true}, (err, res, body) => {
        if(err) {
             console.log(err);
             return;
        }
        if(res.statusCode === 200) return completed(body);
    })
}


// pk_6a0b25b8abf548dca74da17a39044606
app.get('/', (req, res) => {
    const searchInput = req.body.tickerInput;
    call_api("fb", (retval) => {
        res.render('home', {stock: retval});
    })
})

app.post('/', (req, res) => {
    const searchInput = req.body.tickerInput;
    call_api(searchInput,(retval) => {
        res.render('home', {stock: retval, data: searchInput})
    })
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
