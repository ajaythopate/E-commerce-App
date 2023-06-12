import mongoose from "mongoose";
import app from "./App";
import config from "./confg";

( async() => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("BD CONNECTED !");

    app.on('error', (err) =>{
      console.error("EROR: ", err);
      throw err
    })
    
const onListening =() =>{
  console.log(`Listening on port  ${config.PORT}`);
}

app.listen(config.PORT, onListening)

  } catch (err) {
    console.error("ERROR:",err)
    throw err
  }
})()
