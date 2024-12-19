import mongoose from 'mongoose'

const todoSchema=new mongoose.Schema({
   content:{
     type:String,
     required:true,
   },
   complete:{
     type:Boolean,
     default:false,
   },
   createdBy:{
     type:mongoose.Schema.Types.ObjectId, // It means we are referring from some other schema model
     ref:'User',
   },
   //Array of Subtodos 
   subTodos:[
     {
       type:mongoose.Schema.Types.ObjectId,
       ref:'Subtodo'
     }
   ]
},{timestamps:true});

export const Todo = mongoose.mode('Todo',todoSchema)