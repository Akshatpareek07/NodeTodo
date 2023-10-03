var express=require('express');

var todoControlller=require('./controllers/todoController');
var app=express();

//set up template engin
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoControlller(app);
//listen to port
app.listen(3000);
console.log('You are listening to port 3000');
