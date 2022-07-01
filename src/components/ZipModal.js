import {
  Modal,
  Image,
  Text,
  VStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import zip from 'assets/images/zip.svg';

const ZipModal = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack cursor="pointer">
        <Image w="60px" src={zip} onClick={onOpen} />
        <Text fontWeight="500">{props.title}</Text>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="20px">{props.content}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ZipModal;
