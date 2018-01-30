module.exports = function(app) {

var controller = require('../controller/todocontroller');

app.route('/todo') 
     .get(controller.list_all_tasks)
     .post(controller.create_a_task);
         
            
app.route('/todo/:todoId') 
        .get(controller.read_a_task)
        .put(controller.update_a_task)
        .delete(controller.delete_a_task)

};