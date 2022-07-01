import { motion } from 'framer-motion';

const RoundSvg = () => {
  const variants = {
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { type: 'tween', duration: 1, bounce: 0 },
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
      width="250"
      height="360"
      viewBox="0 0 250 360"
      initial="hidden"
      whileInView="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.path
          variants={variants}
          d="M249.772 0.25H0.227905V359.75H249.772V0.25Z"
          fill="white"
          stroke="black"
        />
        <motion.path
          variants={ballVariants}
          d="M60.1988 81.3887L75.3737 85.5381L70.9078 71.2901L75.1915 57.542L60.0165 61.6914L45.0693 57.692L49.8542 71.64L45.7985 85.8881L60.1988 81.3887Z"
          fill="#FFBB00"
        />
        <motion.path
          variants={variants}
          d="M126.276 277.711C181.998 277.711 227.169 261.148 227.169 240.717C227.169 220.285 181.998 203.722 126.276 203.722C70.5542 203.722 25.3828 220.285 25.3828 240.717C25.3828 261.148 70.5542 277.711 126.276 277.711Z"
          stroke="black"
        />
        <motion.path
          variants={variants}
          d="M25.3828 128.732C25.3828 108.285 70.5432 91.7373 126.276 91.7373C182.009 91.7373 227.169 108.285 227.169 128.732C227.169 149.179 182.009 165.727 126.276 165.727"
          stroke="black"
        />
        <motion.path
          variants={variants}
          d="M126.276 333.704C181.998 333.704 227.169 317.14 227.169 296.709C227.169 276.277 181.998 259.714 126.276 259.714C70.5542 259.714 25.3828 276.277 25.3828 296.709C25.3828 317.14 70.5542 333.704 126.276 333.704Z"
          stroke="black"
        />
        <motion.path
          variants={ballVariants}
          d="M126.276 221.719C181.998 221.719 227.169 205.156 227.169 184.724C227.169 164.293 181.998 147.729 126.276 147.729C70.5542 147.729 25.3828 164.293 25.3828 184.724C25.3828 205.156 70.5542 221.719 126.276 221.719Z"
          stroke="black"
        />
        <motion.path
          variants={ballVariants}
          d="M126.276 109.385C181.998 109.385 227.169 92.8216 227.169 72.3899C227.169 51.9582 181.998 35.395 126.276 35.395C70.5542 35.395 25.3828 51.9582 25.3828 72.3899C25.3828 92.8216 70.5542 109.385 126.276 109.385Z"
          stroke="black"
        />
        <motion.path
          variants={ballVariants}
          d="M126.276 165.727C70.5432 165.727 25.3828 149.179 25.3828 128.732"
          stroke="black"
        />
      </g>
    </motion.svg>
  );
};

export default RoundSvg;
