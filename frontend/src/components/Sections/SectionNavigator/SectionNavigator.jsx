import { useState } from "react";
import "./SectionNavigator.css";

function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

function SectionNavigator() {
    const [open, setOpen] = useState(true);

    return (
        <div className="section-navigator">
            <button
                className="navigator-title"
                onClick={() => setOpen(prev => !prev)}
            >
                Section 1 Chapters
                <span className={`chevron ${open ? "open" : ""}`}>▾</span>
            </button>

            {open && (
                <ul className="navigator-list">
                    <li onClick={() => scrollTo("title")}>
                        Introduction to Java
                    </li>
                    <li onClick={() => scrollTo("paradigms")}>
                        Programming paradigms
                    </li>
                    <li onClick={() => scrollTo("jvm-jre-jdk")}>
                        JVM, JRE, JDK
                    </li>
                    <li onClick={() => scrollTo("variables")}>
                        Variables
                    </li>
                    <li onClick={() => scrollTo("control")}>
                        Control Flow
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SectionNavigator;
