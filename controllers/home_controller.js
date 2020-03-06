const todo=require('../models/todo');
module.exports.home=function(req,res){
   todo.find({},function(err,todo){
      if(err){
         console.log('error inn fetching from db');
         return;
      }
      return res.render('home',{
         title:"TODO App",
         todo_list:todo
      }); 
   })
  
  
}