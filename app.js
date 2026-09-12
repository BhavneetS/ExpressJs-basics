
const express = require('express');
const app = express();
const path = require('path');


const rootDir = require('./utils/pathUtil'); 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
/* 
    app.get only works for get calls. Similarly app.post only works for post calls.
*/
app.get('/favicon.ico', (req, res) => {
  return res.status(204).end();
});

/* 
    parse req data so that it is available in req.body.
*/
app.use(express.urlencoded({ extended: true }));


app.use(adminRoutes); /* we can also use app.use('/admin' , adminRoutes) to filter routes as /admin/... */
app.use(shopRoutes);


/* In order to read static files */
app.use(express.static(path.join(__dirname, '/public')));


app.use((req, res, next) => {
   return res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000);