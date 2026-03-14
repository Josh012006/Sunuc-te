import { Request, Response } from "express";
import experienceModel from "../models/experience";

export const getAllExperience = async (req: Request, res: Response) => {
  try {
    const experiences = await experienceModel.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experiences" });
  }
};


export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const experience = await experienceModel.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experience" });
  }
};


export const createExperience = async (req: Request, res: Response) => {
  try {
    const experience = new experienceModel(req.body);

    const savedExperience = await experience.save();

    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ message: "Error creating experience" });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const updatedExperience = await experienceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: "Error updating experience" });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const deletedExperience = await experienceModel.findByIdAndDelete(req.params.id);

    if (!deletedExperience) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.status(200).json({ message: "Experience deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting experience" });
  }
};