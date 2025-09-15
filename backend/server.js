import express, { urlencoded } from "express"
import "dotenv/config"
import connectDB from "./config/connectDB.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors"

const app = express();

const port = process.env.PORT || 9000;
console.log(port)

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))


app.get("/", (req,res)=>{
    res.json("User Auth");

})

app.use("/api/users/v1", userRouter);


app.use(errorMiddleware);

app.listen(port, async()=>{

    console.log(`Server has been established at http://localhost:${port}`);
    connectDB();

})