import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/projectModel.js';
import sampleProjects from './data/sampleProjects.js';
import { connectDB } from './config/db.js';

dotenv.config();
await connectDB();

try {
  await Project.deleteMany();
  const inserted = await Project.insertMany(sampleProjects);
  console.log("✅ Sample projects inserted!");
  process.exit();
} catch (err) {
  console.error(err);
  process.exit(1);
}
