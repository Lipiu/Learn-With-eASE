import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import "./AccountButton.css"
import accountIcon from '../../../../assets/user.png'

function AccountButton(){

    //state that controls if the dropdown button is visible or not
    const [openDropdown, setOpenDropdown] = useState(false);
    const accountRef = useRef(null);
    const closeDropdownAccount = () => setOpenDropdown(false);

    //if the user clicks outside of the account container
    //the dropdown will automatically close
    useEffect( () => {
        function handleClickOutside(e){
            if(accountRef.current && !accountRef.current.contains(e.target)){
                setOpenDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        //main container wrapped with ref for outside click detection
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
                    {/*navigation to login or register*/}
                    <Link to='/login' className='dropdown-item' onClick={closeDropdownAccount}>Login</Link>
                    <Link to='/register' className='dropdown-item' onClick={closeDropdownAccount}>Register</Link>
                    <Link to='/account' className='dropdown-item' onClick={closeDropdownAccount}>Account page</Link>
                </div>
            )}
        </div>

    )
}

export default AccountButton;