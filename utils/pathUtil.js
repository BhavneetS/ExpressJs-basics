const path = require('path');


/* 
    require.main.filename will give the main file that is running the application. In our case, it is app.js.
     So we can use path.dirname() to get the directory name of the main file and then use it to construct the path to the views folder.
*/
module.exports = path.dirname(require.main.filename);