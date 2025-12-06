import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  text: String,
  author: String,
  rating: Number,
});

const projectSchema = new mongoose.Schema({
  title: String,
  location: String,
  beforeImage: String,
  afterImage: String,
  description: String,
  impact: String, // Only for completed
  progress: String, // Only for ongoing
  expectedImpact: String, // Only for ongoing
  testimonial: testimonialSchema,
  type: {
    type: String,
    enum: ['completed', 'ongoing'],
    required: true,
  },
});

export default mongoose.model('Project', projectSchema);
