import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";

// Sections
import Section1 from "./components/Sections/Section1/Section1.jsx";
import Section1Theory from "./components/Sections/Section1/Section1Theory.jsx";

import Section2 from "./components/Sections/Section2/Section2.jsx";
import Section2Theory from "./components/Sections/Section2/Section2Theory.jsx";

import Section3 from "./components/Sections/Section3/Section3.jsx";
import Section3Theory from "./components/Sections/Section3/Section3Theory.jsx";

import Section4 from "./components/Sections/Section4/Section4.jsx";
import Section4Theory from "./components/Sections/Section4/Section4Theory.jsx";

import Section5 from "./components/Sections/Section5/Section5.jsx";
import Section5Theory from "./components/Sections/Section5/Section5Theory.jsx";

import Section6 from "./components/Sections/Section6/Section6.jsx";
import Section6Theory from "./components/Sections/Section6/Section6Theory.jsx";


// Other pages
import Resources from "./components/Resources/Resources.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Login from "./components/Buttons/AccountButton/Login.jsx";
import Register from "./components/Buttons/AccountButton/Register.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import AccountPage from "./components/AccountPage/AccountPage.jsx";

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

                    <Route path='/section3' element={<Section3/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section3Theory/>}/>
                    </Route>


                    <Route path='/section4' element={<Section4/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section4Theory/>}/>
                    </Route>

                    <Route path='/section5' element={<Section5/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section5Theory/>}/>
                    </Route>

                    <Route path='/section6' element={<Section6/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section6Theory/>}/>
                    </Route>

                    <Route path='/resources' element={<Resources/>}></Route>
                    <Route path='/quiz' element={<Quiz/>}></Route>
                    <Route path='/feedback' element={<Feedback/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/account' element={<AccountPage/>}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App
