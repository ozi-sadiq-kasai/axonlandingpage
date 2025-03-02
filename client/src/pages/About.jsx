import styled from "styled-components";
import Challanges from "../components/Challanges";
import Mission from "../components/Mission";
import Modal from "../components/Modal";
import Join from "../components/Join";
import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    console.log("modalclosed", showModal);
  };

  return (
    <Wrapper>
      <Mission />
      <Join />
      <Challanges />
      {showModal && <Modal onClose={handleCloseModal} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem  3rem 0 3rem;
  @media ${({ theme }) => theme.device.range.small} {
    padding: 4rem 0.5rem;
  }
`;

export default About;
