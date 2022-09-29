import { Box, Menu } from '@chakra-ui/react'
import React from 'react'
import StopWatch from './StopWatch';
import "./Timer.css";
import { FaPlusCircle,FaStopwatch,FaCommentDots,FaDollarSign,FaTags,FaGripLinesVertical,FaRegCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AddPage = () => {
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
    <h1>Sidebar</h1>
            </Box>
            <Box className='st'>
                <div>
                    <input type="text" className='in12' placeholder='What are you working on?' />
                </div>
                <div className='bluep'><FaPlusCircle/><a href="" className='pin'>Project</a></div>
                <div className='bluep1'><FaGripLinesVertical className='hicon'/><FaTags className='hicon'/><FaGripLinesVertical className='hicon'/><FaDollarSign className='hicon'/><FaGripLinesVertical className='hicon'/>
                <input type="text" placeholder='00:00' className='in22'  />-
                <input type="text" placeholder='00:00' className='in22' />
                
                </div>
                <div className='Today'>  <FaRegCalendarAlt/> <h1 className='h12'>Today</h1></div>
                <div className='st2'> <input type="text" placeholder='00:00:00' className='addinput' /><button className='btnadd'>ADD</button></div>
                <div className='bunicon'><button onClick={tracker}><FaStopwatch/></button>
                <button onClick={taskadd}><FaCommentDots/></button></div>
               
             </Box>
             </Box>
        </div>
      )
}

export default AddPage
