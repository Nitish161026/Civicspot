import Issue from "../models/issueModel.js";

export const handleIssue = async (req, res) => {
  try {
    const {
      name,
      village,
      location,
      issueType,
      urgency,
      duration,
      description,
    } = req.body;

    const photoUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newIssue = new Issue({
      name,
      village,
      location,
      issueType,
      urgency,
      duration,
      description,
      photos: photoUrl,
    });

    await newIssue.save();

    res.status(201).json({
      success: true,
      message: "Issue reported successfully! Thank you for your contribution.",
    });
  } catch (error) {
    console.error("Error creating issue:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
