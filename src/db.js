import mongoose from "mongoose";

const connectDB = async () => {
  try {
      await mongoose.connect("mongodb://localhost/authMernDB")//mongo crea la base de datos ni bien se inserta el primer dato
      console.log(">>> DB is connected");
  } catch (error) {
    throw new Error(error)
  }
}
export default connectDB