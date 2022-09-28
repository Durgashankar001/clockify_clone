import './App.css';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';

import Time_Tracker from './Components/Time_Tracker/Time_Tracker';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
     <Footer/>
    </div>
  );
}

export default App;
