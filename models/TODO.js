var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* creating data model for TODO API */
var taskSchema = new Schema ({
    _id:{
        type: String
    }, 
    title:{
        type: String 
    },
    status:{
        type: [{
       type: String, 
       enum: ['pending','ongoing','completed']
        }],
           default: ['pending']
            },
    isDeleted: {
        type: Boolean 
    }
});

var Task = module.exports = mongoose.model('Task', taskSchema);

