import { Flex, Image, HStack, Text, Link, Icon } from '@chakra-ui/react';
import { FiClock, FiSearch, FiList } from 'react-icons/fi';

import { SmileIcon } from 'components/icons';

const menuList = [
  { title: 'File', link: 'https://hahow.in/cr/artschooool' },
  { title: 'Edit', link: 'https://hahow.in/cr/artschooool' },
  { title: 'Option', link: 'https://hahow.in/cr/artschooool' },
  { title: 'Window', link: 'https://hahow.in/cr/artschooool' },
  { title: 'Help', link: 'https://hahow.in/cr/artschooool' },
];

const Header = () => {
  return (
    <Flex
      w="100%"
      top="0"
      justify="center"
      bg="#2982FA"
      position="fixed"
      zIndex="50"
    >
      <Flex
        w="1040px"
        h="40px"
        px="20px"
        bg="white"
        align="center"
        justify="space-between"
      >
        <HStack>
          <SmileIcon />
          <Link href="https://www.instagram.com/artschooool/" isExternal>
            <Text fontWeight="500" pr="20px">
              ARTSCHOOOOL
            </Text>
          </Link>
          {menuList.map(item => (
            <Link
              display={{ base: 'none', lg: 'flex' }}
              key={item.title}
              fontWeight="500"
              isExternal
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </HStack>
        <HStack>
          <Icon as={FiClock} size="20px" />
          <Icon as={FiSearch} size="20px" />
          <Icon as={FiList} size="20px" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
