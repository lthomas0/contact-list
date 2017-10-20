const router = require('express').Router();
const path = require('path'); 
const contactController = require('../controllers/contact.controller')()



module.exports = router;

router.get('/', contactController.getAll)
router.get('/:id', contactController.getOneById)
router.post('/', contactController.insert)
router.put('/:id', contactController.updateById)
router.delete('/:id', contactController.removeById)


router.post('/api/contacts', function(request, response, next) {
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


