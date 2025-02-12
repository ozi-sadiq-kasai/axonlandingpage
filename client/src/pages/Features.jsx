import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <h2>The Future of Clinical Trials is Here. Join the Movement. </h2>
      <p>
        We're transforming the clinical trial landscape with a cutting-edge
        platform that connects patients and researchers directly, fostering
        faster breakthroughs and healthier futures.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #a5d8ff;
  padding: 2.6rem 0 3rem 0;
  margin: 1rem 0 2.7rem 0;
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

export default Features;
