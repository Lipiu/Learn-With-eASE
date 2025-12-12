import javaBackgroundImage from "../../assets/java-background.png";
import "./Home.css";

function Home(){
    return(
        <div className='home'>
            <img
                src={javaBackgroundImage}
                className='java-bg'
            />
        </div>
    )
}

export default Home;