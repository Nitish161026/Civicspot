import Contact from "../models/contactModel.js";

export const handleContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact request submitted successfully!' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
