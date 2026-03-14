import express from "express";
import { getAllBooking, getBookingById, createBooking, updateBooking, deleteBooking } from "../controllers/booking";
import { getAllExperience, getExperienceById, createExperience, updateExperience, deleteExperience } from "../controllers/experience";
import { getAllGuide, getGuideById, createGuide, updateGuide, deleteGuide } from "../controllers/guide";

const router = express.Router();

// Bookings routes
router.get("/booking", getAllBooking);
router.get("/booking/:id", getBookingById);
router.post("/booking", createBooking);
router.put("/booking/:id", updateBooking);
router.delete("/booking/:id", deleteBooking);

// Experience routes
router.get("/experience", getAllExperience);
router.get("/experience/:id", getExperienceById);
router.post("/experience", createExperience);
router.put("/experience/:id", updateExperience);
router.delete("/experience/:id", deleteExperience);

// Guide routes
router.get("/guide", getAllGuide);
router.get("/guide/:id", getGuideById);
router.post("/guide", createGuide);
router.put("/guide/:id", updateGuide);
router.delete("/guide/:id", deleteGuide);

export default router;