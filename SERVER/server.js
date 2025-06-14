import express from "express"
import { connectedDB } from "./configs/mongo.config.js"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config()
const app=express()
app.use(express.json())

app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin); 
    },
    credentials: true,
  })
);
app.use("/users",userRouter)
connectedDB()

const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log("server on 8000")
})