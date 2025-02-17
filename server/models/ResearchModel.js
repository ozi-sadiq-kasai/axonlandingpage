import mongoose from "mongoose";

const researchSchema = new mongoose.Schema({
  interest: String,
  healthAreas: [String],
  isProfessional: Boolean,
  professionalRole: String,
  location: String,
  previousExperience: Boolean,
  experienceDetails: String,
  challenges: String,
  email: { type: String, required: true, unique: true },
  name: String,
  referralSource: String,
  receiveUpdates: Boolean,
  updateAreas: [String],
  otherHealthArea: String,
  privacyConsent: Boolean,
});

const Research = mongoose.model("Research", researchSchema);

export default Research;