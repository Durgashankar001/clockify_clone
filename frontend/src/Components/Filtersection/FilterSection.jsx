import React from 'react';
import './filterswection.css';
import { FiSearch } from 'react-icons/fi';
import { Button, Checkbox, Input, Portal } from '@chakra-ui/react';
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

const FilterSection = () => {
  return (
    <>
      <div className="container">
        <table width="50%">
          <tr>
            <th>Filter</th>|
            <th>
              <select name="" id="">
                <option>Active</option>
                <option>Archived</option>
                <option>All</option>
              </select>
            </th>
            |
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

              <Popover>
                <PopoverTrigger>
                  <Button bg={"none"} _hover={{background:"none"}}>Client</Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Clints</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Input mt={5} mb={5} />
                    </PopoverBody>
                    <PopoverFooter>This is the footer</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </th>
            |
            <th>
              <select name="" id="">
                <option>Access</option>
                <option>Active</option>
                <option>Active</option>
              </select>
            </th>
            |
            <th>
              <select name="" id="">
                <option>Billing</option>
                <option>
                  <Checkbox className="check" defaultChecked>
                    Billable
                  </Checkbox>
                </option>
                <option>
                  <Checkbox defaultChecked> Non billable</Checkbox>
                </option>
              </select>
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
    </>
  );
};

export default FilterSection;
