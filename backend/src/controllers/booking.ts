import { Request, Response } from "express";
import bookingModel from "../models/booking";

export const getAllBooking = async (req: Request, res: Response) => {
  try {
    const bookings = await bookingModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};


export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await bookingModel.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking" });
  }
};


export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = new bookingModel(req.body);

    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: "Error creating booking" });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(400).json({ message: "Error updating booking" });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const deletedBooking = await bookingModel.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
};