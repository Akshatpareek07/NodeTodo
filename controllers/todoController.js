var data=[{item:'Task first'},{item: 'Task 2'}, {item:"Task 3"} ];

module.exports = function(app){
    app.get('/todo',function(req,res){
            res.render('todo',{todos: data});
    });
    app.post('/todo',function(req,res){
        
    });
    app.delete('/todo',function(req,res){
        
    });
};