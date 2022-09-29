import { Featureimg } from "./featureimg"
import FeatureStyle from "./FeaturesPage.module.css"


const Features = () =>{

    return (
       
        <>
           {/* <div>FeaturesPage</div> */}
            <div className={FeatureStyle.Outer}>
                <h1 className={FeatureStyle.Title}>Features</h1>
                <div className={FeatureStyle.div2}>
                    <button>TIMEKEEPING</button>
                    <button>REPORTING</button>
                    <button>MANAGEMENT</button>
                </div>
                <div className={FeatureStyle.boxes}>
                    <div className={FeatureStyle.time}>
                        <button className={FeatureStyle.hov}>Time Tracker</button><button className={FeatureStyle.hov}>Kiosk</button><button className={FeatureStyle.hov}>Apps</button>
                        <button className={FeatureStyle.hov}>Timesheet</button><button className={FeatureStyle.hov}>Calender</button><button className={FeatureStyle.hov}>Integrations</button>
                    </div>
                    <div className={FeatureStyle.report}>
                        <button className={FeatureStyle.hov}>Dashboard</button><button className={FeatureStyle.hov}>Activity</button>
                        <button className={FeatureStyle.hov}>Reports</button><button className={FeatureStyle.hov}>Projects</button>
                    </div>
                    <div className={FeatureStyle.manage}>
                        <button className={FeatureStyle.hov}>Team</button><button className={FeatureStyle.hov}>Time Off</button><button className={FeatureStyle.hov}>Expenses</button>
                        <button className={FeatureStyle.hov}>Scheduling</button><button className={FeatureStyle.hov}>Approval</button><button className={FeatureStyle.hov}>Invoicing</button>
                    </div>
                </div>
            </div>
            {/* //   TIME TRACKER START HEREE */}
                  <Featureimg />
        </>
    )
}


export default Features