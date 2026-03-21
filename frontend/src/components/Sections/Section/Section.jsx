import { Outlet, useNavigate } from "react-router-dom";
import './Section.css'


function Section( {headings = [], tips = [], sectionNumber }) {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="section">
            <div className="section-layout">
                <div className="section-main">
                    <Outlet />
                    <div className="section-actions">
                        <button
                            className="section-action-btn"
                            onClick={() => navigate(`/quiz${sectionNumber}`)}
                        >
                            Take Quiz {sectionNumber} →
                        </button>
                        <button
                            className="section-action-btn secondary"
                            onClick={() => navigate(`/sandbox`)}
                        >
                            Practice in Sandbox
                        </button>
                    </div>
                </div>
                <aside className="section-sidebar">
                    {/*if we forget to pass the headings nothing will happen, the headings will be rendered once we pass them*/}
                    {headings.length > 0 && (
                        <div className="sidebar-card">
                            <h4 className="sidebar-title">On this page</h4>
                            <ul className="sidebar-nav">

                                {headings.map((heading, index) => (
                                    <li key={index}>
                                        <span className="sidebar-link" onClick={()=> scrollToSection(heading.id)}>
                                            {heading.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {tips.length > 0 && (
                        <div className="sidebar-card tips-card">
                            <h4 className="sidebar-title">Did you know?</h4>
                            <ul className="tips-list">
                                {tips.map((tip, index) => (
                                    <li key={index} className="tip-item">{tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

export default Section;