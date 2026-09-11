const router = require('express').Router();
const path = require('path');

router.get('/add-product', (req, res) => {
    /* 
        While sending a file, we need to conact the path in this way as the base route will be the server route and not the application route. 
        __dirname will give the current directory route So we need to go back to the application route and then go to the views folder and then get the file.
        Also, do not concat the path using string concatenation as it will not work in all OS. Use path.join() to join the paths.
    */
   return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;