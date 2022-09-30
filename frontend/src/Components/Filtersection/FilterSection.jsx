import React from 'react';
import './filterswection.css';
import { FiSearch } from 'react-icons/fi';
import { Button, Checkbox, Input, Portal, Text } from '@chakra-ui/react';
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
} from '@chakra-ui/react';
import ProjectHead from '../modal/ProjectHead';
import TableContainethings from '../Table/TableContainethings';
import SideBar from '../Time_Tracker/SideBar/SideBar';



const FilterSection = () => {
  return (
    <>
      <div style={{display:"flex"}}>
        <div>
          <SideBar/>
        </div>
        <div>
          <ProjectHead />

          <div className="container">
            <table width="50%">
              <tr>
                <th>Filter</th>
                <th>
                  <select name="" id="">
                    <option>Active</option>
                    <option>Archived</option>
                    <option>All</option>
                  </select>
                </th>

                <th>
                  {/* <select name="" id="">
                <option>Client</option>
                <option>
                  <input
                    type="search"
                    placeholder="Search Client"
                    className="search_client"
                  />
                </option>
                <option>Active</option>
              </select> */}

                  {/*  chakra ui used*/}

                  <Popover>
                    <PopoverTrigger>
                      <Button bg={'none'} _hover={{ background: 'none' }}>
                        Client
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Clints</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Input mt={5} mb={5} placeholder="Search client" />
                        </PopoverBody>
                        <PopoverFooter>No clients left</PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </th>

                <th>
                  {/* <select name="" id="">
                <option>Access</option>
                <option>Active</option>
                <option>Active</option>
              </select> */}

                  {/*  chakra ui used*/}

                  <Popover>
                    <PopoverTrigger>
                      <Button bg={'none'} _hover={{ background: 'none' }}>
                        Access
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Access</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Input
                            mt={5}
                            mb={5}
                            placeholder="Find members of groups..."
                          />
                          <Checkbox>Select All</Checkbox>
                        </PopoverBody>

                        <PopoverFooter>
                          <Text fontSize="xl" mb={2}>
                            Users
                          </Text>
                          <Checkbox>Users</Checkbox>
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </th>

                <th>
                  {/* <select name="" id="">
                <option>Billing</option>
                <option>
                  <Checkbox className="check" defaultChecked>
                    Billable
                  </Checkbox>
                </option>
                <option>
                  <Checkbox defaultChecked> Non billable</Checkbox>
                </option>
              </select> */}

                  {/*  chakra ui used*/}

                  <Popover>
                    <PopoverTrigger>
                      <Button bg={'none'} _hover={{ background: 'none' }}>
                        Billing
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Billing</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          <Checkbox mr={3}>Billable</Checkbox>
                          <Checkbox>Non billable</Checkbox>
                        </PopoverBody>
                        <PopoverFooter></PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </th>
              </tr>
            </table>

            <div className="search">
              <div className="search_icon">
                <FiSearch />
              </div>
              <div>
                <input type="search" placeholder="Project name" />
              </div>
            </div>
            <div className="button_apply">
              <button>APPLY FILLTER</button>
            </div>
          </div>

          <TableContainethings />
        </div>
      </div>
    </>
  );
};

export default FilterSection;
