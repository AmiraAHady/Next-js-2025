import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://amira:@cluster0.0p3m6.mongodb.net/Tasks?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}
