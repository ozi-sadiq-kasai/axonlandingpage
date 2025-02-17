// import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Challanges from '../components/Challanges';
import Mission from '../components/Mission';
import Footer from './Footer';
import Modal from '../components/Modal';
import Join from '../components/Join';
import { useState } from 'react';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log('modalOpen', showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    console.log('modalclosed', showModal);
  };

  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Mission />
    
      <Join />
     
      <Challanges />
      <Footer />
      {showModal && <Modal onClose={handleCloseModal} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  padding: 0 3rem;
   @media ${({theme}) => theme.device.max.mobile}{
    padding: 0 0.5rem;
    }
`;
const StyledContent = styled.section`
  background-color: var(--highlights2);
  padding: 2rem;
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
      max-width: 60%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      font-size: 2.2rem;
      margin-bottom: 0.7rem;
    }
    @media ${({ theme }) => theme.device.laptop} {
      text-align: center;
    }
  }
  p {
    font-size: 1.3rem;
    max-width: 100%;
    line-height: 2rem;
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
    @media ${({ theme }) => theme.device.laptop} {
      font-size: 1.5rem;
      margin: 0 auto;
      text-align: center;
    }
  }
  button {
    position: relative;
    top: 6.3rem;
    left: 43%;
    font-weight: 600;
    padding: 15px 25px;
    background-color: var(--highlights1);
    @media ${({ theme }) => theme.device.mobile} {
      bottom: 7rem;
      left: 20.5%;
    }
    @media ${({ theme }) => theme.device.tablet} {
      left: 37%;
      top: 5rem;
    }
    @media ${({ theme }) => theme.device.laptop} {
      top: 22rem;
      width: 30%;
      font-size: 1rem;
      left: 35%;
    }
    @media ${({ theme }) => theme.device.desktop} {
      top: 6rem;
      width: 30%;
      font-size: 1rem;
      left: 35%;
    }
  }
  button:hover{
    background-color:var(--highlights2);
    color:var(--highlights1)
  }
`;
export default About;
