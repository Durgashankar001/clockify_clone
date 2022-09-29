import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal
} from '@chakra-ui/react';

// import './modal.css'

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Create new project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid_colo">
              <Input placeholder="Basic usage" />
              <Select placeholder="Select Client">
                <option value="option1"></option>
                <option value="option2">Option 2</option>
              </Select>

              <Checkbox defaultChecked>Public</Checkbox>
              <Select placeholder="No Template">
                <option value="option1">search</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancle
            </Button>
            <Button variant="ghost" colorScheme="teal">
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
