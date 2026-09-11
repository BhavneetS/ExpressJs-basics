const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/pathUtil.js');

router.use('/users', (req, res) => {
   return res.send('<h1>Hello from users!</h1>')
})

router.get('/', (req, resp, next) => {
    console.log(req.url);
    resp.sendFile(path.join(rootDir, 'views', 'shop.html'))
})


/* 
    The data is not available here if not using body-parser or express.json() middleware.
*/


module.exports = router;