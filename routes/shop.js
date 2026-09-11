const router = require('express').Router();

router.use('/users', (req, res) => {
   return res.send('<h1>Hello from users!</h1>')
})

router.get('/', (req, resp, next) => {
    console.log(req.url);
    resp.send('<h1>Hello from Express!</h1>');
})


/* 
    The data is not available here if not using body-parser or express.json() middleware.
*/


module.exports = router;