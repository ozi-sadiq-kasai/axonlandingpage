import { useState } from "react";
import axios from "axios";
import { Wrapper,ContentHeader,FormHeader,FormSection } from "./styles/QuestionnaireStyles.js";

const Questionnaire = () => {
  const [formData,setFormData] = useState({
    interest:'',
    healthAreas:[],
    isProfessional:false,
    professionalRole:'',
    location:'',
    previousExperience:false,
    experienceDetails:'',
    challenges:'',
    email:'',
    name:'',
    referralSource:'',
    receiveUpdates:false,
    updateAreas:[],
    otherHealthArea: '',
    privacyConsent: false
  })
  const healthOptions = [
    'Oncology (Cancer)',
    'Cardiology (Heart Health)',
    'Neurology (Brain Health)',
    'Diabetes',
    'Mental Health',
    'Nephrology (Kidney Health)',
    'Pulmonology (Lung Health)',
    'Rare Diseases',
    'Other'
  ];
  const handleCheckboxChange = (field,value)=>(e)=>{
    const updatedValues = e.target.checked
    ?[...formData[field],value]
    : formData[field].filter(item => item !== value)
    setFormData({...formData,[field]:updatedValues})
  }
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Form Data:', formData);
  };


  return (
    <Wrapper>
      <ContentHeader>
        <h2>Join the Waitlist</h2><span>Be Part of the Future of Clinical Trials</span>
        
        <p>
          Thank you for your interest in our platform, connecting individuals
          with groundbreaking clinical trials and empowering researchers to
          accelerate discovery.<br/> By joining our waitlist, you'll be among the
          first to know when our platform launches and gain access to exclusive
          updates and opportunities. <br/> Please take a few moments to answer the
          following questions so we can better understand your needs.
        </p>
      </ContentHeader>

      <FormHeader>Clinical Trial Form</FormHeader>
      <form onSubmit={handleSubmit}>
      {/* Section 1: About You */}
      <div >
        <FormSection>Section 1: About You</FormSection>
        
        <div>
          <label>Are you interested in participating in clinical trials?</label>
          <div >
            {['Yes', 'No', 'Maybe'].map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name="interest"
                  value={option}
                  checked={formData.interest === option}
                  onChange={handleInputChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {formData.interest === 'Yes' && (
          <div >
            <label>What areas of health or research are you most interested in?</label>
            <div >
              {healthOptions.map(option => (
                <label key={option} >
                  <input
                    type="checkbox"
                    checked={formData.healthAreas.includes(option)}
                    onChange={handleCheckboxChange('healthAreas', option)}
                  />
                  {option}
                  {option === 'Other' && formData.healthAreas.includes('Other') && (
                    <input
                      type="text"
                      name="otherHealthArea"
                      value={formData.otherHealthArea}
                      onChange={handleInputChange}
                      placeholder="Please specify"
                    />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        <div >
          <label>Are you a healthcare professional, researcher or member of a clinical research organization?</label>
          <div>
            <label>
              <input
                type="radio"
                name="isProfessional"
                checked={formData.isProfessional}
                onChange={() => setFormData({ ...formData, isProfessional: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isProfessional"
                checked={!formData.isProfessional}
                onChange={() => setFormData({ ...formData, isProfessional: false })}
              />
              No
            </label>
          </div>
          {formData.isProfessional && (
            <input
              type="text"
              name="professionalRole"
              value={formData.professionalRole}
              onChange={handleInputChange}
              placeholder="Please specify your role"
            />
          )}
        </div>

        <div >
          <label>Your Location (City, County, Country):</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Section 2: Your Experience */}
      <div >
        <h2>Section 2: Your Experience</h2>
        
        <div>
          <label>Have you ever participated in a clinical trial before?</label>
          <div >
            <label>
              <input
                type="radio"
                name="previousExperience"
                checked={formData.previousExperience}
                onChange={() => setFormData({ ...formData, previousExperience: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="previousExperience"
                checked={!formData.previousExperience}
                onChange={() => setFormData({ ...formData, previousExperience: false })}
              />
              No
            </label>
          </div>
          {formData.previousExperience && (
            <textarea
              name="experienceDetails"
              value={formData.experienceDetails}
              onChange={handleInputChange}
              placeholder="Briefly describe your experience"
            />
          )}
        </div>

        <div>
          <label>What are your biggest challenges or frustrations when it comes to clinical trials?</label>
          <textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Section 3: Stay Connected */}
      <div >
        <h2>Section 3: Stay Connected</h2>
        
        <div >
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Name (Optional):</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div >
          <label>How did you hear about us?</label>
          <input
            type="text"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            placeholder="e.g., Social Media, Online Search, Referral"
          />
        </div>
      </div>

      {/* Section 4: Privacy & Consent */}
      <div >
        <h2>Section 4: Privacy & Consent</h2>
        
        <div>
          <label>
            <input
              type="checkbox"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleInputChange}
              required
            />
            By submitting this form, you agree to our <a href="/privacy-policy">privacy policy</a> and consent to us contacting you.
          </label>
        </div>

        <div >
          <label>Would you like to receive updates about specific areas of research or clinical trials?</label>
          <div>
            <label>
              <input
                type="radio"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={() => setFormData({ ...formData, receiveUpdates: true })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="receiveUpdates"
                checked={!formData.receiveUpdates}
                onChange={() => setFormData({ ...formData, receiveUpdates: false })}
              />
              No
            </label>
          </div>
          {formData.receiveUpdates && (
            <div>
              {healthOptions.map(option => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={formData.updateAreas.includes(option)}
                    onChange={handleCheckboxChange('updateAreas', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <button type="submit">Submit Form</button>
    </form>
    </Wrapper>
  );
};

export default Questionnaire;
