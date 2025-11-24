import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);
export default User;
