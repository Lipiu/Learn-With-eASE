import { useState, useEffect } from "react";
import './ThemeButton.css'
import sunIcon from "../../../assets/sun.png";
import moonIcon from "../../../assets/moon.png";

function ThemeButtonToggle(){
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <button className="theme-btn" onClick={toggleTheme}>
            <img
                src = {theme === "light" ? moonIcon : sunIcon }
                alt = "theme icon"
                className = "theme-btn-icon"
            />
        </button>
    );
}

export default ThemeButtonToggle;