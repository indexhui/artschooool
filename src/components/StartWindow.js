import {
  Flex,
  Image,
  HStack,
  Text,
  AspectRatio,
  Skeleton,
  Link,
} from '@chakra-ui/react';
import { CloseIcon, SquareIcon, FoldIcon } from 'components/icons';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      type: 'tween',
    },
  }),
  hidden: custom => ({ opacity: 0, y: 50, scale: 0.75 }),
};

const transition = { duration: 0.5, type: 'tween' };
const StartWindow = props => {
  return (
    <MotionFlex
      custom={props.delay}
      p="16px"
      w="100%"
      zIndex="20"
      // w="200px"
      border="1px solid #666"
      bg="white"
      direction="column"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={variants}
      transition={transition}
      {...props}
    >
      <Flex mb="5px" justify="flex-end">
        <CloseIcon />
      </Flex>
      <Flex
        h="70px"
        bg="#E5E5E5"
        direction="column"
        align="center"
        justify="center"
      >
        <Text>Let's start</Text>
        <Link>
          <Flex
            bg="#2984FC"
            w="100px"
            h="20px"
            align="center"
            justify="center"
            color="white"
          >
            OK
          </Flex>
        </Link>
      </Flex>
    </MotionFlex>
  );
};
export default StartWindow;
