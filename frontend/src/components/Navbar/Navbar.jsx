import './Navbar.css'
import ThemeButtonToggle from "../Buttons/ThemeButton.jsx";
import AccountButton from "../Buttons/AccountButton.jsx";

function Navbar(){
    return(
        <div className='navbar'>
            <ThemeButtonToggle></ThemeButtonToggle>
            <ul>
                <li>Home</li>
                <li>Sections</li>
                <li>Resources</li>
                <li>Feedback</li>
            </ul>

            <AccountButton></AccountButton>
        </div>
    )
}

export default Navbar;