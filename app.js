
const express = require('express');
const app = express();


app.get('/favicon.ico', (req, res) => {
  return res.status(204).end();
});


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

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/', (req, res, next) => {
   return res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);