var mongoose = require('mongoose');

/* referring mongoose to my local database */ 
mongoose.connect('mongodb://localhost:27017/TODO');

/* passing the mongoose connection into a db variable */ 
var TODOdb = mongoose.connection; 

/* creating data model for TODO API */
var uploadSchema = new mongoose.Schema({
    _id:{
        type: String
    }, 
    title:{
        type: String 
    },
    status:{
       type: String, 
       enum: ['','','']
   },
    isDeleted: {
        type: Boolean 
    }
});

var Upload = module.exports = mongoose.model('myUpload', uploadSchema);

