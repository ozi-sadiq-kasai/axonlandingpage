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

export { createResearch };