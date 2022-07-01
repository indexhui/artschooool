import { useState, useEffect } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import { Flex, Image, VStack } from '@chakra-ui/react';

import PostWindow from 'components/PostWindow';
import FolderModal from 'components/FolderModal';
import LogoSvg from 'components/LogoSvg';
import post04 from 'assets/images/posts/post04.jpg';
import shelf02 from 'assets/images/shelf02.svg';

const MotionImage = motion(Image);

const folderList = [
  {
    title: 'DESIGN',
    content: 'DESIGN',
    link: '',
  },
  {
    title: 'THINK',
    content: 'THINK',
    link: '',
  },
  {
    title: 'BEAUTY',
    content: 'BEAUTY',
    link: '',
  },
];

const Section03 = () => {
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
        mt="-200px"
        justify="flex-start"
        pt="40px"
        pb="32px"
        px="40px"
        position="relative"
      >
        <VStack position="absolute" left="32px" top="30%">
          {folderList.map((zip, index) => (
            <FolderModal
              key={zip.title}
              title={zip.title}
              content={zip.content}
            />
          ))}
        </VStack>
        <Flex position="absolute" right="-350px" bottom="100px">
          <LogoSvg />
        </Flex>
        <Flex w="350px" ml="180px" position="relative">
          <Image
            src={shelf02}
            position="absolute"
            left="-30px"
            top="30px"
            w="350px"
            opacity="0.5"
          />
          <PostWindow img={post04} gif={post04} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section03;
