import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Download from '../Components/DownloadPage/Download'
import Features from '../Components/FeaturesPage/FeaturesPage'
import FeaturesPage from '../Components/FeaturesPage/FeaturesPage'
import FilterSection from '../Components/Filtersection/FilterSection'
import Footer from '../Components/Footer/Footer'
import HomePage from '../Components/HomePage/HomePage'
import Navbar from '../Components/Navbar/Navbar'
import Signup from '../Components/SignupPage/Signup'
import Time_Tracker from '../Components/Time_Tracker/Time_Tracker'
import Login from '../Components/LoginPage/Login'
import AddPage from '../Components/Time_Tracker/AddPage'

const AllRoutes = () => {

  return (
    <>
     <Routes>
        <Route path='/' element={
            <>
            <Navbar/>
            <HomePage/>
            <Footer/>
            </>
        }></Route>
         <Route
          path="/features"
          element={
            <>
              <Navbar />
              <FeaturesPage />
              <Footer />
            </>
          }
        ></Route>
         <Route
          path="/download"
          element={
            <>
              <Navbar />
              <Download />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/tracker" element={<Time_Tracker />}></Route>
        <Route path="/project" element={<FilterSection />}></Route>
        <Route path="/taskAdd" element={<AddPage />}></Route>
     </Routes>
    </>
  )
}

export default AllRoutes