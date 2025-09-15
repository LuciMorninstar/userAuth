import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Database has been successfully connected to ${process.env.DATABASE_URL}`)
    } catch (error) {

        console.error(error);
        
    }
}

export default connectDB;