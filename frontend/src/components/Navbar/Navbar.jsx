import './Navbar.css'
import ThemeButtonToggle from "../Buttons/ThemeButton.jsx";

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
        </div>
    )
}

export default Navbar;