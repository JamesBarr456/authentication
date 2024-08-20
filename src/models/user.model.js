import mongoose from "mongoose";

//creando el objeto 
const userSchema = new mongoose.Schema( {
    username : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password: {
        type : String,
        required : true,
    },
    

}, {timestamps: true})
// Moongose guardame los objetos userSchema en la collecion User(si no existe lo va a crear) 
export default mongoose.model('User', userSchema)
