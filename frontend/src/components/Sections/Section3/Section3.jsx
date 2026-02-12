import { Outlet } from "react-router-dom";
import "../Section1/Section1.css";

function Section3() {
    return (
        <div className="section">
            <div className="section-layout">
                <div className="section-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Section3;