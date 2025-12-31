import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected sucessfully");
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`);
    }
}

export default connectDB;