//connecting to express
const express=require('express');
const app=express();
//conenection to DB
const db=require('./config/mongoose')
const todo=require('./models/todo')

const port=8000;
//accessing static files like css,js....
app.use(express.static('./assests'));
//use express router
app.use('/',require('./routes'));
//set uo view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());


//creating a new todolist
app.post('/create_todo',function(req,res){
  
   todo.create({
       description:req.body.description,
       category:req.body.category,
       date:req.body.date
   },function(err,newtodo){
       if(err){
           console.log('error in creating todo')
           return res.redirect('back');
       }
       console.log('sucssefully todo is created')
       return res.redirect('back');
   });
})
//deleting a todo list
app.post('/delete_todo',function(req,res){
    /*
    here if id is empty then typeod id is undefined
    if id length is 1 type of id is string
    if id length >1 type of id is object
    */ 
   let id=req.body.checkbox;
   if(typeof(id)=="undefined")
   return res.redirect('back');
   //if id length==1
     if(typeof(id)=="string"){
        todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in creating todo')
                return;
            }
            return res.redirect('back');
        })
    
    }
    //id length >1
    else{
        for(let i=0;i<id.length;i++){
            todo.findByIdAndDelete(id[i],function(err){
                if(err){
                    console.log('error in creating todo')
                    return;
                }
                
            })
            
        }
        return res.redirect('back');
    }
   
})



//setting up the server
app.listen(port,function(err){
    if(err){
       console.log(`Error in running server:${err}`);
       return;
    }
    console.log(`working fine:${port}`);
 
});