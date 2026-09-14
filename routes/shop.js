const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/pathUtil');
const adminData = require('./admin');
router.use('/users', (req, res) => {
   return res.send('<h1>Hello from users!</h1>')
})

router.get('/', (req, resp, next) => {
    const products = adminData.products;
    console.log(req.url);
    // resp.sendFile(path.join(rootDir, 'views', 'shop.html'))
    
    /*
        As we need to render the view using pug, we need to use resp.render() method.
        The first argument is the name of the view file without the extension and the second argument is an object which contains the data to be passed to the view.
    */
    resp.render(path.join('shop'), {
        prods: products, 
        docTitle: 'Shop', 
        path:'/',
        isAddProductActive: false,
        isShopActive: true,
        /* Since hanlebars is lightweight and cannot evaluate conditions, we need to pass the condition as a property */
        hasProducts: products.length > 0
    })
})


/* 
    The data is not available here if not using body-parser or express.json() middleware.
*/


module.exports = router;