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


    </div>
  );
}

export default Home;