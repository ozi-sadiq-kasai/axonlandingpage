import Research from '../models/ResearchModel.js';

const createResearch = async (req, res) => {
  try {
    const {
      interest,
      healthAreas,
      isProfessional,
      professionalRole,
      location,
      previousExperience,
      experienceDetails,
      challenges,
      email,
      name,
      referralSource,
      receiveUpdates,
      updateAreas,
      otherHealthArea,
      privacyConsent,
    } = req.body;

   // Validate input
    if (!email || !privacyConsent) {
      return res.status(400).json({ error: 'Email and privacy consent are required' });
    }

    const newResearch = new Research({
      interest,
      healthAreas,
      isProfessional,
      professionalRole,
      location,
      previousExperience,
      experienceDetails,
      challenges,
      email,
      name,
      referralSource,
      receiveUpdates,
      updateAreas,
      otherHealthArea,
      privacyConsent,
    });

    const savedResearch = await newResearch.save();
    res.status(201).json(savedResearch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating research.' });
  }
};

const getResearch = async (req, res) =>{
  try {
    const researchData = await Research.find();
    res.status(200).json(researchData);
  } catch (error) {
    console.error("Error fetching research data:", error);
    res.status(500).json({ error: "Failed to fetch research data" });
  }
}

export { createResearch, getResearch };