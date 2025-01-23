import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Features from './Features';
import Challanges from './Challanges';
import Footer from './Footer';
import Modal from '../components/Modal';
import { useState } from 'react';

const About = () => {
  const [showModal,setShowModal] = useState(false)

  const handleOpenModal = ()=>{
    setShowModal(true)
    console.log('modalOpen',showModal)
  }
  const handleCloseModal = ()=>{
    setShowModal(false)
    console.log('modalclosed',showModal)
  }

  return (
    <Wrapper>
      <Navbar />
      <StyledContent>
        <h2>StreamLine Trials and Eliminate Chaos.</h2>
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
        <button className='btn' onClick={handleOpenModal}>Join the Waiting List</button>
      </StyledContent>
      <Features />
      <Challanges />
      <Footer />
  {showModal && <Modal onClose={handleCloseModal}/>}
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
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1rem 0 0 1rem;
    }
  h2 {
    font-size: 3rem;
    color: #a6a6a6;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2rem;
      margin-bottom: 0rem;
      max-width:60%;
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
      max-width: 70%;
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
    top: 6.3rem;
    left: 43%;
    font-weight:700;
    padding: 15px 25px;
    background-color:var(--highlights1);
    @media ${({ theme }) => theme.device.mobile} {
      bottom: 7rem;
      left: 20.5%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      left: 37%;
      top: 5rem;
    }
  }
`;
export default About;
