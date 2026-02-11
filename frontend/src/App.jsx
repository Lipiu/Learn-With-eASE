import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";

// Sections
import Section1 from "./components/Sections/Section1/Section1.jsx";
import Section1Theory from "./components/Sections/Section1/Section1Theory.jsx";

import Section2 from "./components/Sections/Section2/Section2.jsx";
import Section2Theory from "./components/Sections/Section2/Section2Theory.jsx";

import Section3 from "./components/Sections/Section3/Section3.jsx";
import Section4 from "./components/Sections/Section4/Section4.jsx";
import Section5 from "./components/Sections/Section5/Section5.jsx";

// Other pages
import Resources from "./components/Resources/Resources.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Login from "./components/Buttons/AccountButton/Login.jsx";
import Register from "./components/Buttons/AccountButton/Register.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";


function App() {

  return (
      <BrowserRouter>
            <div className='container'>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path='/section1' element={<Section1/>}>
                        <Route index element={<Navigate to="theory" replace />} />
                        <Route path="theory" element={<Section1Theory />} />
                    </Route>

                    <Route path='/section2' element={<Section2/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section2Theory/>}/>
                    </Route>

                    <Route path='/section3' element={<Section3/>}></Route>
                    <Route path='/section4' element={<Section4/>}></Route>
                    <Route path='/section5' element={<Section5/>}></Route>

                    <Route path='/resources' element={<Resources/>}></Route>
                    <Route path='/quiz' element={<Quiz/>}></Route>
                    <Route path='/feedback' element={<Feedback/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App
