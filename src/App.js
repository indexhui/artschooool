import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from 'theme/theme';
import Header from 'components/Header';
import Section01 from 'sections/Section01';
import Section02 from 'sections/Section02';
import Section03 from 'sections/Section03';
import Section04 from 'sections/Section04';
import Section05 from 'sections/Section05';
import Section06 from 'sections/Section06';
import SectionEnd from 'sections/SectionEnd';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100%"
        justify="center"
        align="center"
        bg="#2982FA"
        direction="column"
      >
        <Header />
        <Flex
          direction="column"
          w={{ base: '100%', lg: '1040px' }}
          bg="skin"
          pt="40px"
        >
          <Section01 />
          <Section02 />
          <Section03 />
          <Section04 />
          <Section05 />
          <Section06 />
          <SectionEnd />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
