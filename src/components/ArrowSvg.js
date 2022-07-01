import { motion } from 'framer-motion';

const ArrowSvg = () => {
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
      width="80"
      height="75"
      viewBox="0 0 80 75"
      initial="hidden"
      whileInView="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.path
          variants={variants}
          d="M0.159912 69.0675C6.98203 75.7076 18.7608 76.7961 25.956 70.6459C33.2045 64.4412 33.7375 51.4332 26.4357 45.3375C25.6896 44.7388 24.8368 44.1401 23.8774 44.1401C20.9994 44.0312 20.0933 48.3854 21.5323 50.9434C24.4104 56.1684 31.4457 57.0936 37.3085 56.2772C41.9454 55.6241 46.9554 53.8824 49.1406 49.6372C50.5263 46.9703 50.473 43.7591 50.0467 40.7656C49.3005 35.8672 47.3818 31.0777 44.6103 26.9957C43.7575 25.7438 42.3718 24.3832 40.9327 24.9274C39.3338 25.5261 39.3338 27.8121 39.9201 29.3904C42.3718 35.7039 50.3131 38.3708 56.7089 36.5748C71.6856 32.275 74.1373 15.2939 73.8708 1.63281"
          stroke="black"
        />
        <motion.path
          variants={ballVariants}
          d="M68.4344 12.0282L73.551 0.598633L79.7336 11.2118"
          stroke="black"
        />
      </g>
    </motion.svg>
  );
};

export default ArrowSvg;
