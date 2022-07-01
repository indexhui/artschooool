import { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import { Flex, Image, Box } from '@chakra-ui/react';

import PostWindow from 'components/PostWindow';
import LoadingWindow from 'components/LoadingWindow';
import LogoSvg from 'components/LogoSvg';
import gif03 from 'assets/images/gif/gif03.gif';
import post06 from 'assets/images/posts/post06.jpg';
import post07 from 'assets/images/posts/post07.jpg';
import gear from 'assets/images/gear.svg';
import shelf02 from 'assets/images/shelf02.svg';
import net from 'assets/images/net.png';
import star from 'assets/images/star.svg';
import transparent from 'assets/images/transparent.png';

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
        // overflowX="hidden"
        w="100%"
        mt="0px"
        align="center"
        justify="center"
        pt="40px"
        pb="32px"
        px="40px"
        position="relative"
      >
        <Box
          position="absolute"
          left="0px"
          top="360px"
          bgColor="#F4EADD"
          bgImage="linear-gradient(#1FEA80 1px, transparent 1px), linear-gradient(to right,
        #1FEA80 1px, #F4EADD 1px)"
          bgSize="20px 20px"
          h="200px"
          w="341px"
          src={net}
          objectFit="cover"
        />
        <Box
          position="absolute"
          right="0"
          top="-200px"
          bgColor="#F4EADD"
          bgImage="linear-gradient(#D7CABA 1px, transparent 1px), linear-gradient(to right,
        #D7CABA 1px, #F4EADD 1px)"
          bgSize="20px 20px"
          h="641px"
          w="341px"
          src={net}
          objectFit="cover"
        />
        <Flex w="320px" mb="220px" ml="50px" mr="70px" position="relative">
          <Image
            w="320px"
            position="absolute"
            top="-40px"
            left="-40px"
            src={transparent}
          />
          <PostWindow img={post06} gif={post06} zIndex="10" />
        </Flex>
        <Flex w="400px" mt="300px" mr="50px" position="relative">
          <Image
            src={shelf02}
            position="absolute"
            left="-30px"
            top="30px"
            w="350px"
            opacity="0.4"
          />
          <PostWindow img={post07} gif={post07} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section04;
