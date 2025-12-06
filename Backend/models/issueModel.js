import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    // --- Data directly from the form ---

    name: {
      type: String,
      required: [true, "Please provide your name."],
      trim: true,
    },
    village: {
      type: String,
      required: [true, "Please provide the village name."],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Please provide the exact location or a landmark."],
      trim: true,
    },
    issueType: {
      type: String,
      required: [true, "Please select an issue type."],
      enum: ["Road", "Water", "Electricity", "Internet", "Garbage"],
    },
    urgency: {
      type: String,
      required: [true, "Please select an urgency level."],
      enum: ["low", "medium", "high", "critical"],
      default: "low",
    },
    duration: {
      type: String,
      required: [true, "Please specify how long the issue has existed."],
      enum: ["<1w", "1-4w", "1-3m", ">3m"],
    },
    description: {
      type: String,
      required: [true, "A detailed description is required."],
    },
    photoUrl: {
      type: [String], // An array to store URLs of uploaded photos
      default: [],
    },
  },
  {
    // Automatically adds `createdAt` and `updatedAt` fields
    timestamps: true,
  }
);

export default mongoose.model("Issue", issueSchema);
