import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 8rem  3rem 0 3rem;
`;

export const ContentHeader = styled.div`
  h2 {
    margin-bottom: 0;
    font-size: 2rem;
    text-align: center;
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
    color:#52489C;
    font-weight:400;
  }
  p {
    max-width: 95%;
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

export const FormHeader = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0;
`;

export const FormSection = styled.h3`
  font-size: 1rem;
  color: var(--grey-500);
  margin-bottom: 0;
  margin-top:1rem;
`;

export const Label = styled.label`
  color: black;
  font-weight:400;
`;
export const Options = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const HealthOptions = styled.div`
display:flex;
flex-direction:column;
gap:0.1rem;
`
export const FormInput = styled.input`
padding:5px 20px;
border:1px solid var(--grey-200);
outline:none;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border:1px solid var(--grey-200);
`
export const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
width:100%;
border:none;
background-color:white;
button{
cursor:pointer;
}
button:hover{
background-color:#91C499;
color:#52489C;
}
`