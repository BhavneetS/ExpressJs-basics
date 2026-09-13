
const express = require('express');
const app = express();
const path = require('path');


const rootDir = require('./utils/pathUtil'); 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')

/* 
    app.set() is used to set global variables in the application. 
    It is used to set the view engine and the views folder path.
    View engine allows to tell express that we are using a template engine to render the views.
    Views allows us to tell express where to find the views folder. By default, express looks for the views folder in the root directory of the application.
    If we want to change the location of the views folder, we can use app.set('views', path.join(__dirname, 'views')) to set the views folder path.
*/

/* 
    pug ships with inherent support for express. So we don't need to install any additional package to use pug with express.
*/
app.set('view engine', 'pug');
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


app.use(adminData.routes); /* we can also use app.use('/admin' , adminRoutes) to filter routes as /admin/... */
app.use(shopRoutes);


/* In order to read static files */
app.use(express.static(path.join(__dirname, '/public')));


app.use((req, res, next) => {
   return res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000);