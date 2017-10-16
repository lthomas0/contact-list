const router = require('express').Router();
const path = require('path'); 

module.exports = router;

router.post('/', function(request, response, next) {
    console.log('hello world');
    response.status(200).json(request.body); 
});

// app.post('/', function(request, response, next){
//     console.log('hello world');
//     response.status(200).json(request.body);
// });
router.get('*', function(req, res){
    res.sendFile('public/index.html', {
        root: path.join(__dirname, '../..')

    });
}) //get call on path - send back next html file
//sendFile - has second parameter 