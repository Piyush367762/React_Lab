import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>React Lab</h1>
        <p>Learn React by practicing, not just reading.</p>

        <div className="buttons">
          <Link to="/practice" className="btn primary">
            Start Practice
          </Link>
          <Link to="/docs" className="btn secondary">
            Read Docs
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>📘 Simple Docs</h3>
          <p>Beginner-friendly explanations with examples.</p>
        </div>

        <div className="card">
          <h3>🧪 Practice</h3>
          <p>Hands-on exercises to actually learn React.</p>
        </div>

        <div className="card">
          <h3>⚡ Fast Learning</h3>
          <p>No fluff, just what you need to build.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;