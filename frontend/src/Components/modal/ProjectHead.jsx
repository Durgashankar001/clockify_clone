import React from 'react'
import BasicUsage from '../modal/Modal';
import './modal.css'
import { Flex, Spacer, Text, Box } from '@chakra-ui/react';

const ProjectHead = () => {
  return (
    <>
      {/* <div className="container">
        <div className="flex_direction">
          <h2>Projects</h2>
          <button>Create new project</button>
          <BasicUsage />
        </div>
      </div> */}

      <Flex>
        <Text px={3} mb={5} fontSize="4xl">
          Projects
        </Text>
        <Spacer />
        <Box px={3} py={5}>
          <BasicUsage />
        </Box>
      </Flex>
    </>
  );
}

export default ProjectHead;