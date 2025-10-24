 import React from 'react'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import About from './componets/About'
import Portfoliyo from './componets/Portfoliyo'
import Experience from './componets/Experience'
import Footer from './componets/Footer'
import Contact from './componets/Contact'
import { Toaster } from 'react-hot-toast'
 
 function App() {
   return (
     <>
           <div>
            <Navbar/>
           <Home/>
           <About/>
           <Portfoliyo/>
           <Experience/>
           <Contact/>
           <Footer/>
           </div>
        <Toaster />

     </>
   )
 }
 
 export default App
 