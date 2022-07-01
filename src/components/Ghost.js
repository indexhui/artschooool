import { Flex, Image } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import ghost from 'assets/images/ghost.png';
// import ghost from 'assets/images/planet/ghost.png';

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const ContactPlanet = () => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <MotionFlex
      flex="1"
      display={{ base: 'none', lg: 'flex' }}
      onMouseMove={handleMouse}
      style={{
        placeItems: 'center',
        placeContent: 'center',
        borderRadius: 30,
        perspective: 500,
      }}
      // bgImage={`url('${ghost}')`}
      // bgRepeat="no-repeat"
      // bgSize="200px 200px"
      // bgPosition="center"
    >
      <MotionImage
        // cursor="grab"
        whileTap={{ cursor: 'grabbing' }}
        // drag
        // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        // whileDrag={{ scale: 0.6 }}
        // dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        // dragElastic={0.6}
        src={ghost}
        style={{
          width: 300,
          height: 300,
          borderRadius: 30,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      ></MotionImage>
    </MotionFlex>
  );
};
export default ContactPlanet;
