import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   username:{
     type:String,
     required:true,
     unique:true,
     lowercase:true,
   },
   email:{
     type:String,
     required:true,
     unique:true,
     lowercase:true,
   },
   password:{
     type:String,
     required:[true,"Password is Requred"],
     
   },{timestamps:true}
});

export const User=mongoose.model("User",userSchema);

// This User in "" is converted lowercase and become plurul here "users"