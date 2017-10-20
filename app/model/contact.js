const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
        },
    affiliation: {
        type: String,
        required: true
    }
    })

// define our contact model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('contact', contactSchema)