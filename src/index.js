import { PORT } from "./config.js";
import app from "./app.js";
import connectDB from "./db.js";

connectDB(); //Le decimos que primero conecte la base de datos 


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})