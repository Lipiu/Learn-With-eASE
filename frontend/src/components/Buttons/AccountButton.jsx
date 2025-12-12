import {useState} from "react";
import {Link} from "react-router-dom";
import "./AccountButton.css"
import accountIcon from '../../assets/user.png'

function AccountButton(){
    const [openDropdown, setOpenDropdown] = useState(false);
    const handleLogin = () => {
        console.log("Logging in...");
        //here will be the logic
    };

    return (
        <div className='account-container'>
            <button className='account-button'
                    onClick={() => setOpenDropdown(prev => !prev)}>
                <img
                    src={accountIcon}
                    className="account-icon"
                />
                Account
            </button>
            {openDropdown && (
                <div className='dropdown-menu'>
                    <Link to='/login' className='dropdown-item'>Login</Link>
                    <Link to='/register' className='dropdown-item'>Register</Link>
                    <Link to='/logout' className='dropdown-item'>Logout</Link>
                </div>
            )}
        </div>

    )
}

export default AccountButton;