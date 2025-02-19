import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    navigate("/about");
  };

  return (
    <Wrapper>
      <Content>
        <div>
          <h2>Thank You!</h2>
          <p>Thank you for taking part in the survey.</p>
        </div>
        <button onClick={handleClose} className="btn">
          Close
        </button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  button:hover{
  background-color:#91C499;
  color:#52489C;
  }
`;
export default Modal;
