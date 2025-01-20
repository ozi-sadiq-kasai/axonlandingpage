import styled from 'styled-components';
import { useEffect } from 'react';

const Challenges = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.animate-target');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction = entry.target.getAttribute('data-direction');
            entry.target.classList.add('animate');
            entry.target.classList.add(`animate-${direction}`);
          } else {
            const direction = entry.target.getAttribute('data-direction');
            entry.target.classList.remove('animate');
            entry.target.classList.remove(`animate-${direction}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <h2>Challenges</h2>
      <StyledList>
        <li className='animate-target' data-direction='left'>
          <h3>Inefficient Process</h3>
          <p>
            Replacing manual, time-consuming workflows and unaudited tools like
            spreadsheets that lack automation and reliability.
          </p>
        </li>
        <li className='animate-target' data-direction='right'>
          <h3>Communication Gaps</h3>
          <p>
            Eliminating untrackable communication methods (e.g., emails) to
            ensure clear, auditable, and streamlined participant and staff
            interactions.
          </p>
        </li>
        <li className='animate-target' data-direction='left'>
          <h3>Scheduling Challenges</h3>
          <p>
            Preventing scheduling errors and deviations by automating and
            adapting visit schedules to participants&apos; needs.
          </p>
        </li>
        <li className='animate-target' data-direction='right'>
          <h3>Participant Engagement</h3>
          <p>
            Enhancing participant adherence and experience by providing a
            centralized app for reminders, schedules, and secure storage of
            trial-related information.
          </p>
        </li>
      </StyledList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
background-color:var(--grey-50);
h2{
  color:red;
  text-align:center;
}
`;

const StyledList = styled.ul`
  margin: 0 auto;
  border: 1px solid red;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-content:center;

  li {
    border: 2px solid purple;
    width: 80%;
    height: 300px;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    color:black;
    margin:0 auto;
  }
  li.animate {
    opacity: 1;
  }
  li.animate-left {
    transform: translateX(20px);
    background-color:red;
  }
  li.animate-right {
    transform: translateX(-20px);
  }
`;

export default Challenges;
