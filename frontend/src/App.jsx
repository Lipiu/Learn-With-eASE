import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Section1 from "./components/Sections/Section1.jsx";
import Section2 from "./components/Sections/Section2.jsx";
import Section3 from "./components/Sections/Section3.jsx";
import Section4 from "./components/Sections/Section4.jsx";
import Section5 from "./components/Sections/Section5.jsx";
import Resources from "./components/Resources/Resources.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {

  return (
      <BrowserRouter>
            <div className='container'>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/section1' element={<Section1/>}></Route>
                    <Route path='/section2' element={<Section2/>}></Route>
                    <Route path='/section3' element={<Section3/>}></Route>
                    <Route path='/section4' element={<Section4/>}></Route>
                    <Route path='/section5' element={<Section5/>}></Route>
                    <Route path='/resources' element={<Resources/>}></Route>
                    <Route path='/feedback' element={<Feedback/>}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App
