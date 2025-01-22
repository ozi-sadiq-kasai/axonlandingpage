import mongoose from 'mongoose';
const ResearchSchema = new mongoose.Schema(
  {
    ResearchUser: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true,unique:true},
      phone: { type: Number, required: true },
    },
    ResearchType: {
      type: String,
      enum: ['All Researches', 'Typhoid', 'Kidney', 'Malaria'],
      default: 'All Researches',
    },
  },
  { timestamps: true }
);
const Research = mongoose.model('Research', ResearchSchema);
export default Research;
