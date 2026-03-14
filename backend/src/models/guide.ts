import mongoose from "mongoose";

const guideSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    languages: {
      type: [String],
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
    experiencesCount: {
      type: Number,
      required: true
    },
    responseTime: {
      type: String,
      required: true
    },
    joinedDate: {
      type: String,
      required: true
    },
    specialties: {
      type: [String],
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

const guideModel = mongoose.models.guide || mongoose.model("Guide", guideSchema);

export default guideModel;
