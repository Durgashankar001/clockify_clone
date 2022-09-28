import { Box, Menu } from '@chakra-ui/react'
import React from 'react'
import StopWatch from './StopWatch';
import "./Timer.css";

const Time_Tracker = () => {
  return (
    <div className='timePage'>
        <Box className='st01'>
<h1>Sidebar</h1>
        </Box>
        <Box className='st'>
            <div>
                <input type="text" className='in1' placeholder='What are you working on?' />
            </div>
            <div><Menu/></div>
            <div className='st2'> <StopWatch/></div>
           
         </Box>
    </div>
  )
}

export default Time_Tracker
