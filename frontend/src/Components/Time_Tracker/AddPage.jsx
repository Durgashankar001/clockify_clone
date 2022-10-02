import { Box, Menu } from "@chakra-ui/react";
import React from "react";
import StopWatch from "./StopWatch";
import "./Timer.css";
import {
  FaPlusCircle,
  FaStopwatch,
  FaCommentDots,
  FaDollarSign,
  FaTags,
  FaGripLinesVertical,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { GrPlay } from "react-icons/gr";
import { HiDotsVertical } from "react-icons/hi";


import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

import Inner_Navbar from "./SideBar/Inner_Navbar";




const AddPage = () => {
  const navigate = useNavigate();

  const [name,setName]=useState("")
  const [startAt,setstartAt]=useState("")
  const [endAt,setendAt]=useState("")
  const [totalTime,settotalTime]=useState("")
  const [data,setData]=useState([]);


    
    const handleAdd=(e)=>{
      console.log(e.target.value)
      e.preventDefault()
      const payload={
        name:name,
        startAt:startAt,
        endAt:endAt,
        totalTime:totalTime
    
    
      }
    

    fetch(`https://legit-dust-8169.herokuapp.com/task/new`,{

    // fetch(`http://localhost:8080/task/new`,{

      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((res)=>console.log(res))
          .then(() => { setName("");
          setstartAt("");
          setendAt("");
          settotalTime("");});
          // .then(() => alert("successfully registered"));
    
        

    }

//GET
const getData = async () => {

  let res = await axios.get('https://legit-dust-8169.herokuapp.com/task');

  // let res = await axios.get('http://localhost:8080/task');


  return res.data;
};

useEffect(()=>{
  getData().then((res) => {
    setData(res);

  });
},[getData()])

//delete

// const delete=(id)=>(dispatch{}){

// }


const handaledelete=(id)=>{
  axios.delete(`https://legit-dust-8169.herokuapp.com/task/delete/${id}`)
  .then(()=>{console.log(id)})
  // console.log("id",id)
}







  function tracker() {
    navigate("/tracker");
  }

  function taskadd() {
    navigate("/taskadd");
  }



  return (
    <div>
      
      <Box>

     <Inner_Navbar/>

        <Navbar />

      </Box>
      <Box>
      <Box className="timePage">
        <Box className="st01">
          <SideBar />
        </Box>
        <Box className="main145">
        <Box className="st">
          <div>
            <input
            onChange={(e)=>setName(e.target.value)}
              type="text"
              className="in12"
              placeholder="What are you working on?"
            />
          </div>
          <div className="bluep">
            <FaPlusCircle />
            <a href="" className="pin">
              Project
            </a>
          </div>
          <div className="bluep1">
            <FaGripLinesVertical className="hicon" />
            <FaTags className="hicon" />
            <FaGripLinesVertical className="hicon" />
            <FaDollarSign className="hicon" />
            <FaGripLinesVertical className="hicon" />
            <input  onChange={(e)=>setstartAt(e.target.value)} type="text" placeholder="00:00" className="in22" />-
            <input  onChange={(e)=>setendAt(e.target.value)} type="text" placeholder="00:00" className="in22" />
          </div>
          <div className="Today">
            {" "}
            <FaRegCalendarAlt /> <h1 className="h12">Today</h1>
          </div>
          <div className="st2">
            {" "}
            <input  onChange={(e)=>settotalTime(e.target.value)} type="text" placeholder="00:00:00" className="addinput" />
            <button className="btnadd " onClick={handleAdd}>ADD</button>
          </div>
          <div className="bunicon">
            <button onClick={tracker}>
              <FaStopwatch />
            </button>
            <button onClick={taskadd}>
              <FaCommentDots />
            </button>
          </div>
        
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

{/* //delete */}
          <div className="A7"><button onClick={() => handaledelete(e._id)}><HiDotsVertical/></button></div>


          <div className="A7"><button><HiDotsVertical/></button></div>

        
        </Box>
        ))
      }
        </Box>
      </Box>
    
      </Box>
     
    </div>
  );
};

export default AddPage;
