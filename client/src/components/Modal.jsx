/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ResearchType: '', 
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Use formData directly, as keys now match backend expectations
      const response = await axios.post(
        'http://localhost:4000/createResearch',
        formData
      );
      console.log('Response', response.data);
      alert('Research Created Successfully');
    } catch (err) {
      console.error('Error submitting research:', err);
      setError('Failed to submit research. Please try again.');
    } finally {
      setLoading(false);
      if (!error) onClose()
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form' >
        <div>
          <label htmlFor="fname">FirstName:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lname">LastName:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder='080000000000'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="researches">Research Areas of Interest:</label>
          <select
            id="dropdown"
            name="ResearchType"
            value={formData.ResearchType}
            onChange={handleChange}
          >
            <option value="" disabled> -- Select an option -- </option>
            <option value="Covid">Covid</option>
            <option value="Typhoid">Typhoid</option>
            <option value="Kidney">Kidney</option>
            <option value="Malaria">Malaria</option>
          </select>
        </div>
        <button type="submit" className='btn' disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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

  form{
    background-color:var(--grey-50);
    color:var(--highlights1);
    width:45vw;
  }
`;

export default Modal;
