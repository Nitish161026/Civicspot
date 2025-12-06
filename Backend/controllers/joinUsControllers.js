import JoinUs from "../models/joinUsModel.js";

export const handleJoinUs = async (req, res) => {
  try {
    const { name, email, skills, thoughts, motivation } = req.body;
    const portfolioUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const joinEntry = new JoinUs({
      name,
      email,
      skills,
      thoughts,
      motivation,
      portfolioUrl,
    });

    await joinEntry.save();
    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Join Us form error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
