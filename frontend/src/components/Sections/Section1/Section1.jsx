import { useState } from 'react';
import {Link, Outlet, useMatch} from 'react-router-dom';
import './Section1.css'
import SectionNavigator from "../SectionNavigator/SectionNavigator.jsx";

function Section1(){
    const [open, setOpen] = useState(false);
    const isTheory = useMatch("/section1/theory");

    return (
        <div className="section">
            <div className="section-dropdown">
                <button onClick={() => setOpen(prev => !prev)}>
                    Choose content
                </button>
                { open && (
                    <ul className="section-dropdown-menu">
                        <li>
                            <Link to="theory" onClick={() => setOpen(false)}>
                                Theory
                            </Link>
                        </li>
                        <li>
                            <Link to="quiz" onClick={() => setOpen(false)}>
                                Quiz
                            </Link>
                        </li>
                        <li>
                            <Link to="coding" onClick={() => setOpen(false)}>
                                Coding exercise
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            <div className="section-layout">
                <div className="section-main">
                    <Outlet />
                </div>
                {isTheory && (
                    <aside className="section-sidebar">
                        <SectionNavigator></SectionNavigator>
                    </aside>
                )}
            </div>
        </div>
    );
}

export default Section1;