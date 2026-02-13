import {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import ThemeButtonToggle from "../Buttons/ThemeButton/ThemeButton.jsx";
import AccountButton from "../Buttons/AccountButton/AccountButton.jsx";

function Navbar(){
    const [openDropdown, setOpenDropdown] = useState(false);
    const navbarRef = useRef(null);
    const closeDropdown = () => setOpenDropdown(false);

    //make the dropdown sections menu disappear if click anywhere
    useEffect(() => {
        function handleClickOutside(e){
            if(navbarRef.current && !navbarRef.current.contains(e.target)){
                setOpenDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        <div className='navbar' ref={navbarRef}>
            <ThemeButtonToggle></ThemeButtonToggle>
            <ul>
                <li>
                    <Link to="/" className="nav-link" onClick={closeDropdown}>Home</Link>
                </li>
                <li className='dropdown-li'>
                    <button onClick={() => setOpenDropdown(prev => !prev)}>
                        Sections
                    </button>
                    {openDropdown && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/section1" onClick={closeDropdown}>Section 1</Link></li>
                            <li><Link to="/section2" onClick={closeDropdown}>Section 2</Link></li>
                            <li><Link to="/section3" onClick={closeDropdown}>Section 3</Link></li>
                            <li><Link to="/section4" onClick={closeDropdown}>Section 4</Link></li>
                            <li><Link to="/section5" onClick={closeDropdown}>Section 5</Link></li>
                            <li><Link to="/section6" onClick={closeDropdown}>Section 6</Link></li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/quiz" onClick={closeDropdown}>
                        <button>Quiz</button>
                    </Link>
                </li>

                <li>
                    <Link to="/resources" onClick={closeDropdown}>
                        <button>Resources</button>
                    </Link>
                </li>

                <li>
                    <Link to="/feedback" onClick={closeDropdown}>
                        <button>Feedback</button>
                    </Link>
                </li>
            </ul>
            <AccountButton></AccountButton>
        </div>
    )
}

export default Navbar;