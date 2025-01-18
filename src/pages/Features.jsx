import styled from 'styled-components';

const Features = () => {
  return (
    <Wrapper>
      <StyledContent>
        <h2>Features</h2>
        <p>
          <span>The App:</span> This serves as a centralized hub for all essential trial
          details. It offers a personalized schedule of trial visits that
          integrates seamlessly with the participant&apos;s smartphone calendar,
          sends timely reminders and updates about appointments, and includes
          features for storing notes and important information. Designed with
          security in mind, the app eliminates the need for managing numerous
          paper documents. With its smart scheduling and notification system, it
          supports participants in adhering to visit timelines and following key
          restrictions, thereby minimizing protocol deviations. The app is
          available for both Android and iOS devices.<br/>
          
          <span>The Portal:</span> This enables
          flexible management of study protocols, allowing visit schedules to be
          automatically created and adjusted based on participant requirements.
          It helps prevent scheduling mistakes and reduces deviations.
          Additionally, the portal supports direct messaging with participants,
          either individually or as a group, offering greater convenience for
          participants and saving time and effort for trial staff.
        </p>
      </StyledContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
`
const StyledContent = styled.div`
  padding: 1rem 2rem;
  border: 1px solid red;
  h2 {
    text-align: center;
  }
`;

export default Features;
