import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // ✅ Add await
    console.log("✅ CONNECTED TO DB");
  } catch (error) {
    console.log("❌ Error at connecting DB:", error.message);
  }
};
