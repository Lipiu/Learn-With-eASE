import javaBackgroundImage from "../../assets/java-background.png";
import "./Home.css";

function Home(){
    return(
        <div className='home'>
            <img
                src={javaBackgroundImage}
                className='java-bg'
            />
            <div className='text'>
                <h1>Welcome to Learn with eASE</h1>
                <h2>The perfect place to learn Java</h2>
            </div>
        </div>
    )
}

export default Home;