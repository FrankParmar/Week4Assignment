let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String
    
},
{
    collection: "favourites"
});

module.exports = mongoose.model('demo', contactSchema);