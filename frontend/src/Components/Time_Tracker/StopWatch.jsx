import React, { useState } from 'react'
import ControlButton from './ControlButton';
import Timer from './Timer';
import "./Timer.css"
function StopWatch({name}) {

  // console.log("name:",name)
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const[name1,setName1]=useState("")
 
  const [startAt,setstartAt]=useState("")
  const [endAt,setendAt]=useState("")
  const [totalTime,settotalTime]=useState("")
    
    React.useEffect(() => {
      let interval = null;
    
      if (isActive && isPaused === false) {
        interval = setInterval(() => {

          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);

    const handleAdd=(e)=>{
      // console.log("Work_Add")
      // e.preventDefault()
      const payload={
        name:"Navbar",
        startAt:1.2,
        endAt:3.5,
        totalTime:totalTime
    
    
      }
    console.log("total",totalTime)
    fetch(`https://legit-dust-8169.herokuapp.com/task/new`,{
      method:"POST",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((res)=>console.log(res))
          .then(() =>  setName1(""))
          setTimeout(()=>{
            setstartAt("");
            setendAt("");
            settotalTime("")
          },1000)
          // .then(() => alert("successfully registered"));
          
    
    }
    
    const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
      
    };
    
    const handlePauseResume = () => {
      setIsPaused(!isPaused);
    };
    
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
      
      handleAdd()
      settotalTime(time/1000)

      
      console.log("time:",(time/1000))
    };
    
    return (
      <div className="stop-watch">
        <Timer time={time} />
        <ControlButton
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    );
  }

export default StopWatch
