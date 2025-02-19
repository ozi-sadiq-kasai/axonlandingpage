import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/questionnaire");
  };

  return (
    <Wrapper>
      <h2>The Future of Clinical Trials is Here. Join the Movement. </h2>
      <p>
        We're transforming the clinical trial landscape with a cutting-edge
        platform that connects patients and researchers directly, fostering
        faster breakthroughs and healthier futures.
      </p>
      <Button type="submit" onClick={handleNavigation}>
        Join the Waiting List
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  background-color: #a5d8ff;
  padding: 2.6rem 0 3rem 0;
  margin: 1rem 0 2.7rem 0;
  @media ${({ theme }) => theme.device.max.mobile} {
    padding: 1rem 0 2rem 0;
    margin: 0.5rem 0 1rem 0;
  }
  @media ${({ theme }) => theme.device.range.tablet} {
    padding: 1.6rem 0 2rem 0;
    margin: 1rem 0 1.7rem 0;
  }
  h2 {
    margin-bottom: 0;
    font-size: 2.4rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    @media ${({ theme }) => theme.device.max.mobile} {
      width: 90%;
      font-size: 2rem;
    }
    @media ${({ theme }) => theme.device.range.tablet} {
      width: 85%;
      font-size: 2.2rem;
    }
  }
  p {
    max-width: 100%;
    padding: 0 1rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0;
  }
`;
const Button = styled.button`
  background-color: #52489c;
  position: absolute;
  bottom: -20px;
  left: 390px;
  color: white;
  border: none;
  padding: 0.9rem 1rem;
  cursor: pointer;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: #91c499;
    box-shadow: var(--shadow-1);
    color: #52489c;
  }

  @media ${({ theme }) => theme.device.range.small} {
    left: 25%;
    bottom: -15px;
    padding: 0.4rem 1rem;
  }
  @media ${({ theme }) => theme.device.range.tablet} {
    left: 250px;
    bottom: -15px;
    padding: 0.7rem 1rem;
  }
  @media ${({ theme }) => theme.device.range.laptop} {
    left: 43%;
    bottom: -20px;
  }
  @media ${({ theme }) => theme.device.range.desktop} {
    left: 45%;
    bottom: -15px;
  }
`;
export default Join;
