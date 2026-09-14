
const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');


const rootDir = require('./utils/pathUtil'); 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop')



/* 
    Since handlebars is not a built-in template engine in express, we need to install it using npm install express-handlebars and then we need to register it as a template engine using app.engine() method.
    The first argument is the name of the template engine and the second argument is the template engine itself.
    The third argument is an object which contains the configuration options for the template engine.
*/
/* 
    views/layouts/ is the default location for the layouts folder. 
    So we don't need to specify the layoutsDir option in the express-handlebars engine configuration. But if we want to change the location of the layouts folder, we can use the layoutsDir option to specify the location of the layouts folder.
    extname needs to be explicitly defined for handlebars layout engine as it does not have a default extension. So we need to specify the extension of the layout files using the extname option.
*/
app.engine('hbs', handlebars.engine({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
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
// app.set('view engine', 'pug');
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