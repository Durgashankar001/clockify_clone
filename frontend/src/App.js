import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/SignupPage/Signup';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
     {/* <Signup/> */}
    </div>
  );
}

export default App;
