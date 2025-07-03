import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test_note_app");
        console.log("Connected to MongoDB");
    }catch (error){
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;

// import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/noteApp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("MongoDB error:", err));
