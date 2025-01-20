import styled, { keyframes } from "styled-components";

const Animation = () => {
  return (
    <Box>
      <Wave className="wave -one" />
      <Wave className="wave -two" />
      <Wave className="wave -three" />
    </Box>
  );
};

// Define keyframes for animation
const drift = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the wave container (Box)
const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transform: rotate(37deg);
`;

// Styled component for individual waves
const Wave = styled.div`
  position: absolute;
  top: 3%;
  left: 10%;
  opacity: 0.4;
  width: 1500px;
  height: 1300px;
  margin-left: -150px;
  margin-top: -250px;
  transform-origin: 50% 60%;
  border-radius: 43%;
  background: var(--highlights1);
  animation: ${drift} 15000ms infinite linear;

  
  &.-two {
    background: #a5d8ff;
    animation: ${drift} 19000ms infinite linear;
  }

  &.-three {
    background-color:var(--highlights2);
    animation: ${drift} 17000ms infinite linear;
  }

  /* Disable animation for mobile screens */
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 180px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 50px;
  }
`;

export default Animation;
