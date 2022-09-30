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

import { useEffect, useState } from 'react';
import axios from 'axios';

// import './modal.css'

const getData = async () => {
  let res = await axios.get('http://localhost:8080/client');

  return res.data;
};




export default function BasicUsage() {



  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Allclient, setAllclient] = useState([]);
  const [name, setName] = useState("");
  const [client, setClient] = useState('');

  console.log(name)
  console.log(client);

  const handalAdd = async () => {
    await axios.post('http://localhost:8080/project/new', {
      name: name,
      tag: 'active',
      billable: false,
      useremail: client
    });

    onClose()
  }




  useEffect(() => {
    getData().then((res) => {
      setAllclient(res);
    });
  }, []);
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
              <Input
                placeholder="Basic usage"
                onChange={(e) => setName(e.target.value)}
              />
              <Select onChange={(e) => setClient(e.target.value)} placeholder="Select Client">
                {Allclient &&
                  Allclient.map((ele) => (
                    <option value={ele.name}>{ele.name}</option>
                  ))}
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
              Cancel
            </Button>
            <Button variant="ghost" colorScheme="teal" onClick={handalAdd}>
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
