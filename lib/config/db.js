import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rajputshubhamsingh593:rajputshubhamsingh593@cluster0.5pha4.mongodb.net/todo-app');
    console.log("DB Connected");
}