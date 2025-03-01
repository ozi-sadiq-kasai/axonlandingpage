import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import Computer from "../../assets/computer.jpg";
import Survey from "../../assets/survey.jpg";
import Medical from "../../assets/medical.jpg";
import Meetings from "../../assets/meetings.jpg";

export default function MotionAnimation() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  useEffect(() => {
    const scrollContainer = ref.current;
    let scrollPos = 0;
    const scrollWidth =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;

    function autoScroll() {
      scrollPos += 2.2
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }, []);

  return (
    <StyledExample>
      <StyledProgressSVG width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </StyledProgressSVG>
      <StyledUl ref={ref} style={{ maskImage }}>
        <li>
          <StyledImage src={Computer} alt="Computer" />
        </li>
        <li>
          <StyledImage src={Survey} alt="Survey" />
        </li>
        <li>
          <StyledImage src={Medical} alt="Medical" />
        </li>
        <li>
          <StyledImage src={Meetings} alt="Meetings" />
        </li>
      </StyledUl>
    </StyledExample>
  );
}

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, #0000, #000 2%, #000 98%, #0000)`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 2%, #000 98%, #0000)`,
        { duration: 0.5 }
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 2%, #000 98%, #0000)`,
        { duration: 0.5 }
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, #0000, #000 2%, #000 98%, #0000)`,
        { duration: 0.5 }
      );
    }
  });

  return maskImage;
}

const StyledExample = styled.div`
  width: 40vw;
  position: relative;
  @media ${({ theme }) => theme.device.max.mobile} {
    border: none;
    width: 80vw;
  }
`;

const StyledProgressSVG = styled.svg`
  position: absolute;
  top: -65px;
  left: -15px;
  transform: rotate(-90deg);

  circle {
    stroke-dashoffset: 0;
    stroke-width: 10%;
    fill: none;
  }

  .indicator {
    stroke: var(--accent);
  }
`;

const StyledUl = styled(motion.ul)`
  display: flex;
  align-items: center;
  list-style: none;
  overflow-x: scroll;
  margin: 0 auto;
  gap: 20px;
  @media ${({ theme }) => theme.device.max.mobile} {
    gap: 7px;
  }


  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: #fff3;
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent);
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: #fff3;
  }
`;

const StyledImage = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 20px;
  @media ${({ theme }) => theme.device.max.mobile} {
    height: 200px;
    width: 200px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 300px;
    width: 300px;
  }
`;
