import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({


        userName:{
        type:String,
        minLength:[4, "User Name must be greater than 4 letters"],
        maxLength:[20, "User Name can't be greater than 20 letters"],
        trim:true,
        required:true

    },

    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
        validate:{
            validator:(v)=> v.includes("@"),
            message:"Email must contain @"
        }
    },

    password:{
        type:String,
        minLength:[6, "Password must be greater than 4 letters"],
        maxLength:[25, "Password can't be greater than 20 letters"],
        required:true
    }

    
},{timestamps:true})


userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();


})

userSchema.methods.comparePassword = async function(typedpassword){
    return await bcrypt.compare(typedpassword,this.password);

}


export const userModel = mongoose.model("User", userSchema);