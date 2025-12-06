import express from 'express';
import Project from '../models/projectModel.js';

// GET all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
    // res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json({
      success: true,
      message: "Project saved successfully!",
      data: saved
    });
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
