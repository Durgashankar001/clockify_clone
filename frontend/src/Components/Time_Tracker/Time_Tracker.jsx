import { Box, Menu } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import StopWatch from './StopWatch';
import "./Timer.css";
import { FaPlusCircle,FaStopwatch,FaCommentDots,FaDollarSign,FaTags,FaGripLinesVertical,FaRegCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import SideBar from './SideBar/SideBar';
import Inner_Navbar from './SideBar/Inner_Navbar';
import axios from 'axios';
import { useState } from 'react';
import { GrPlay } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";


const Time_Tracker = () => {
  const navigate=useNavigate();
  const [name,setName]=useState("")

  const handlename=()=>{
    setName()
  }

  // console.log("timename:",name)
  function tracker(){
    navigate("/tracker")
  }

  function taskadd(){
    navigate("/taskadd")


  }


  const getData = async () => {
    let res = await axios.get('https://legit-dust-8169.herokuapp.com/task');
    // https://legit-dust-8169.herokuapp.com/task
  
    return res.data;
  };
  
  const [data,setData]=useState([])
  useEffect(()=>{
    getData().then((res) => {
      setData(res);
  
    });
  },[getData()])

  //delete
const handaledelete=(id)=>{
  axios.delete(`https://legit-dust-8169.herokuapp.com/task/delete/${id}`)
  .then(()=>{console.log(id)})
  // console.log("id",id)
}
 

  return (
    <div >
      <Box><Inner_Navbar/></Box>
      <Box className='timePage'>
        <Box className='st01'>
<SideBar/>
        </Box>
        <Box className='full'>
        <Box className='st'>
            <div>
                <input type="text" onChange={handlename} className='in1' placeholder='What are you working on?' />
            </div>
            <div className='bluep'><FaPlusCircle/><a href="" className='pin'>Project</a></div>
            <div className='bluep1'><FaGripLinesVertical className='hicon'/><FaTags className='hicon'/><FaGripLinesVertical className='hicon'/><FaDollarSign className='hicon'/><FaGripLinesVertical className='hicon'/></div>
            <div className='st2'> <StopWatch name={name}/></div>
            <div className='bunicon'><button onClick={tracker}><FaStopwatch/></button>
            <button onClick={taskadd}><FaCommentDots/></button></div>
           
         </Box>
        <div  className='wname'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>
        <div  className='wname wname1'><h1 className='h1'>This week</h1> <h1 className='h1'>Week Total:00:00:00</h1></div>


       {/* MapFunction */}
       {
        data.map((e)=>(
        <Box className="st">
          <div className="A1">
            <h1>{e.name}</h1>
          </div>
          <div className="A2" >
            <FaPlusCircle />
            <a href="" className="pin">
              Project
            </a>
          </div>
          <div className="A3">
            <FaGripLinesVertical className="hicon" />
            <FaTags className="hicon" />
            <FaGripLinesVertical className="hicon" />
            <FaDollarSign className="hicon" />
            <FaGripLinesVertical className="hicon" />
            
          </div>
          <div className="A4"><h1>{e.startAt}</h1>-
            <h1>{e.endAt}</h1></div>
          <div className="A5">
           
            <FaRegCalendarAlt /> 
          </div>
          <div className="A6">
         
            <h1>{e.totalTime}</h1>
            
          </div>
          <div className="A7">
           <button><GrPlay/></button>
          </div>

          <div className="A7"><button onClick={() => handaledelete(e._id)}><HiDotsVertical/></button></div>
        
        </Box>
        ))
      }
         </Box>
         </Box>
    </div>
  )
}

export default Time_Tracker
