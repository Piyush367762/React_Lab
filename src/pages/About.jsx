import React, { useRef, useState } from "react";
import "./About.css";
import emailjs from "@emailjs/browser";

export default function About() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendFeedback = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qeb61xh",
        "template_28f5n3q",
        form.current,
        "qlD46KK3uF9nmN73U"
      )
      .then(
        () => {
          setStatus("Feedback sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send feedback. Try again.");
        }
      );
  };

  return (
    <div className="about-container">
      {/* About Section */}
      <section className="about">
        <h1>About React Lab</h1>
        <p>
          React Lab was built to make learning React less confusing and more
          practical. Most tutorials either explain too little or overwhelm
          learners with theory. This platform focuses on learning by doing.
        </p>

        <h2>Why I Built This</h2>
        <p>
          While learning React, I found it difficult to practice concepts in one
          place. Switching between documentation, videos, and code editors slowed
          the process. So I created a space where everything is integrated into a
          single interactive environment.
        </p>

        <h2>What Problem It Solves</h2>
        <p>
          React Lab bridges the gap between learning and building. Instead of
          just reading concepts, users can experiment, test ideas, and solve
          challenges in real time.
        </p>

        <h2>About Me</h2>
        <p>
          Hi, I’m Piyush Aggarwal, a developer focused on building practical
          tools that help people learn and improve their development skills.
        </p>
      </section>

      {/* Feedback Section */}
      <section className="feedback">
        <h1>Send Feedback</h1>

        <form ref={form} onSubmit={sendFeedback}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Feedback"
            required
          ></textarea>

          <button type="submit">Send Feedback</button>
        </form>

        <p className="status">{status}</p>
      </section>
    </div>
  );
}