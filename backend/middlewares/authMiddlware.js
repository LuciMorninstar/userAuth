import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { userModel } from "../models/userModel.js";

export const authMiddleware = async(req,res,next)=>{

    try {

        let token;
         
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

        token = req.headers.authorization.split(" ")[1]

        }

        if(!token){
            const err = new Error("Unauthorized User");
            err.statusCode = 401;
            return next(err);
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user = await userModel.findById(decoded.userId);

        if(!user){
            const err = new Error("No user found with that token");
            err.statusCode = 400;
            return next(err);

        }

        req.user = user;
        next();
        
        
    } catch (error) {

        return next(error);
        
        
    }

}