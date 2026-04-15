import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackPreview, 
  FileTabs 
} from "@codesandbox/sandpack-react";
import { MonacoEditor } from "../components/Editor";
import { CURRICULUM } from '../challenges/lesson';
import './Pratice.css'
export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = CURRICULUM[stepIndex];

  const handleNext = () => {
    if (stepIndex < CURRICULUM.length - 1) setStepIndex(stepIndex + 1);
  };

  const handlePrev = () => {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  };

return (
  <div className="app-container">

    {/* HEADER */}
    <header className="header">
      <div className="header-left">
        <span>Step {stepIndex + 1} of {CURRICULUM.length}</span>
        <strong>{currentStep.title}</strong>
      </div>

      <div className="nav-buttons">
        <button
          onClick={handlePrev}
          disabled={stepIndex === 0}
          className="btn btn-prev"
        >
          ← Prev
        </button>

        <button
          onClick={handleNext}
          disabled={stepIndex === CURRICULUM.length - 1}
          className="btn btn-next"
        >
          Next →
        </button>
      </div>
    </header>

    {/* MAIN */}
    <main className="main">

      {currentStep.type === "lesson" ? (
        <div className="lesson-container">
          <div className="lesson-content">
            <ReactMarkdown>{currentStep.content}</ReactMarkdown>

            <button onClick={handleNext} className="start-btn">
              Start Lab Exercise
            </button>
          </div>
        </div>
      ) : (
        <div className="lab-container">

          {/* Sidebar */}
          <div className="sidebar">
            <h3>Task</h3>
            <p>{currentStep.description}</p>

            <div className="tip-box">
              <strong>Tip:</strong> Use the editor to solve the problem. The preview updates automatically.
            </div>
          </div>

          {/* IDE */}
          <div className="ide-container">
            <SandpackProvider
              key={currentStep.id}
              template="react"
              theme="dark"
              files={currentStep.files}
              options={{ activeFile: "/App.js" }}
            >
              <SandpackLayout style={{ height: '100%', border: 'none' }}>
                <div className="editor-wrapper">
                  <FileTabs />
                  <MonacoEditor />
                </div>

                <SandpackPreview
                  style={{ flex: 1 }}
                  showNavigator={true}
                  showConsoleButton={true}
                />
              </SandpackLayout>
            </SandpackProvider>
          </div>

        </div>
      )}

    </main>
  </div>
);
}