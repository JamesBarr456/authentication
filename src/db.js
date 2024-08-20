import mongoose from "mongoose";

const connectDB = async () => {
  try {
      await mongoose.connect("mongodb://localhost/merndb")//mongo crea la base de datos ni bien se inserta el primer dato
      console.log(">>> DB is connected");
  } catch (error) {
    console.log(error)
  }
}
export default connectDB