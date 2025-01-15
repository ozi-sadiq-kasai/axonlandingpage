import Animation from "../../components/animation/Animation";
import styled, { keyframes } from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
        <h1 className='logo'>AXON<span>LINK</span> </h1>
      <div className="hero-container">
        <div className="text-container">
          <h2 className="moto1">Data for Everyone...</h2>
          <h2 className="moto2">Anywhere... Anytime...</h2>
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
  .hero-container {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .text-container {
    margin-left: 40px;
    width: 50%;
  
  }

  .moto1 {
    font-size: 4rem;
    font-weight: 700;
    animation: ${MoveLeft} 1s ease-out;
    color: var(--highlights2);
    padding-bottom:0.8rem
  }

  .moto2 {
    font-size: 2.5rem;
    font-weight: 500;
    padding-left: 15rem;
    animation: ${Opacity} 4s ease-in;
    color:var(--grey-400)
  }

  .logo{
    padding:5px 0 0 5px;
    color:var(--highlights2);
    font-size:2rem;
    span{
      color:var(--grey-400)
    }
  }
`;

export default Hero;
