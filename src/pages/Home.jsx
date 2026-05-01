import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
        <h1>React Lab</h1>
        <p>Learn React by practicing, not just reading.</p>
        </div>

        <div className="buttons">
          <Link to="/practice" className="btn primary">
            Start Practice
          </Link>
          <Link to="/docs" className="btn secondary">
            Read Docs
          </Link>
        </div>
      </section>
      <div className="lower">
        <h2>Welcome to React learning and debugging</h2>
          <p>Master React step by step with theory + practice.</p>
  
          <div className="cards">
            <div className="card">Props Basics</div>
            <div className="card">State Management</div>
            <div className="card">Hooks</div>
            <div className="card">Debugging</div>
          </div>
      </div>

    </div>
  );
}

export default Home;