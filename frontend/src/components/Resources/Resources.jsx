import './Resources.css';

function Resources(){

    return(
        <div className="resources-container">

            <h2 className="resources-title">Java Learning Resources</h2>

            <section>
                <h3>📚 Books</h3>

                <div className="card-grid">

                    <div className="resource-card">
                        <h4>Introduction To Computer Science Using Java</h4>
                        <p>Author: Bradley Kjell</p>
                        <p>An introduction to how Java is used in Computer Science.</p>
                        <a href="https://www.programmedlessons.org/Java9/index.html" target="_blank" rel="noreferrer">
                            View Book
                        </a>
                    </div>

                    <div className="resource-card">
                        <h4>Java Programming</h4>
                        <p>Source: Wikibooks</p>
                        <p>Beginner-friendly introduction to Java concepts.</p>
                        <a href="https://en.wikibooks.org/wiki/Java_Programming" target="_blank" rel="noreferrer">
                            View Book
                        </a>
                    </div>

                </div>
            </section>

            <section>
                <h3>🎥 Video Courses</h3>

                <div className="card-grid">

                    <div className="resource-card">
                        <h4>Java Programming for Beginners</h4>
                        <p>A complete Java Course.</p>
                        <a href="https://www.youtube.com/watch?v=A74TOX803D0" target="_blank" rel="noreferrer">
                            Watch Course
                        </a>
                    </div>

                    <div className="resource-card">
                        <h4>What are sockets?</h4>
                        <p>Sockets explained in a simple way.</p>
                        <a href="https://www.youtube.com/watch?v=D26sUZ6DHNQ" target="_blank" rel="noreferrer">
                            Watch Course
                        </a>
                    </div>

                    <div className="resource-card">
                        <h4>How does a computer work?</h4>
                        <p>A visual explanation about computers.</p>
                        <a href="https://www.youtube.com/watch?v=d86ws7mQYIg&t=13s" target="_blank" rel="noreferrer">
                            Watch Course
                        </a>
                    </div>


                </div>
            </section>

            <section>
                <h3>🌐 Official Documentation</h3>

                <div className="card-grid">

                    <div className="resource-card">
                        <h4>Oracle Java Documentation</h4>
                        <p>Official Java API documentation and guides.</p>
                        <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noreferrer">
                            Visit Website
                        </a>
                    </div>

                </div>
            </section>

            <section>
                <h3>🧪 Practice Platforms</h3>

                <div className="card-grid">

                    <div className="resource-card">
                        <h4>LeetCode</h4>
                        <p>Practice Java coding problems and algorithms.</p>
                        <a href="https://leetcode.com" target="_blank" rel="noreferrer">
                            Practice
                        </a>
                    </div>

                    <div className="resource-card">
                        <h4>HackerRank</h4>
                        <p>Java exercises and certification preparation.</p>
                        <a href="https://hackerrank.com" target="_blank" rel="noreferrer">
                            Practice
                        </a>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Resources;
