import { Flex, Image, Box, VStack } from '@chakra-ui/react';
import PostWindow from 'components/PostWindow';
import transparent from 'assets/images/transparent.png';
import frame from 'assets/images/frame.png';
import JumpBall from 'components/JumpBall';
import post01 from 'assets/images/posts/post01.jpg';
import gif01 from 'assets/images/gif/gif01.gif';
import post02 from 'assets/images/posts/post02.jpg';
import gif02 from 'assets/images/gif/gif02.gif';
import ZipModal from 'components/ZipModal';

const zipList = [
  {
    title: 'AE',
    content:
      'AI 到 AE 的前置設定｜將 AI 素材、漸層和躁點快速匯入 AE，觀念眉角｜動畫keyframe、動態曲線、格率介紹、四種遮罩使用邏輯。',
    link: '',
  },
  {
    title: 'C4D',
    content: '觀念運用｜功能區塊、物件圖層管理區塊、屬性區塊、動畫區塊',
    link: '',
  },
];

const Section01 = () => {
  return (
    <>
      <Flex
        w="100%"
        justify="flex-end"
        pt="40px"
        pb="32px"
        px="40px"
        position="relative"
      >
        <VStack
          position="absolute"
          w="200px"
          direction="column"
          left="48px"
          top="50px"
          spacing="24px"
        >
          {zipList.map((zip, index) => (
            <ZipModal key={zip.title} title={zip.title} content={zip.content} />
          ))}
        </VStack>
        <Flex w="400px" position="relative">
          <PostWindow img={post01} gif={gif01} zIndex="10" />
          <Image
            right="-20px"
            bottom="-20px"
            position="absolute"
            w="300px"
            h="400px"
            src={transparent}
          />
          <Image
            left="-50px"
            top="40px"
            position="absolute"
            w="200px"
            h="300px"
            src={frame}
          />
        </Flex>
      </Flex>
      <Flex w="100%" mt="-180px" px="40px" pl="15%">
        <Flex w="300px" position="relative">
          <Box position="absolute" top="-120px" left="-30px" zIndex="20">
            <JumpBall />
          </Box>
          <PostWindow gif={gif02} img={post02} zIndex="10" />
        </Flex>
      </Flex>
    </>
  );
};

export default Section01;
