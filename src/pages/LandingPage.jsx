import Animation from '../components/animation/Animation';
import styled, { keyframes } from 'styled-components';

const LandingPage = () => {
  return (
    <Wrapper>
      <h1 className='logo'>
        AXON<span>LINK</span>{' '}
      </h1>
      <div className='hero-container'>
        <div className='text-container'>
          <h2 className='moto1'>Data for Everyone...</h2>
          <h2 className='moto2'>Anywhere... Anytime...</h2>
        </div>
        <Animation />
      </div>
    </Wrapper>
  );
};

// Define animations
const MoveLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled Wrapper
const Wrapper = styled.section`
  height: 100vh;
  @media ${({ theme }) => theme.device.mobile} {
    overflow: hidden;
  }

  .hero-container {
    margin-top: 14rem;
  }

  .text-container {
    margin-left: 40px;
    width: 60%;
    @media ${({ theme }) => theme.device.mobile} {
      margin-left: 5px;
      width: 100%;
    }
  }

  .moto1 {
    font-size: 4rem;
    font-weight: 700;
    animation: ${MoveLeft} 1s ease-out;
    color: var(--highlights2);
    padding-bottom: 0.8rem;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 2rem;
    }
  }

  .moto2 {
    font-size: 2.2rem;
    font-weight: 500;
    padding-left: 12rem;
    animation: ${Opacity} 4s ease-in;
    color: var(--grey-400);
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1.4rem;
      padding-left: 3rem;
    }
  }

  .logo {
    padding: 5px 0 0 5px;
    color: var(--highlights2);
    font-size: 2rem;
    span {
      color: var(--grey-400);
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 1rem;
    }
  }
`;

export default LandingPage;
