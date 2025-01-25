
useEffect(() => {
    const blocks = document.querySelectorAll('.block');
    const blocksRight = document.querySelectorAll('.blocksgrey');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate'); // Remove this line if you want the animation to happen only once
                }
            });
        },
        // { threshold: 0.3 } // Trigger animation when 30% of the block is visible
    );

    blocks.forEach((block) => observer.observe(block));
    blocksRight.forEach((blocksgrey) =>
        observer.observe(blocksgrey)
    );

    // Clean up the observer
    return () => observer.disconnect();
}, []);

//optimised code 
useEffect(() => {
const blocks = document.querySelectorAll('.block, .blocksgrey');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Trigger animation once
            }
        });
    },
    { threshold: 0.3 } // Trigger animation when 30% of the block is visible
);

blocks.forEach((block) => observer.observe(block));

// Clean up the observer
return () => observer.disconnect();
}, []);


const Wrapper = styled.section`
.animate-target {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.5s ease-in-out;
    }

.animate {
    opacity: 1;
    transform: translateX(10px);
}
`