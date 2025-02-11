import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Computer from "../../assets/computer.jpg";
import Survey from "../../assets/survey.jpg";
import Medical from "../../assets/medical.jpg";
import Meetings from "../../assets/meetings.jpg";

export default function MotionAnimation() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  // Scroll the container automatically in a circular way
  useEffect(() => {
    const scrollContainer = ref.current;
    let scrollPos = 0;
    const scrollWidth =
      scrollContainer.scrollWidth - scrollContainer.clientWidth;

    function autoScroll() {
      scrollPos += 1; // Adjust the increment for scroll speed
      if (scrollPos >= scrollWidth) {
        scrollPos = 0; // Loop back to the start
      }
      scrollContainer.scrollLeft = scrollPos;

      requestAnimationFrame(autoScroll); // Continue the loop
    }

    autoScroll(); // Start the auto-scroll loop
  }, []);

  return (
    <div id="example">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <motion.ul ref={ref} style={{ maskImage }}>
        <li>
          <img src={Computer} alt="" />
        </li>
        <li>
          <img src={Survey} alt="" />
        </li>
        <li>
          <img src={Medical} alt="" />
        </li>
        <li>
          <img src={Meetings} alt="" />
        </li>
      </motion.ul>
      <StyleSheet />
    </div>
  );
}

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue();
  `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, "linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)", { duration: 0.5 });
    } else if (value === 1) {
      animate(maskImage, "linear-gradient(90deg, #0000, #000 3%, #000 97%, #0000)", { duration: 0.5 });
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage
        `linear-gradient(90deg, #0000, #000 3%, #000 97%, #0000)`
      );
    }
  });

  return maskImage;
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            #example {
            border:3px solid red;
              width: 40vw;
            }

            #example #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #example ul {
            border:1px solid orange;
                display: flex;
                align-items:center;
                list-style: none;
                overflow-x: scroll;
                // flex: 0 0 400px;
                margin: 0 auto;
                gap: 20px;
            }
                #example img{
                border:1px solid red;
                height:400px;
                widht:400px;
                }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }   
    `}</style>
  );
}
