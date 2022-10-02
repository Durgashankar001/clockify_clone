import { Box } from '@chakra-ui/react'
import React from 'react'
import "./sidebar.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiFillQuestionCircle,AiOutlineBell } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Inner_Navbar = () => {
  return (
    <div>
   <Box className='mainNav'>
        <Box className='mainNav1'>
          < BsFillGrid3X3GapFill className='bell'/>
          <RouterLink to={"/"}>
          <img className='imgk1' src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
          </RouterLink>
       <button className='btnre'>Request demo</button>
       
        </Box>
        <Box className='mainNav1'>
          <h1>user</h1>
          <button className='btnre'>UPGRADE</button>
        <AiFillQuestionCircle className='bell'/>
        <AiOutlineBell className='bell'/>
        
        </Box>
   </Box>
    </div>
  )
}

export default Inner_Navbar
