import { Flex, Image, HStack, Box } from '@chakra-ui/react';

import { CloseIcon, SquareIcon, FoldIcon } from 'components/icons';

import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const itemIds = [0, 1, 2, 3, 4];

const keyframesArr = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
];

const variants = {
  visible: custom => ({
    opacity: keyframesArr[custom],
    transition: { repeat: Infinity, duration: 2 },
  }),
  hidden: custom => ({ opacity: 0 }),
};

const LoadingWindow = props => {
  return (
    <Flex
      w="280px"
      border="1px solid #666"
      bg="white"
      direction="column"
      {...props}
      role="group"
    >
      <Flex mb="5px" borderBottom="1px solid #666" p="12px">
        <HStack fontSize="16px">
          <CloseIcon />
          <SquareIcon />
          <FoldIcon />
        </HStack>
      </Flex>
      <Flex flex="1" p="20px" w="100%">
        <Flex border="1px solid #666" h="24px" w="100%" p="2px">
          <HStack spacing="2px">
            {itemIds.map(id => (
              <MotionBox
                key={id}
                custom={id}
                initial="hidden"
                animate="visible"
                variants={variants}
                h="100%"
                w="15px"
                bgColor="#FFD5D9"
                _groupHover={{ background: '#2982FA' }}
              />
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoadingWindow;
