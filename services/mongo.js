import mongoose from "mongoose"

export async function connectToDatabase() {
  try{
    const conn = await mongoose.connect(process.env.MONGOS_URI);
    return conn;
  } catch(err){
    console.log(err)

  }

}