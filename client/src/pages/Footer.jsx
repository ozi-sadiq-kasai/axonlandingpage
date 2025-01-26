import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()} <span>AxonLink</span></h5>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color:var(--highlights2);
display:flex;
justify-content: center;
align-items:center;
h5{
  width:50%;
  text-align:center;
}
`

export default Footer