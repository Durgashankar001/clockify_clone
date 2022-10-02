import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
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
  Button,
  Text,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import axios from 'axios';

// import './modal.css'

export const getData2 = async () => {
  let res = await axios.get('https://legit-dust-8169.herokuapp.com/project');

  return res.data;
};

const TableContainethings = () => {

    const [Allclient, setAllclient] = useState([]);

    console.log(Allclient);

    useEffect(() => {
      getData2().then((res) => {
        setAllclient(res)
      });
    }, [Allclient]);

    const handleDelete = async (id) =>{
      console.log(id)
      let res = await axios.delete(
        `https://legit-dust-8169.herokuapp.com/project/${id}`
      );
      getData2().then((res) => {
        setAllclient(res)
      });
    }

  return (
    <>
      <Box bg="aliceblue" h="30" w="100%" color="grey">
        <Text fontSize="md" px={5}>
          Projects
        </Text>
      </Box>

      <TableContainer>
        <Table variant='striped' colorScheme='#e8f5fd'>
          <Thead>
            <Tr>
              <Th><Checkbox mt={3} px={5}></Checkbox></Th>
               <Th>NAME</Th>
              <Th>CLIENT</Th>
              <Th>AMOUNT</Th>
              <Th>PROGRESS</Th>
              <Th>ACCESS</Th>
              <Th>FAVOURITES</Th>
              <Th>EDIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Allclient &&
              Allclient.map((ele) => (
                <Tr bg={"#e8f5fd"}>
                  <Td><Checkbox mt={3} px={5}></Checkbox></Td>
                   <Td>{ele.name}</Td>
                  <Td>{ele.useremail}</Td>
                  <Td>0.00h</Td>
                  <Td>0.00 USD</Td>
                  <Td>public</Td>
                  <Td>
                    <AiOutlineStar
                      style={{ fontSize: '20px', marginLeft: '18px' }}
                    />
                  </Td>
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                        <Button>
                          <BsThreeDotsVertical />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>select</PopoverHeader>
                        <PopoverBody>Set as Template</PopoverBody>
                        <PopoverBody style={{cursor:"pointer"}} _hover={{background:"red",color:"white"}} onClick={()=>handleDelete(ele._id)}>Archive</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContainethings;
