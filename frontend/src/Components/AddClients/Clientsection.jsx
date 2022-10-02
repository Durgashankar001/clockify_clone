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
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../Time_Tracker/SideBar/SideBar';
import Navbar from '../Navbar/Navbar';
import Inner_Navbar from '../Time_Tracker/SideBar/Inner_Navbar';

const getData = async () => {
  let res = await axios.get('https://legit-dust-8169.herokuapp.com/client');

  return res.data;
};

function Clientsection() {
  const [client, setClient] = useState('');
  const [Allclient, setAllclient] = useState([]);
  const [search, setSearch] = useState('');

  console.log(Allclient);

  useEffect(() => {
    getData().then((res) => {
      setAllclient(res);
    });
  }, []);

  console.log(client);

  const handalAdd = async () => {
    await axios.post('https://legit-dust-8169.herokuapp.com/client/new', {
      name: client,
    });

    getData().then((res) => {
      setAllclient(res);
    });
  };

  return (
    <>
      <Box>
        <Inner_Navbar />
      </Box>
      <div style={{ display: 'flex' }}>
        <div>
          <SideBar />
        </div>
        <div style={{background:"#f2f6f8",paddingTop:"4rem",marginTop:"0px",width:"100%",paddingLeft:"1rem",paddingRight:"1rem"}}>
          <div >
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

                <Input
                  placeholder="Search by name"
                  htmlSize={8}
                  width="150px"
                  mr={600}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
              <div>
                <Input
                  name="client"
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="Add new client"
                  htmlSize={12}
                  width="150px"
                  mr="15px"
                />
                <Button
                  colorScheme="blue"
                  px="10"
                  py="10px"
                  onClick={handalAdd}
                >
                  Add
                </Button>
              </div>
            </Flex>

            <Box bg="aliceblue" h="30" w="100%" color="grey" mt={30}>
              <TableContainer>
                <Table variant='striped' colorScheme='#e8f5fd'>
                  <Thead>
                    <Tr>
                      <Th>NAME</Th>
                      <Th>Address</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Allclient &&
                      Allclient.filter((ele) => {
                        if (search === '') {
                          return ele;
                        } else if (
                          ele.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return ele;
                        }
                      }).map((ele) => (
                        <Tr bg={"#e8f5fd"}>
                          <Td>{ele.name}</Td>
                          <Td>{ele.address}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clientsection;
