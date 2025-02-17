import { useState } from "react";
import axios from "axios";
import {
  Wrapper,
  ContentHeader,
  FormHeader,
  FormSection,
  Label,
  Options,
  HealthOptions,
  FormInput,
  TextArea,
  Button,
} from "./styles/QuestionnaireStyles.js";

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    interest: "",
    healthAreas: [],
    isProfessional: false,
    professionalRole: "",
    location: "",
    previousExperience: false,
    experienceDetails: "",
    challenges: "",
    email: "",
    name: "",
    referralSource: "",
    receiveUpdates: false,
    updateAreas: [],
    otherHealthArea: "",
    privacyConsent: false,
  });
  const healthOptions = [
    "Oncology (Cancer)",
    "Cardiology (Heart Health)",
    "Neurology (Brain Health)",
    "Diabetes",
    "Mental Health",
    "Nephrology (Kidney Health)",
    "Pulmonology (Lung Health)",
    "Rare Diseases",
    "Other",
  ];
  const handleCheckboxChange = (field, value) => (e) => {
    const updatedValues = e.target.checked
      ? [...formData[field], value]
      : formData[field].filter((item) => item !== value);
    setFormData({ ...formData, [field]: updatedValues });
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/research",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
    console.log("Form Data console:", formData);
  };

  return (
    <Wrapper>
      <ContentHeader>
        <h2>Join the Waitlist</h2>
        <span>Be Part of the Future of Clinical Trials</span>
        <p>
          Thank you for your interest in our platform, connecting individuals
          with groundbreaking clinical trials and empowering researchers to
          accelerate discovery.
          <br /> By joining our waitlist, you'll be among the first to know when
          our platform launches and gain access to exclusive updates and
          opportunities. <br /> Please take a few moments to answer the
          following questions so we can better understand your needs.
        </p>
      </ContentHeader>

      <FormHeader>Clinical Trial Form</FormHeader>
      <form onSubmit={handleSubmit}>
        {/* Section 1: About You */}
        <div>
          <FormSection>Section 1: About You</FormSection>

          <>
            <Label>
              Are you interested in participating in clinical trials?
            </Label>
            <Options>
              {["Yes", "No", "Maybe"].map((option) => (
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
            </Options>
          </>

          {formData.interest === "Yes" && (
            <>
              <Label>
                What areas of health or research are you most interested in?
              </Label>
              <HealthOptions>
                {healthOptions.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={formData.healthAreas.includes(option)}
                      onChange={handleCheckboxChange("healthAreas", option)}
                    />
                    {option}
                    {option === "Other" &&
                      formData.healthAreas.includes("Other") && (
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
              </HealthOptions>
            </>
          )}

          <>
            <Label>
              Are you a healthcare professional, researcher or member of a
              clinical research organization?
            </Label>
            <Options>
              <label>
                <input
                  type="radio"
                  name="isProfessional"
                  value="true"
                  checked={formData.isProfessional === true}
                  onChange={() =>
                    setFormData({ ...formData, isProfessional: true })
                  }
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isProfessional"
                  value="false"
                  checked={formData.isProfessional === false}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      isProfessional: false,
                      professionalRole: "",
                    })
                  }
                />
                No
              </label>
            </Options>
            {formData.isProfessional && (
              <FormInput
                type="text"
                name="professionalRole"
                value={formData.professionalRole}
                onChange={handleInputChange}
                placeholder="Please specify your role"
              />
            )}
          </>

          <div>
            <Label>Your Location (City, County, Country):</Label>
            <FormInput
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Section 2: Your Experience */}
        <>
          <FormSection>Section 2: Your Experience</FormSection>

          <div>
            <Label>
              Have you ever participated in a clinical trial before?
            </Label>
            <Options>
              <label>
                <input
                  type="radio"
                  name="previousExperience"
                  checked={formData.previousExperience}
                  onChange={() =>
                    setFormData({ ...formData, previousExperience: true })
                  }
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="previousExperience"
                  checked={!formData.previousExperience}
                  onChange={() =>
                    setFormData({ ...formData, previousExperience: false })
                  }
                />
                No
              </label>
            </Options>
            {formData.previousExperience && (
              <TextArea
                name="experienceDetails"
                value={formData.experienceDetails}
                onChange={handleInputChange}
                placeholder="Briefly describe your experience"
              />
            )}
          </div>

          <>
            <Label>
              What are your biggest challenges or frustrations when it comes to
              clinical trials?
            </Label>
            <TextArea
              name="challenges"
              value={formData.challenges}
              onChange={handleInputChange}
            />
          </>
        </>

        {/* Section 3: Stay Connected */}
        <div>
          <FormSection>Section 3: Stay Connected</FormSection>

          <div>
            <Label>Email Address:</Label>
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label>Name (Optional):</Label>
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label>How did you hear about us?</Label>
            <FormInput
              type="text"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleInputChange}
              placeholder="e.g., Social Media, Online Search, Referral"
            />
          </div>
        </div>

        {/* Section 4: Privacy & Consent */}
        <>
          <FormSection>Section 4: Privacy & Consent</FormSection>

          <div>
            <label>
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleInputChange}
                required
              />
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy">privacy policy</a> and consent to us
              contacting you.
            </label>
          </div>

          <>
            <Label>
              Would you like to receive updates about specific areas of research
              or clinical trials?
            </Label>
            <Options>
              <label>
                <input
                  type="radio"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={() =>
                    setFormData({ ...formData, receiveUpdates: true })
                  }
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="receiveUpdates"
                  checked={!formData.receiveUpdates}
                  onChange={() =>
                    setFormData({ ...formData, receiveUpdates: false })
                  }
                />
                No
              </label>
            </Options>
            {formData.receiveUpdates && (
              <HealthOptions>
                {healthOptions.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={formData.updateAreas.includes(option)}
                      onChange={handleCheckboxChange("updateAreas", option)}
                    />
                    {option}
                  </label>
                ))}
              </HealthOptions>
            )}
          </>
        </>
        <Button>
          <button type="submit" className="btn">
            Submit Form
          </button>
        </Button>
      </form>
    </Wrapper>
  );
};

export default Questionnaire;
