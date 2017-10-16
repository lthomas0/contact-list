const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017');

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log(
            'Mongoose default connection'
        );
        process.exit(0)
    });
})

app.use(bodyParser.json());




// app.post('/', function(request, response, next){
//     console.log('hello world');
//     response.status(200).json(request.body);
// });
app.use(
    '/public',
     express.static(path.join(__dirname, "public"), {
    fallthrough: true
 })
);

app.use(require('./app/routes/routes'));


app.listen(port, () => {
    console.log(`Magic is happening at ${port}`);
});

// module.exports = router;