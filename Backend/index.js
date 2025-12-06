import express from 'express';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import userRoutes from './routes/userRoutes.js';
import joinUsRoutes from './routes/joinUsRoutes.js';
import cors from 'cors';
import issueRoutes from './routes/issueRoutes.js';
import contactRoutes from './routes/contactRoutes.js';



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 9000;



//Database connection
connectDB();


app.use('/api/projects', projectRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/users', userRoutes);
app.use('/api/joinus', joinUsRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/contact', contactRoutes);
app.use('/uploads', express.static('uploads'));


//Testing the connection
app.get('/', (req, res) => {
    res.send(`Backend is running at port ${PORT}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });