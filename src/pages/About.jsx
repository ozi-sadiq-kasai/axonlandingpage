import Navbar from '../components/NavBar';
import styled from 'styled-components';
import Features from './Features';
import Challanges from './Challanges';


const About = () => {

  return (
    <Wrapper>
      <Navbar />
      <StyledContent>
      <h2>Streamline Trials, Eliminate Chaos, Empower Results</h2>
      <p>
        Axonlink eliminates manual processes, unaudited tools like spreadsheets,
        and untrackable communications such as email. By centralizing and
        streamlining workflows, it enhances trial speed, efficiency,
        adaptability, and quality. The system includes two primary components: a
        user-friendly app for participants and a robust management portal for
        scheduling and oversight.
      </p>
      </StyledContent>
      <Features />
      <Challanges />
    </Wrapper>
  );
};

const Wrapper = styled.section`

 
`;
const StyledContent = styled.section`
  background-color: var(--highlights2);
  padding: 1rem 2rem;
  height: 60%;

  h2 {
  
    color: var(--primary);
  }

  p {
    font-size: 1.6rem;
    font-weight:200;
    line-height: 1.1;
    /* color: var(--text-secondary); */
  }
`;
export default About;
