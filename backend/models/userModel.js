const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Enter Your Name"],
        maxLength: 40,

    },
    email:{
        type: String,
        required: [true,"Please Enter Your Email"],
        unique: true,
        validator: validator.email
    },
    password:{
        type:String,
        required : true,
        select:false,
        minimunLength:8
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date    
})


userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    } 
    this.password = await bcrypt.hash(this.password,10)
})

//JWT TOKEN
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}


userSchema.methods.comparePassword = async function (password) {
    try {
        
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  };


module.exports = mongoose.model("user", userSchema)