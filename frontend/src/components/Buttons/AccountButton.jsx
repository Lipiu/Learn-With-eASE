import "./AccountButton.css"
import accountIcon from '../../assets/user.png'

function AccountButton(){
    const handleLogin = () => {
        console.log("Logging in...");
        //here will be the logic
    };

    return (
        <button className='account-button'>
            <img
                src={accountIcon}
                className="account-icon"
            />
            Account
        </button>
    )
}

export default AccountButton;