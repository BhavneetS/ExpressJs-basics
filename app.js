
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
/* 
    app.get only works for get calls. Similarly app.post only works for post calls.
*/
app.get('/favicon.ico', (req, res) => {
  return res.status(204).end();
});

/* 
    parse data so that it is available in req.body.
*/
app.use(express.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
   return res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);