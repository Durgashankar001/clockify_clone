import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Spacer,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

function Clientsection() {
  return (
    <div style={{ padding: '20px' }}>
      <Text fontSize="xl" mb={30} px="4" py="4">
        Clients
      </Text>

      <Flex justifyContent="space-between">
        <div style={{ display: 'flex' }}>
          <Select
            placeholder="Show active"
            htmlSize={8}
            width="150px"
            mr="15px"
          >
            <option value="option2">Show archived</option>
            <option value="option3">Show all</option>
          </Select>

          <Input placeholder="Search by name" htmlSize={8} width="150px" />
        </div>
        <div>
          <Input
            placeholder="Add new client"
            htmlSize={12}
            width="150px"
            mr="15px"
          />
          <Button colorScheme="blue" px="10" py="10px">
            Add
          </Button>
        </div>
      </Flex>

      <Box bg="aliceblue" h="30" w="100%" color="grey" mt={30}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>Address</Th>
              </Tr>
            </Thead>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Clientsection;
