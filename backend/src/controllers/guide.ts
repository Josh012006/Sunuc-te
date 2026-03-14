import { Request, Response } from "express";
import guideModel from "../models/guide";

export const getAllGuide = async (req: Request, res: Response) => {
  try {
    const guides = await guideModel.find();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ message: "Error fetching guides" });
  }
};


export const getGuideById = async (req: Request, res: Response) => {
  try {
    const guide = await guideModel.findById(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ message: "Error fetching guide" });
  }
};


export const createGuide = async (req: Request, res: Response) => {
  try {
    const guide = new guideModel(req.body);

    const savedGuide = await guide.save();

    res.status(201).json(savedGuide);
  } catch (error) {
    res.status(400).json({ message: "Error creating guide" });
  }
};

export const updateGuide = async (req: Request, res: Response) => {
  try {
    const updatedGuide = await guideModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json(updatedGuide);
  } catch (error) {
    res.status(400).json({ message: "Error updating guide" });
  }
};

export const deleteGuide = async (req: Request, res: Response) => {
  try {
    const deletedGuide = await guideModel.findByIdAndDelete(req.params.id);

    if (!deletedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({ message: "Guide deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting guide" });
  }
};