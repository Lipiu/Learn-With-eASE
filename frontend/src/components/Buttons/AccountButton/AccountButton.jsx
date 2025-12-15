import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import "./AccountButton.css"
import accountIcon from '../../../assets/user.png'

function AccountButton(){
    const [openDropdown, setOpenDropdown] = useState(false);
    const accountRef = useRef(null);
    const closeDropdownAccount = () => setOpenDropdown(false);

    useEffect( () => {
        function handleClickOutside(e){
            if(accountRef.current && !accountRef.current.contains(e.target)){
                setOpenDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogin = () => {
        console.log("Logging in...");
        //here will be the logic
    };

    return (
        <div className='account-container' ref={accountRef}>
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
                    <Link to='/login' className='dropdown-item' onClick={closeDropdownAccount}>Login</Link>
                    <Link to='/register' className='dropdown-item' onClick={closeDropdownAccount}>Register</Link>
                    <Link to='/logout' className='dropdown-item' onClick={closeDropdownAccount}>Logout</Link>
                </div>
            )}
        </div>

    )
}

export default AccountButton;