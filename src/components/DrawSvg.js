import { motion } from 'framer-motion';

const DrawSvg = () => {
  const variants = {
    visible: {
      opacity: 1,
      pathLength: 1,
      scale: 1.15,
      transition: {
        pathLength: { type: 'tween', duration: 1, bounce: 0 },
        scale: { duration: 0.5 },
      },
    },
    hidden: {
      opacity: 0.75,
      pathLength: 0,
    },
  };
  const ballVariants = {
    visible: {
      opacity: 1,
      transition: {
        // pathLength: { type: 'tween', duration: 2, bounce: 0, delay: 1 },
        // scale: { duration: 0.5 },
        delay: 1,
        duration: 0.25,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.svg
      width="159"
      height="35"
      viewBox="0 0 159 35"
      initial="hidden"
      whileInView="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_31_2)">
        <motion.path
          variants={variants}
          d="M0.0949097 22.6783L59.1209 0.796661L16.7019 34.7876L77.8156 1.75266L49.9633 31.9727L98.6455 3.61153L77.009 30.1138L131.907 1.27466L107.376 26.3961L158.905 9.66616"
          stroke="black"
        />
      </g>
    </motion.svg>
  );
};

export default DrawSvg;
