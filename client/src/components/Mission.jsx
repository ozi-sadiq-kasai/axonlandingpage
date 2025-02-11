import MotionAnimation from "./animation/MotionAnimation";
import styled from "styled-components";
const Mission = () => {
  return (
    <Wrapper>
      <Header>
        <h1>
          Revolutionizing Healthcare Delivery, One Digital Solution at a Time. 
        </h1>
        <p>
          We empower health services to provide exceptional care through
          innovative digital tools, improving patient outcomes and streamlining
          operations.
        </p>
      </Header>
      <Motion>
        <MotionAnimation />
      </Motion>
    </Wrapper>
  );
};

export default Mission;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.max.mobile} {
    flex-direction: column;
  }
`;

const Header = styled.div`
  flex: 2;
  p {
    max-width: 100%;
    font-weight: 200;
    font-size:1rem
  }
  h1 {
    @media ${({ theme }) => theme.device.max.mobile} {
      font-size:1.75rem;
      text-align:center;
      margin-bottom:0.7rem
    }
  }
`;
const Motion = styled.div`
  flex: 1;
`;
