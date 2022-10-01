import { useToast } from '@chakra-ui/react';
import React from 'react'
import "./Timer.css"
const ControlButton = (props) => {
  const toast = useToast()
    const StartButton = (
        <div className="btn btn-one btn-start"
             onClick={props.handleStart}>
          Start
        </div>
      );

      const ActiveButtons = (
        <div className="btn-grp">
          <div className="btn btn-two" 
               onClick={props.handleReset}>
            Stop
          </div>
          {/* <div className="btn btn-one" 
               onClick={props.handlePauseResume}
               >
            {props.isPaused ? "Resume" : "Pause"}
          </div> */}
        </div>
      );
      
      return (
        <div className="Control-Buttons">
          <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
      );
}

export default ControlButton
