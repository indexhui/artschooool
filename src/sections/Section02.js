import { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import { Flex, Image, Box } from '@chakra-ui/react';

import PostWindow from 'components/PostWindow';
import LoadingWindow from 'components/LoadingWindow';
import gif03 from 'assets/images/gif/gif03.gif';
import post03 from 'assets/images/posts/post03.jpg';
import gear from 'assets/images/gear.svg';
import shelf from 'assets/images/shelf.svg';
import net from 'assets/images/net.png';
import star from 'assets/images/star.svg';
import DrawSvg from 'components/DrawSvg';

const MotionImage = motion(Image);

const Section02 = () => {
  const { scrollYProgress } = useViewportScroll();
  const [degree, setDegree] = useState(0);
  useEffect(() => {
    scrollYProgress.onChange(v => setDegree(v * 360 * 0.8));
  }, [scrollYProgress, degree]);

  return (
    <>
      <Flex
        overflow="hidden"
        w="100%"
        mt="-80px"
        justify="center"
        pt="40px"
        pb="32px"
        px="40px"
        position="relative"
      >
        <Box
          position="absolute"
          right="100px"
          bottom="20px"
          bgColor="#F4EADD"
          bgImage="linear-gradient(#1FEA80 1px, transparent 1px), linear-gradient(to right,
        #1FEA80 1px, #F4EADD 1px)"
          bgSize="20px 20px"
          h="200px"
          w="341px"
          src={net}
          objectFit="cover"
        />
        <Flex right="150" bottom="0" w="159" h="35" position="absolute">
          <DrawSvg />
        </Flex>
        <Box
          position="absolute"
          left="0"
          top="-50px"
          bgColor="#F4EADD"
          bgImage="linear-gradient(#D7CABA 1px, transparent 1px), linear-gradient(to right,
        #D7CABA 1px, #F4EADD 1px)"
          bgSize="20px 20px"
          h="341px"
          w="341px"
          src={net}
          objectFit="cover"
        />
        <MotionImage
          position="absolute"
          left="-40px"
          top="240px"
          src={star}
          style={{ rotate: degree * 5 }}
          transition={{ type: 'tween' }}
        />
        <LoadingWindow position="absolute" left="50px" bottom="30%" />
        <MotionImage
          position="absolute"
          right="40px"
          src={gear}
          alt="web inspiration"
          style={{ rotate: degree }}
          transition={{ type: 'tween' }}
        />
        <Image
          opacity=".5"
          position="absolute"
          right="130px"
          top="130px"
          src={shelf}
        />
        <Flex w="400px" pb="100px" position="relative" ml="100px">
          <PostWindow w="400px" img={post03} gif={gif03} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section02;
