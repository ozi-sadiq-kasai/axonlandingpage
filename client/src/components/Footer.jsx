import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()} <span>AxonLink</span></h5>
    </Wrapper>
  )
}


const Wrapper = styled.footer`
  text-align: center;
  h5{
  margin-bottom:0;
  color:#A6A6A6;
  font-size:0.7rem;
  }
`;

export default Footer