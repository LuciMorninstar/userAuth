import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken"


export const register = async(req,res,next)=>{

    const {userName, email, password} = req.body;

 try {
       if(!userName || !email || !password){
           const err = new Error("All fields are required");
           err.statusCode = 400;
           return next(err);
       }
   
       const existingUser = await userModel.findOne({email:email});
   
       if(existingUser){
           const err = new Error("User with that email already exists");
           err.statusCode = 400;
           return next(err);
       }
   
       const userData = await userModel.create({
           userName,
           email,
           password
   
       })
   
       const token = jwt.sign({userId:userData._id}, process.env.JWT_SECRET_KEY, {expiresIn:process.env.JWT_EXPIRES_IN}  )

       userData.password = undefined;
   
       return res.status(201).json({
           success:true,
           message:"Registered Successfully",
           data:userData,token
           
           
       })
   
 } catch (error) {

    return next(error);
    
 }
}



export const login = async(req,res,next)=>{

    const {email, password} = req.body;

 try {
       if(!email || !password){
           const err = new Error("All fields are required");
           err.statusCode = 400;
           return next(err);
       }
   
       const existingUser = await userModel.findOne({email:email});
   
       if(!existingUser){
           const err = new Error("Email does not exist");
           err.statusCode = 400;
           return next(err);
   
       }
   
       const doesPasswordMatch = await existingUser.comparePassword(password);
   
       if(!doesPasswordMatch){
           const err = new Error("Password do not match");
           err.statusCode = 400;
           return next(err);
       }
   
       const token = jwt.sign({userId:existingUser._id}, process.env.JWT_SECRET_KEY, {expiresIn:process.env.JWT_EXPIRES_IN});

       existingUser.password = undefined;
   
       return res.status(200).json({
           success:true,
           message:"Logged in Successfully",
           data:existingUser,token
       })
   
 } catch (error) {

    return next(error);
    
 }

}