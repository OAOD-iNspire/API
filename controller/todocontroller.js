
var mongoose = require('mongoose'); 
var toDoList = mongoose.model('Task');


exports.list_all_tasks = function(req, res){
     toDoList.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });      
};

exports.create_a_task = function(req, res){
 var new_task = new toDoList(req.body);
 new_task.save(function(err, TODO){
    if(err)
        res.send(err);
        res.json(TODO);
     
 });
    
};


exports.read_a_task = function(req, res){
  toDoList.findById(req.params.todoId, function(err, TODO){
    if (err)
    res.send(err);
    res.json(TODO);
  });
    
};


exports.update_a_task = function(req, res){
    toDoList.findOneAndUpdate({_id:req.param.todoId}, req.body, {new: true}, function (err, TODO){
       if(err)
         res.send(err);
         res.json(TODO);
        
    });
};


exports.delete_a_task = function(req, res){
    toDoList.remove({_id: req.params.todoId}, function(err, TODO){
        if (err)
            res.send(err);
            res.json({message: 'Task successfully deleted'});
    });
};

