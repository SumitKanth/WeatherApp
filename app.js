const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express(); // All the methods & property of express are assign to app

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '/static')
const template_path = path.join(__dirname, './templates/views');     // Line number 14 pe jo h
const particals_path = path.join(__dirname, './templates/partials');

// View Engine Handelbars Stuff
app.set('view engine', 'hbs')
app.set('views', template_path) // Iska mtlb ki line no. 13 ke jo hmne views set kra tha ab ko templates ke andr h
hbs.registerPartials(particals_path);

// Static Related Stuff
app.use(express.static(static_path));


// App Related Stuff
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

// Estrick Operator (404  Error)
app.get('*', (req, res) => {
    res.render('error', {
        errorMsg: 'Oppos Page Not Found!'  // It take an object also
    });
})


// Listing the server 
app.listen(port, () => {
    console.log(`Your server is running at ${port} port`);
})