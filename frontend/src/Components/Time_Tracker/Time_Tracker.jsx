import { Box, Menu } from '@chakra-ui/react'
import React from 'react'
import StopWatch from './StopWatch';
import "./Timer.css";
import { FaPlusCircle,FaStopwatch,FaCommentDots,FaDollarSign,FaTags,FaGripLinesVertical } from 'react-icons/fa';


const Time_Tracker = () => {
  return (
    <div className='timePage'>
        <Box className='st01'>
<h1>Sidebar</h1>
        </Box>
        <Box className='full'>
        <Box className='st'>
            <div>
                <input type="text" className='in1' placeholder='What are you working on?' />
            </div>
            <div className='bluep'><FaPlusCircle/><a href="" className='pin'>Project</a></div>
            <div className='bluep1'><FaGripLinesVertical className='hicon'/><FaTags className='hicon'/><FaGripLinesVertical className='hicon'/><FaDollarSign className='hicon'/><FaGripLinesVertical className='hicon'/></div>
            <div className='st2'> <StopWatch/></div>
            <div className='bunicon'><button><FaStopwatch/></button>
            <button><FaCommentDots/></button></div>
           
         </Box>
        <div  className='wname'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>
        <div  className='wname wname1'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>

         </Box>

    </div>
  )
}

export default Time_Tracker
