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

const TableContainethings = () => {
  return (
    <>
      <Box bg="aliceblue" h="30" w="100%" color="grey">
        <Text fontSize="md" px={5}>
          Projects
        </Text>
      </Box>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Checkbox mt={3} px={5}></Checkbox> <Th>NAME</Th>
              <Th>CLIENT</Th>
              <Th>AMOUNT</Th>
              <Th>PROGRESS</Th>
              <Th>ACCESS</Th>
              <Th>FAVOURITES</Th>
              <Th>EDIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Checkbox mt={8} px={5}></Checkbox> <Td>Name</Td>
              <Td>-</Td>
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
                    <PopoverBody>Archive</PopoverBody>
                  </PopoverContent>
                </Popover>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableContainethings;
