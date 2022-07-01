import { useState, useEffect } from 'react';
import {
  motion,
  useViewportScroll,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import { Flex, Image, HStack } from '@chakra-ui/react';

import postCTA from 'assets/images/posts/postCTA.jpg';
import ghost from 'assets/images/ghost.png';
import fly from 'assets/images/fly.png';

import { CloseIcon, SquareIcon, FoldIcon } from 'components/icons';
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Section04 = () => {
  const { scrollYProgress } = useViewportScroll();
  const [degree, setDegree] = useState(0);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 800], [45, -45]);
  const rotateY = useTransform(x, [0, 800], [-45, 45]);
  const rotateX2 = useTransform(y, [0, 400], [45, -45]);
  const rotateY2 = useTransform(x, [0, 1000], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  useEffect(() => {
    scrollYProgress.onChange(v => setDegree(v * 360 * 0.4));
  }, [scrollYProgress, degree]);
  const variants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({ opacity: 0, y: 50, scale: 0.75 }),
  };
  const transition = { duration: 0.5, type: 'tween' };

  return (
    <>
      <Flex
        cursor="pointer"
        overflow="hidden"
        w="100%"
        mt="0px"
        align="center"
        justify="center"
        pt="80px"
        pb="32px"
        px="40px"
        position="relative"
        onMouseMove={handleMouse}
        style={{
          placeItems: 'center',
          placeContent: 'center',
          perspective: 100,
        }}
      >
        <Flex position="absolute" zIndex="20" top="20px" right="20px">
          <MotionImage
            whileTap={{ cursor: 'grabbing' }}
            src={ghost}
            style={{
              width: 350,
              height: 287,
              borderRadius: 30,
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          ></MotionImage>
        </Flex>
        <Flex position="absolute" zIndex="20" bottom="-80px" left="70px">
          <MotionImage
            whileTap={{ cursor: 'grabbing' }}
            src={fly}
            style={{
              width: 300,
              height: 327,
              borderRadius: 30,
              rotateX: rotateX2,
              rotateY: rotateY2,
            }}
          ></MotionImage>
        </Flex>
        <Flex w="70%" position="relative">
          <MotionFlex
            p="16px"
            border="1px solid #666"
            bg="white"
            direction="column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={variants}
            transition={transition}
          >
            <Flex mb="5px">
              <HStack fontSize="16px">
                <CloseIcon />
                <SquareIcon />
                <FoldIcon />
              </HStack>
            </Flex>

            <Image src={postCTA} fallbackSrc={postCTA} />
          </MotionFlex>
        </Flex>
      </Flex>
    </>
  );
};

export default Section04;
