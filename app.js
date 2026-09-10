
const express = require('express');
const app = express();


app.get('/favicon.ico', (req, res) => {
  return res.status(204).end();
});

/* 
    parse data so that it is available in req.body.
*/
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
    }
);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.use('/users', (req, res) => {
   return res.send('<h1>Hello from users!</h1>')
})

app.use('/add-product', (req, res) => {
   return res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

/* 
    The data is not available here if not using body-parser or express.json() middleware.
*/
app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/', (req, res, next) => {
   return res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);