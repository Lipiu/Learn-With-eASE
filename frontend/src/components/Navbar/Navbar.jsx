import { useState} from "react";
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
                    <button>Home</button>
                </li>
                <li className='dropdown-li'>
                    <button onClick={() => setOpenDropdown(prev => !prev)}>
                        Sections
                    </button>
                    {openDropdown && (
                        <ul className='dropdown-menu'>
                            <li>Section 1</li>
                            <li>Section 2</li>
                            <li>Section 3</li>
                            <li>Section 4</li>
                            <li>Section 5</li>
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