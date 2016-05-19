var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({

    completed : Boolean,

    //text : {type : String, default: ''}
    text : {type: String, required: true}

  
});


//module.exports = mongoose.model('Todo', TodoSchema);
var TodoModel = mongoose.model('Todo', TodoSchema);
module.exports.Todo = TodoModel;
//module.ecport = TodoModel;
