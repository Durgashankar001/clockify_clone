import { Box, Menu } from '@chakra-ui/react'
import React from 'react'
import StopWatch from './StopWatch';
import "./Timer.css";
import { FaPlusCircle,FaStopwatch,FaCommentDots,FaDollarSign,FaTags,FaGripLinesVertical } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SideBar from './SideBar/SideBar';


const Time_Tracker = () => {
  const navigate=useNavigate();

  function tracker(){
    navigate("/tracker")
  }

  function taskadd(){
    navigate("/taskadd")
  }

  return (
    <div >
      <Box><Navbar/></Box>
      <Box className='timePage'>
        <Box className='st01'>
<SideBar/>
        </Box>
        <Box className='full'>
        <Box className='st'>
            <div>
                <input type="text" className='in1' placeholder='What are you working on?' />
            </div>
            <div className='bluep'><FaPlusCircle/><a href="" className='pin'>Project</a></div>
            <div className='bluep1'><FaGripLinesVertical className='hicon'/><FaTags className='hicon'/><FaGripLinesVertical className='hicon'/><FaDollarSign className='hicon'/><FaGripLinesVertical className='hicon'/></div>
            <div className='st2'> <StopWatch/></div>
            <div className='bunicon'><button onClick={tracker}><FaStopwatch/></button>
            <button onClick={taskadd}><FaCommentDots/></button></div>
           
         </Box>
        <div  className='wname'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>
        <div  className='wname wname1'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>

         </Box>
         </Box>
    </div>
  )
}

export default Time_Tracker
