import styled from "styled-components";

export const Wrapper = styled.div`
  //border: 1px solid red;
  // padding: 1.5rem 3rem;
  padding: 1rem;
`;

export const ContentHeader = styled.div`
  // border: 2px solid green;
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
  }
  p {
    max-width: 95%;
    // margin:0 auto;
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

export const FormHeader = styled.h2`
  //border: 3px solid blue;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0;
`;

export const FormSection = styled.h3`
  //border: 3px solid red;
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
//background-color:red;
display:flex;
flex-direction:column;
gap:0.1rem;
`
export const FormInput = styled.input`

// background-color:red;
// width:80%;
padding:5px 20px;
border:1px solid var(--grey-200);
outline:none;
`
export const TextArea = styled.textarea`
//background-color:red;
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
`