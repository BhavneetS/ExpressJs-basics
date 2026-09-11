const router = require('express').Router();

router.use('/users', (req, res) => {
   return res.send('<h1>Hello from users!</h1>')
})

/* 
    The data is not available here if not using body-parser or express.json() middleware.
*/


module.exports = router;