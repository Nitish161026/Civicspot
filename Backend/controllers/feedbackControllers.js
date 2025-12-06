import Feedback from '../models/feedbackModel.js';

export const submitFeedback = async (req, res) => {
  try {
    const { name, email, feedback, rating } = req.body;
    const newFeedback = new Feedback({ name, email, feedback, rating });
    await newFeedback.save();
    res.status(201).json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
