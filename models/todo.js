//requiring mongose
const mongoose=require('mongoose');
//creating the chema
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});
//storing data collectionn in TODO
const ToDo=mongoose.model('ToDo',todoSchema);
//exporting schema
module.exports=ToDo;