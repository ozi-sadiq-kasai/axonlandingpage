import Animation from "../../components/animation/Animation";
import styled, { keyframes } from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1>AXONLINK</h1>
        <div className="text-container">
          <h1 className="moto1">Data for Everyone...</h1>
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
    border: 5px solid blue;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .text-container {
    border: 1px solid red;
    margin-left: 30px;
    width: 40%;
  }

  .moto1 {
    font-size: 26px;
    font-weight: 700;
    color: var(--orange);
    animation: ${MoveLeft} 1s ease-out;
  }

  .moto2 {
    font-size: 23px;
    font-weight: 400;
    color: var(--orange);
    border: 1px solid red;
    padding-left: 3rem;
    animation: ${Opacity} 4s ease-in;
  }
`;

export default Hero;
