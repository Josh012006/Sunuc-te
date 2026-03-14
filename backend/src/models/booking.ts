import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    experienceId: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    guests: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["confirmed", "pending", "completed", "cancelled"],
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret: any) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const bookingModel = mongoose.models.booking || mongoose.model("Booking", bookingSchema);

export default bookingModel;
