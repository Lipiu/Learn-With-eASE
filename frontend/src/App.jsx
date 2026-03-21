import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";

// Sections
import Section from "./components/Sections/Section/Section.jsx";

// Theory
import Section1Theory from "./components/Sections/Theory/Theory1/Section1Theory.jsx";
import Section2Theory from "./components/Sections/Theory/Theory2/Section2Theory.jsx";
import Section3Theory from "./components/Sections/Theory/Theory3/Section3Theory.jsx";
import Section4Theory from "./components/Sections/Theory/Theory4/Section4Theory.jsx";
import Section5Theory from "./components/Sections/Theory/Theory5/Section5Theory.jsx";
import Section6Theory from "./components/Sections/Theory/Theory6/Section6Theory.jsx";

// Section Data
import { headings as s1Headings, tips as s1Tips} from "./components/Sections/Theory/Theory1/Section1Data.js";
import { headings as s2Headings, tips as s2Tips} from "./components/Sections/Theory/Theory2/Section2Data.js";
import { headings as s3Headings, tips as s3Tips} from "./components/Sections/Theory/Theory3/Section3Data.js";
import { headings as s4Headings, tips as s4Tips} from "./components/Sections/Theory/Theory4/Section4Data.js";
import { headings as s5Headings, tips as s5Tips} from "./components/Sections/Theory/Theory5/Section5Data.js";
import { headings as s6Headings, tips as s6Tips} from "./components/Sections/Theory/Theory6/Section6Data.js";

//Questions
import quiz1questions from "./components/Quiz/Questions/quiz1questions.js";
import quiz2questions from "./components/Quiz/Questions/quiz2questions.js";
import quiz3questions from "./components/Quiz/Questions/quiz3questions.js";
import quiz4questions from "./components/Quiz/Questions/quiz4questions.js";
import quiz5questions from "./components/Quiz/Questions/quiz5questions.js";
import quiz6questions from "./components/Quiz/Questions/quiz6questions.js";

// Other pages
import Resources from "./components/Resources/Resources.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Login from "./components/Buttons/AccountButton/Login/Login.jsx";
import Register from "./components/Buttons/AccountButton/Register/Register.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import AccountPage from "./components/AccountPage/AccountPage.jsx";
import ProtectedRouteQuiz from "./components/Quiz/ProtectedRouteQuiz.jsx";
import QuizLocked from "./components/Quiz/QuizLocked.jsx";
import Flashcard from "./components/Flashcard/Flashcard.jsx";
import Sandbox from "./components/Sandbox/Sandbox.jsx";

function App() {

  return (
      <BrowserRouter>
            <div className='container'>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path='/section1' element={<Section headings={s1Headings} tips={s1Tips} sectionNumber={1}/>}>
                        <Route index element={<Navigate to="theory" replace />} />
                        <Route path="theory" element={<Section1Theory />} />
                    </Route>

                    <Route path='/section2' element={<Section headings={s2Headings} tips={s2Tips} sectionNumber={2}/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section2Theory/>}/>
                    </Route>

                    <Route path='/section3' element={<Section headings={s3Headings} tips={s3Tips} sectionNumber={3}/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section3Theory/>}/>
                    </Route>


                    <Route path='/section4' element={<Section headings={s4Headings} tips={s4Tips} sectionNumber={4}/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section4Theory/>}/>
                    </Route>

                    <Route path='/section5' element={<Section headings={s5Headings} tips={s5Tips} sectionNumber={5}/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section5Theory/>}/>
                    </Route>

                    <Route path='/section6' element={<Section headings={s6Headings} tips={s6Tips} sectionNumber={6}/>}>
                        <Route index element={<Navigate to="theory" replace />}/>
                        <Route path="theory" element={<Section6Theory/>}/>
                    </Route>

                    <Route path='/resources' element={<Resources/>}></Route>

                    {/*
                    key to force React to mount a fresh component for each quiz
                    without key, if we solve the quiz1 for example, quiz2 will also appear solved
                    same for the others, the next one will always appear solved
                    key solves this issue
                    */}
                    <Route path='/quiz1' element={
                        <ProtectedRouteQuiz quizNumber={1}>
                            <Quiz key={1} quizNumber={1} questions={quiz1questions} nextSection="/section2/theory"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz2' element={
                        <ProtectedRouteQuiz quizNumber={2}>
                            <Quiz key={2} quizNumber={2} questions={quiz2questions} nextSection="/section3/theory"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz3' element={
                        <ProtectedRouteQuiz quizNumber={3}>
                            <Quiz key={3} quizNumber={3} questions={quiz3questions} nextSection="/section4/theory"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz4' element={
                        <ProtectedRouteQuiz quizNumber={4}>
                            <Quiz key={4} quizNumber={4} questions={quiz4questions} nextSection="/section5/theory"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz5' element={
                        <ProtectedRouteQuiz quizNumber={5}>
                            <Quiz key={5} quizNumber={5} questions={quiz5questions} nextSection="/section6/theory"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz6' element={
                        <ProtectedRouteQuiz quizNumber={6}>
                            <Quiz key={6} quizNumber={6} questions={quiz6questions} nextSection="/"/>
                        </ProtectedRouteQuiz>
                    }
                    />

                    <Route path='/quiz-locked' element={<QuizLocked/>} />
                    <Route path='/feedback' element={<Feedback/>}></Route>
                    <Route path='/flashcard' element={<Flashcard/>}></Route>

                    <Route path='/sandbox' element={<Sandbox/>}/>

                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/account' element={<AccountPage/>}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App
