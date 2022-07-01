import { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import { Flex, Image, Box, VStack } from '@chakra-ui/react';

import PostWindow from 'components/PostWindow';
import LoadingWindow from 'components/LoadingWindow';
import LogoSvg from 'components/LogoSvg';
import gif03 from 'assets/images/gif/gif03.gif';
import post05 from 'assets/images/posts/post05.jpg';
import gear from 'assets/images/gear.svg';
import shelf02 from 'assets/images/shelf02.svg';
import net from 'assets/images/net.png';
import star from 'assets/images/star.svg';
import leftContent from 'assets/images/leftContent.png';
import FolderModal from 'components/FolderModal';

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
        mt="0px"
        justify="center"
        pt="40px"
        pb="32px"
        px="40px"
        position="relative"
      >
        <VStack position="absolute" right="25px" top="20%">
          <FolderModal title="ARTSCHOOOOL" content="關於我們" />
        </VStack>

        <Flex w="40%" pr="5%">
          <Image objectFit="contain" src={leftContent} />
        </Flex>
        <Flex w="350px" mr="70px" position="relative">
          <PostWindow img={post05} gif={post05} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section04;
