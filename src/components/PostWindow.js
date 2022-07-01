import {
  Flex,
  Image,
  HStack,
  Text,
  AspectRatio,
  Skeleton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { CloseIcon, SquareIcon, FoldIcon } from 'components/icons';

const MotionFlex = motion(Flex);

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

const PostWindow = props => {
  const { gif, img, ...rest } = props;
  return (
    <MotionFlex
      p="16px"
      w="100%"
      // w="200px"
      border="1px solid #666"
      bg="white"
      direction="column"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
      transition={transition}
      {...rest}
    >
      <Flex mb="5px">
        <HStack fontSize="16px">
          <CloseIcon />
          <SquareIcon />
          <FoldIcon />
        </HStack>
      </Flex>
      <AspectRatio ratio={3 / 4}>
        <Image src={gif} fallbackSrc={img} />
      </AspectRatio>
    </MotionFlex>
  );
};

export default PostWindow;
