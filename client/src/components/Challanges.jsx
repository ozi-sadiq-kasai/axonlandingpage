import styled from "styled-components";
import { GrSchedules } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoAlarmOutline } from "react-icons/io5";
import { useEffect } from "react";

const Challenges = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll(".animate-target");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction = entry.target.getAttribute("data-direction");
            entry.target.classList.add("animate");
            entry.target.classList.add(`animate-${direction}`);
          } else {
            const direction = entry.target.getAttribute("data-direction");
            entry.target.classList.remove("animate");
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
        <li className="animate-target" data-direction="left">
          <div>
            <span>
              <GoGear size={"22px"} color={"#91C499"} />
            </span>
            <h3>Inefficient Process</h3>
          </div>
          <p>
            Replacing manual, time-consuming workflows and unaudited tools like
            spreadsheets that lack automation and reliability.
          </p>
        </li>
        <li className="animate-target" data-direction="right">
          <div>
            <span>
              <RiUserCommunityLine size={"22px"} color={"#91C499"} />
            </span>{" "}
            <h3>Communication Gaps</h3>
          </div>
          <p>
            Eliminating untrackable communication methods (e.g., emails) to
            ensure clear, auditable, and streamlined participant and staff
            interactions.
          </p>
        </li>
        <li className="animate-target" data-direction="left">
          <div>
            <span>
              <GrSchedules size={"22px"} color={"#91C499"} />
            </span>
            <h3>Scheduling Challenges</h3>
          </div>
          <p>
            Preventing scheduling errors and deviations by automating and
            adapting visit schedules to participants&apos; needs.
          </p>
        </li>
        <li className="animate-target" data-direction="right">
          <div>
            <span>
              <IoAlarmOutline size={"22px"} color={"#91C499"} />
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
  background-color: white;
  padding: 1.2rem 0;
  h2 {
    font-size: 2rem;
    color: var(--grey-700);
    text-align: center;
    font-weight: 600;
    margin-bottom: 0.3rem;
    @media ${({ theme }) => theme.device.min.tablet} {
      font-size: 3rem;
    }
 
  }
`;

const StyledList = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  row-gap: 1rem;
  justify-content: center;
 @media ${({ theme }) => theme.device.range.small} {
     grid-template-columns: repeat(1, 1fr);
     column-gap:0rem
     row-gap:0rem
    }  
  div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    h3 {
      font-size: 0.75rem;
      margin: 0;
      @media ${({ theme }) => theme.device.min.tablet} {
        font-size: 1.9rem;
      }
    }
   
  }
  li {
    border: 2px solid var(--grey-300);
    width: 100%;
    height: 250px;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    color: var(--grey-500);
    box-shadow: var(--shadow-2);
    overflow: hidden;
    p {
      max-width: 100%;
      letter-spacing: 0;
      font-size: 12.3px;
      color: black;
      margin-bottom: 0;
      text-align: left;
      @media ${({ theme }) => theme.device.min.tablet} {
        font-size: 1.2rem;
      }
    }
    @media ${({ theme }) => theme.device.min.tablet} {
      padding: 0.8rem;
    }
        @media ${({ theme }) => theme.device.range.laptop} {
        height:200px;
      }
  }
  li.animate {
    opacity: 1;
  }
  li.animate-left {
    transform: translateX(20px);
     @media ${({ theme }) => theme.device.range.small} {
     transform:translateY(5px)
     }
    
  }
  li.animate-right {
    transform: translateX(-20px);
       @media ${({ theme }) => theme.device.range.small} {
     transform:translateY(5px)
     }
  }
`;

export default Challenges;
