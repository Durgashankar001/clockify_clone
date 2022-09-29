import ImgStyle from "./featureimg.module.css"

export const Featureimg=()=>{


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
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-reports-screenshot.svg" alt="Dashboard" />
          
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
          
                <img className={ImgStyle.timeimg} src="https://clockify.me/assets/images/features/features-locations-screenshot.png" alt="Loaction" />
          
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

        </>
    )
}