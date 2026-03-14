import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    reviewCount: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    highlights: {
      type: [String],
      required: true
    },
    includedItems: {
      type: [String],
      required: true
    },
    guideId: {
      type: String,
      required: true
    },
    maxGroupSize: {
      type: Number,
      required: true
    },
    language: {
      type: [String],
      required: true
    },
    difficulty: String
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

const experienceModel = mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default experienceModel;
