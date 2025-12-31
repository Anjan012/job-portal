import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({}); // calling the empty object

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true //  Allow sending cookies/authentication headers Frontend can send cookies with requests Needed for login sessions, auth tokens, etc.
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

// app.listen takes two parameter one is the port and another is a call abck function 
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at PORT: ${PORT}`);
})