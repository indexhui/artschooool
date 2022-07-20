import { Flex, Text, VStack, Link, Image } from '@chakra-ui/react';
import ogImage from 'assets/images/ogImage.png';

const SectionMobile = () => {
  return (
    <Flex w="100%" pt="40px">
      <VStack bg="skin" w="100%" h="100vh" justify="center" py="40px">
        <Text>請在大螢幕打開網站，享受完整動態海報體驗</Text>
        <Text>您可以先觀賞課程概念視覺前導</Text>
        <Text>or</Text>
        <Link src="https://hahow.in/cr/artschooool">
          <VStack>
            <Text fontWeight="700">立刻加入課程募資</Text>
            <Image w="90%" src={ogImage} />
          </VStack>
        </Link>
      </VStack>
    </Flex>
  );
};

export default SectionMobile;
