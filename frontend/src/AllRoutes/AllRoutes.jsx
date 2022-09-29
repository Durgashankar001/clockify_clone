import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Download from '../Components/DownloadPage/Download'
import FeaturesPage from '../Components/FeaturesPage/FeaturesPage'
import Footer from '../Components/Footer/Footer'
import HomePage from '../Components/HomePage/HomePage'
import Navbar from '../Components/Navbar/Navbar'
import Signup from '../Components/SignupPage/Signup'

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
     </Routes>
    </>
  )
}

export default AllRoutes