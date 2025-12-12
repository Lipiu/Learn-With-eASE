import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import ThemeButtonToggle from "../Buttons/ThemeButton.jsx";
import AccountButton from "../Buttons/AccountButton.jsx";

function Navbar(){
    const [openDropdown, setOpenDropdown] = useState(false);
    return(
        <div className='navbar'>
            <ThemeButtonToggle></ThemeButtonToggle>
            <ul>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className='dropdown-li'>
                    <button onClick={() => setOpenDropdown(prev => !prev)}>
                        Sections
                    </button>
                    {openDropdown && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/section1">Section 1</Link></li>
                            <li><Link to="/section2">Section 2</Link></li>
                            <li><Link to="/section3">Section 3</Link></li>
                            <li><Link to="/section4">Section 4</Link></li>
                            <li><Link to="/section5">Section 5</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <button>Resources</button>
                </li>
                <li>
                    <button>Feedback</button>
                </li>
            </ul>
            <AccountButton></AccountButton>
        </div>
    )
}

export default Navbar;