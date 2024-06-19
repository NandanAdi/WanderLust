const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema=new Schema({
    email:{
        type:String,
        required:true
        //   username and password automatically
        //   implement ho jaaegnge kyu ki passport
        //   unhe by default add kardeta hai 
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema)