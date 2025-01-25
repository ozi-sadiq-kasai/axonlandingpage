import Research from '../models/ResearchModel.js'

const createResearch = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, ResearchType } = req.body;
      // Validate input
      if (!firstName || !lastName || !email || !phone || !ResearchType) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  

    const validResearchTypes = [
      'Covid',
      'Typhoid',
      'Kidney',
      'Malaria',
    ];
    if (ResearchType && !validResearchTypes.includes(ResearchType)) {
      return res.status(400).json({ error: 'Invalid ResearchType provided.' });
    }
    const newResearch = new Research({
      ResearchUser: {
        firstName,
        lastName,
        email,
        phone,
      },
      ResearchType: ResearchType || 'All Researches',
    });
    const savedResearch = await newResearch.save();
    res.status(201).json(savedResearch);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating research.' });
  }
};

export default createResearch