import styled from 'styled-components';
import { useState } from 'react';

const Modal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState("Option 1"); // Default option

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected value
 
  };

  const handleSubmit = (event) => {
    console.log(selectedOption);
    event.preventDefault(); // Prevent form reload
    onClose()
  };
  return (
    <Wrapper>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor='fname'>FirstName</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='lname'>LastName</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' />
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input type='tel' />
        </div>
        <label htmlFor='researches'>Research Areas of Interest:</label>
        <select id='dropdown'
         value={selectedOption} onChange={handleChange}
        >
          <option value='' disabled>
            -- Select an option --
          </option>
          <option value='All Researches'>All Researches</option>
          <option value='Typhoid'>Typhoid</option>
          <option value='Kidney'>Kidney</option>
          <option value='Malaria'>Malaria</option>
        </select>
      <button type='submit'>Submit</button>
      </form>
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

export default Modal;
