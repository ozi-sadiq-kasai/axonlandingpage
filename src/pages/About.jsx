import Navbar from '../components/NavBar';
import styled from 'styled-components';
import Features from './Features';
import Challanges from './Challanges';
import Footer from './Footer';

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <StyledContent>
        <h2>Streamline Trials and Eliminate Chaos.</h2>
        <p>
          Axonlink removes the need for manual processes and unreliable tools
          like spreadsheets. It also eliminates untrackable communication
          methods, such as email. <br />
          By centralizing workflows in one platform, it ensures better
          organization and visibility. This approach accelerates trial
          timelines, improves efficiency, and enhances adaptability. With
          Axonlink, you can achieve higher-quality results while simplifying
          your processes.
        </p>
        <button className='btn'>Join the Waiting List</button>
      </StyledContent>
      <Features />
      <Challanges />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
`;
const StyledContent = styled.section`
  background-color: var(--highlights2);
  padding: 1rem 2rem 0 2rem;
  height: 60vh;

  h2 {
    font-size: 3rem;
    color: #a6a6a6;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2rem;
      margin-bottom: 0.7rem;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 2.2rem;
      margin-bottom: 0.7rem;
    }
  }

  p {
    font-size: 1.3rem;
    max-width: 62%;
    line-height: 1.75rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
      max-width: 100%;
      margin-bottom: 0;
      line-height: 1.57rem;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 1rem;
      max-width: 80%;
      margin-bottom: 0;
    }
  }
  button {
    position: relative;
    top: 5rem;
    left: 40%;
    padding: 15px 25px;
    @media ${({ theme }) => theme.device.mobile} {
      top: 1rem;
      left: 23.5%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      left: 37%;
      top: 5rem;
    }
  }
`;
export default About;
