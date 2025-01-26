import styled from 'styled-components';
import { GrSchedules } from 'react-icons/gr';
import { GoGear } from 'react-icons/go';
import { RiUserCommunityLine } from 'react-icons/ri';
import { IoAlarmOutline } from 'react-icons/io5';
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
          <div>
            <span>
              <GoGear size={'24px'} color={'#91C499'} />
            </span>
            <h3>Inefficient Process</h3>
          </div>
          <p>
            Replacing manual, time-consuming workflows and unaudited tools like
            spreadsheets that lack automation and reliability.
          </p>
        </li>
        <li className='animate-target' data-direction='right'>
          <div>
            <span>
              <RiUserCommunityLine size={'24px'} color={'#91C499'} />
            </span>{' '}
            <h3>Communication Gaps</h3>
          </div>
          <p>
            Eliminating untrackable communication methods (e.g., emails) to
            ensure clear, auditable, and streamlined participant and staff
            interactions.
          </p>
        </li>
        <li className='animate-target' data-direction='left'>
          <div>
            <span>
              <GrSchedules size={'24px'} color={'#91C499'} />
            </span>
            <h3>Scheduling Challenges</h3>
          </div>
          <p>
            Preventing scheduling errors and deviations by automating and
            adapting visit schedules to participants&apos; needs.
          </p>
        </li>
        <li className='animate-target' data-direction='right'>
          <div>
            <span>
              <IoAlarmOutline size={'24px'} color={'#91C499'} />
            </span>
            <h3>Participant Engagement</h3>
          </div>
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
  background-color: var(--grey-50);
  padding-bottom: 2.5rem;
  h2 {
    color: var(--grey-700);
    text-align: center;
    font-weight: 600;
  }
`;

const StyledList = styled.ul`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  row-gap: 2rem;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    h3 {
      margin: 0;
    }
  }
  li {
    border: 2px solid var(--grey-300);
    width: 100%;
    height: 250px;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    color: var(--grey-500);
    padding: 0.8rem 1rem;
    box-shadow: var(--shadow-2);
    overflow: hidden;
    p {
      max-width: 70%;
      margin: 0 auto;
    }
  }
  li.animate {
    opacity: 1;
  }
  li.animate-left {
    transform: translateX(20px);
  }
  li.animate-right {
    transform: translateX(-20px);
  }
`;

export default Challenges;
