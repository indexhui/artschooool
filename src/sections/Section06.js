import { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import { Flex, Image, Box } from '@chakra-ui/react';

import PostWindow from 'components/PostWindow';
import LoadingWindow from 'components/LoadingWindow';
import StartWindow from 'components/StartWindow';
import ArrowSvg from 'components/ArrowSvg';
import RoundSvg from 'components/RoundSvg';
import gif03 from 'assets/images/gif/gif03.gif';

import post08 from 'assets/images/posts/post08.jpg';
import panel from 'assets/images/panel.jpg';
import shelf02 from 'assets/images/shelf02.svg';
import net from 'assets/images/net.png';
import starWhite from 'assets/images/starWhite.svg';

const MotionImage = motion(Image);

const Section04 = () => {
  const { scrollYProgress } = useViewportScroll();
  const [degree, setDegree] = useState(0);
  useEffect(() => {
    scrollYProgress.onChange(v => setDegree(v * 360 * 0.4));
  }, [scrollYProgress, degree]);

  return (
    <>
      <Flex
        overflow="hidden"
        w="100%"
        mt="-50px"
        align="center"
        justify="center"
        pt="40px"
        pb="180px"
        px="40px"
        position="relative"
      >
        <Flex position="absolute" left="100px" top="20px">
          <RoundSvg />
        </Flex>
        <Image src={panel} position="absolute" right="100px" />
        <StartWindow
          position="absolute"
          w="400px"
          bottom="80px"
          right="200px"
          delay="0"
        />
        <StartWindow
          delay="1"
          position="absolute"
          w="400px"
          bottom="60px"
          right="180px"
        />
        <StartWindow
          delay="2"
          position="absolute"
          w="400px"
          bottom="40px"
          right="160px"
        />
        <StartWindow
          delay="3"
          position="absolute"
          w="400px"
          bottom="20px"
          right="140px"
        />
        <StartWindow
          delay="4"
          position="absolute"
          w="400px"
          bottom="0px"
          right="120px"
        />

        <Flex w="350px" mr="150px" position="relative">
          <MotionImage
            position="absolute"
            right="-170px"
            top="100px"
            src={starWhite}
            style={{ rotate: degree * 5 }}
            transition={{ type: 'tween' }}
          />
          <Flex position="absolute" right="-100px" bottom="80px">
            <ArrowSvg />
          </Flex>
          <PostWindow img={post08} gif={post08} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section04;
