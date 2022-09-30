import { useState } from "react"
import ImgStyle from "./featureimg.module.css"

export const Featureimg=()=>{
      const [value,setValue]=useState(false)
      const [value2,setValue2]=useState(false)
      const [value3,setValue3]=useState(false)

    return(
        <>
        <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Time Tracker</h1>
              <h3 className={ImgStyle.p}>Start and stop timer as you work, or enter hours manually.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg" alt="Time tracker" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Timer</h1>
                        <h3 className={ImgStyle.tmeh4}>Track  a stopwatch</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Add timer</h1>
                        <h3 className={ImgStyle.tmeh4}>Enter  hours manually.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Continue</h1>
                        <h3 className={ImgStyle.tmeh4}>Continue  with one click.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Billable</h1>
                        <h3 className={ImgStyle.tmeh4}>Mark hours as billable.</h3>
                  </div>
            </div>
         </div>



         {/* Timesheet */}

         <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Timesheet</h1>
              <h3 className={ImgStyle.p}>Log your weekly activities in less than a minute.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-timesheet-screenshot.svg" alt="Timesheet" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Activities</h1>
                        <h3 className={ImgStyle.tmeh4}>Select  enter time.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Templates</h1>
                        <h3 className={ImgStyle.tmeh4}>Quickly each week.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Approval</h1>
                        <h3 className={ImgStyle.tmeh4}>Submit timesheets.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Reminders</h1>
                        <h3 className={ImgStyle.tmeh4}>Reminder timesheets.</h3>
                  </div>
            </div>
         </div>


         {/* Kiosk */}

         <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Kiosk</h1>
              <h3 className={ImgStyle.p}>Clock in with your PIN code from a shared device.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-kiosk-screenshot.png" alt="kiosk" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Clock-in</h1>
                        <h3 className={ImgStyle.tmeh4}>Punch in from device.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Breaks</h1>
                        <h3 className={ImgStyle.tmeh4}>Track employee breaks.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>PIN</h1>
                        <h3 className={ImgStyle.tmeh4}>Sign in with personal.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Activity</h1>
                        <h3 className={ImgStyle.tmeh4}>See how much  worked.</h3>
                  </div>
            </div>
         </div>


         {/* Calender */}

         <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Calendar</h1>
              <h3 className={ImgStyle.p}>Visualize your time and block out activities.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-calendar-screenshot.svg" alt="Calendar" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Visualize</h1>
                        <h3 className={ImgStyle.tmeh4}>See how your day.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Add</h1>
                        <h3 className={ImgStyle.tmeh4}>Block hours  click.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Edit</h1>
                        <h3 className={ImgStyle.tmeh4}>Edit blocks by resizing.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Connect</h1>
                        <h3 className={ImgStyle.tmeh4}>Add events from Outlook.</h3>
                  </div>
            </div>
         </div>
   

   {/* Apps */}
      
   <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Apps</h1>
              <h3 className={ImgStyle.p}>Track time using desktop and mobile app.</h3>

          </div>
          <div className={ImgStyle.appsbuttondiv}>
            <button className={ImgStyle.appsbut} >Auto tracker</button><button className={ImgStyle.appsbut}>detection</button><button className={ImgStyle.appsbut}>Reminders</button><button className={ImgStyle.appsbut}>Auto start</button><button className={ImgStyle.appsbut}>Offline mode</button><button className={ImgStyle.appsbut}> timer</button>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-apps-screenshot.png" alt="Apps" />
         </div>
   
   {/* Dashboard */}
   <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Dashboard</h1>
              <h3 className={ImgStyle.p}>See where you spend time and what your team is working on.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-dashboard-screenshot.svg" alt="Dashboard" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Activities</h1>
                        <h3 className={ImgStyle.tmeh4}>See how your day.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Charts</h1>
                        <h3 className={ImgStyle.tmeh4}>Block hours  click.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Breakdowns</h1>
                        <h3 className={ImgStyle.tmeh4}>Edit blocks by resizing.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Status</h1>
                        <h3 className={ImgStyle.tmeh4}>See who currently works on what.</h3>
                  </div>
            </div>
         </div>
 


            {/* Reports */}
            <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Reports</h1>
              <h3 className={ImgStyle.p}>See who worked on what, how much money you earn, review your team's time, and export the data.</h3>
          </div>
          <div className={ImgStyle.picbutton}>
            <div  className={ImgStyle.button1} onClick={()=>setValue3(!value3)}>SUMMARY</div>
             <div className={ImgStyle.button1}  onClick={()=>setValue3(!value3)}>DETAILED</div>
          </div>
           {value3 ?  <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-reports-screenshot.svg" alt="Dashboard" /> : <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-detailed-screenshot.svg" alt="Dashboard" />}
          
               
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Breakdowns</h1>
                        <h3 className={ImgStyle.tmeh4}>Overview by: day.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Filters</h1>
                        <h3 className={ImgStyle.tmeh4}>Drill down into your data.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Share</h1>
                        <h3 className={ImgStyle.tmeh4}>Share reports with clients via link.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Export</h1>
                        <h3 className={ImgStyle.tmeh4}>Download PDF, CSV, or Excel.</h3>
                  </div>
            </div>
         </div>
        

        {/* Activity */}
        <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Activity</h1>
              <h3 className={ImgStyle.p}>See visited sites and what you've worked on.</h3>
          </div>
          <div className={ImgStyle.picbutton}>
            <div  className={ImgStyle.button1} onClick={()=>setValue2(!value2)}>LOCATIONS</div>
             <div className={ImgStyle.button1}  onClick={()=>setValue2(!value2)}>SCREENSHOTS</div>
          </div>
          
          {value2 ?  <img  className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-locations-screenshot.png" alt="Loaction" /> : <img   className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-screenshots-screenshot.png" alt="Loaction" />}
               
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Locations</h1>
                        <h3 className={ImgStyle.tmeh4}>Track GPS location.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Routes</h1>
                        <h3 className={ImgStyle.tmeh4}>DSee all visited locations.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Screenshots</h1>
                        <h3 className={ImgStyle.tmeh4}>worked on.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Privacy</h1>
                        <h3 className={ImgStyle.tmeh4}>Control data.</h3>
                  </div>
            </div>
         </div>



{/* Projects */}
       <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Projects</h1>
              <h3 className={ImgStyle.p}>Track time on projects, and keep an eye on progress and budget.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-projects-screenshot.svg" alt="projects" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Tasks</h1>
                        <h3 className={ImgStyle.tmeh4}>Categorize by job type.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Rates</h1>
                        <h3 className={ImgStyle.tmeh4}>Multiple levels.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Budget</h1>
                        <h3 className={ImgStyle.tmeh4}>Set budget </h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Alerts</h1>
                        <h3 className={ImgStyle.tmeh4}>Get notified .</h3>
                  </div>
            </div>
         </div>


{/* Team */}
      <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Team</h1>
              <h3 className={ImgStyle.p}>Invite your team to track time in your account..</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-team-screenshot.svg" alt="tream" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Invite team</h1>
                        <h3 className={ImgStyle.tmeh4}>Unlimited number.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Rates</h1>
                        <h3 className={ImgStyle.tmeh4}>Set per user.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Manager</h1>
                        <h3 className={ImgStyle.tmeh4}>additional permissions.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Groups</h1>
                        <h3 className={ImgStyle.tmeh4}>Manage access using groups .</h3>
                  </div>
            </div>
         </div>

         {/* Scheduling */}
         <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Scheduling</h1>
              <h3 className={ImgStyle.p}>Plan projects and visualize team's capacity.</h3>
          </div>
          <div className={ImgStyle.picbutton}>
             <div className={ImgStyle.button1} onClick={()=>setValue(!value)}>PROJECTS</div>
             <div className={ImgStyle.button1}  onClick={()=>setValue(!value)}>TEAM</div>
          </div>
          {value ? <img  className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-scheduling-projects-screenshot.svg" alt="tream" /> : <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-scheduling-team-screenshot.svg" alt="tream" />}
                
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Milestones</h1>
                        <h3 className={ImgStyle.tmeh4}>Visualize projects.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Assignments</h1>
                        <h3 className={ImgStyle.tmeh4}>Decide who works.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Capacity</h1>
                        <h3 className={ImgStyle.tmeh4}> take on more work.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Publish</h1>
                        <h3 className={ImgStyle.tmeh4}>Let others see .</h3>
                  </div>
            </div>
         </div>

         {/* TIME OFF  */}
         <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Time off</h1>
              <h3 className={ImgStyle.p}>Track your team's holidays and time off requests.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-timeoff-screenshot.svg" alt="tream" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Policies</h1>
                        <h3 className={ImgStyle.tmeh4}>Visualize projects.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Holidays</h1>
                        <h3 className={ImgStyle.tmeh4}>Define holidays.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Requests</h1>
                        <h3 className={ImgStyle.tmeh4}> Request and approve.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Balance</h1>
                        <h3 className={ImgStyle.tmeh4}>Let others see .</h3>
                  </div>
            </div>
         </div>


        {/* Approval */}
        <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Approval</h1>
              <h3 className={ImgStyle.p}>Officially approve your team's timesheets and expenses.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-approval-screenshot.svg" alt="tream" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Submit</h1>
                        <h3 className={ImgStyle.tmeh4}>Submit timesheets.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Reminders</h1>
                        <h3 className={ImgStyle.tmeh4}>Send late timesheet.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Immutable</h1>
                        <h3 className={ImgStyle.tmeh4}> Prevent further changes.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >History</h1>
                        <h3 className={ImgStyle.tmeh4}>See all requests.</h3>
                  </div>
            </div>
         </div>


        {/* EXpenses */}
        <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Expenses</h1>
              <h3 className={ImgStyle.p}>Record fixed-fees and other project expenses.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-expenses-screenshot.svg" alt="tream" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Track</h1>
                        <h3 className={ImgStyle.tmeh4}>Record by sum .</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Types</h1>
                        <h3 className={ImgStyle.tmeh4}>Define expense.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Receipts</h1>
                        <h3 className={ImgStyle.tmeh4}> Attach expense receipts.</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Report</h1>
                        <h3 className={ImgStyle.tmeh4}>Analyze .</h3>
                  </div>
            </div>
         </div>
     

     {/* INvoicing */}
     <div>
          <div className={ImgStyle.timebox}>
              <h1 className={ImgStyle.h1}>Invoicing</h1>
              <h3 className={ImgStyle.p}>Issue invoices based on tracked time, expenses, and hourly rates.</h3>
          </div>
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg" alt="tream" />
          
            <div className={ImgStyle.timefooter}>
                  <div className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Create</h1>
                        <h3 className={ImgStyle.tmeh4}>Import time </h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>PDF</h1>
                        <h3 className={ImgStyle.tmeh4}>Download </h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1}>Customize</h1>
                        <h3 className={ImgStyle.tmeh4}> Add company</h3>
                  </div>
                  <div  className={ImgStyle.stop}>
                        <h1  className={ImgStyle.tmeh1} >Report</h1>
                        <h3 className={ImgStyle.tmeh4}>Analyze .</h3>
                  </div>
            </div>
         </div>
     

     {/* WAtch demo */}
         <div  className={ImgStyle.h1div}><h1 className={ImgStyle.videoh1}>Watch demo (12:35)</h1></div>  
       <div className={ImgStyle.videodiv}>
            <img className={ImgStyle.videoimg} src="https://i.ytimg.com/vi/NMZhFs_b0Aw/default.jpg" alt="img" />
                  <a href="https://www.youtube.com/watch?v=NMZhFs_b0Aw"><h1 className={ImgStyle.tag}>Watch on Youtube</h1></a>
       </div>
          
        </>
    )
}