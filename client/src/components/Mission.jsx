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

`;

const Header = styled.div`
flex:2;
`
const Motion = styled.div`
flex:1;
`
