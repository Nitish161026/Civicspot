import mongoose from "mongoose";

const joinUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  skills: String,
  thoughts: String,
  motivation: String,
  portfolioUrl: String,
});

const JoinUs = mongoose.model("JoinUs", joinUsSchema);
export default JoinUs;
