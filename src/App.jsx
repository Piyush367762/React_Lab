import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  SandpackProvider, 
  SandpackLayout, 
  SandpackPreview, 
  FileTabs 
} from "@codesandbox/sandpack-react";
import { MonacoEditor } from "./components/Editor";
import { CURRICULUM } from './challenges/lesson';

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
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: '#121212', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* 1. HEADER & NAVIGATION */}
      <header style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e1e1e', borderBottom: '1px solid #333' }}>
        <div>
          <span style={{ color: '#888', marginRight: '10px' }}>Step {stepIndex + 1} of {CURRICULUM.length}</span>
          <strong style={{ fontSize: '1.1rem' }}>{currentStep.title}</strong>
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handlePrev} 
            disabled={stepIndex === 0}
            style={{ padding: '8px 16px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: stepIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            ← Prev
          </button>
          <button 
            onClick={handleNext} 
            disabled={stepIndex === CURRICULUM.length - 1}
            style={{ padding: '8px 16px', background: '#4facfe', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Next →
          </button>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main style={{ flex: 1, overflow: 'hidden' }}>
        
        {currentStep.type === "lesson" ? (
          /* --- MODE A: LESSON VIEW --- */
          <div style={{ height: '100%', overflowY: 'auto', padding: '40px 20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              <ReactMarkdown>{currentStep.content}</ReactMarkdown>
              <button 
                onClick={handleNext} 
                style={{ marginTop: '40px', padding: '12px 24px', background: '#4facfe', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}
              >
                Start Lab Exercise
              </button>
            </div>
          </div>
        ) : (
          /* --- MODE B: LAB VIEW (Integrated IDE) --- */
          <div style={{ display: 'flex', height: '100%' }}>
            
            {/* Left: Task Instructions */}
            <div style={{ width: '250px', padding: '20px', background: '#181818', borderRight: '1px solid #333', overflowY: 'auto' }}>
              <h3 style={{ color: '#4facfe', marginTop: 0 }}>Task</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#ccc' }}>{currentStep.description}</p>
              <div style={{ marginTop: '20px', padding: '10px', background: '#222', borderRadius: '4px', fontSize: '12px', border: '1px solid #444' }}>
                <strong>Tip:</strong> Use the editor to solve the problem. The preview updates automatically.
              </div>
            </div>

            {/* Right: The IDE Engine */}
            <div style={{ flex: 1 }}>
              <SandpackProvider
                key={currentStep.id} // Important: Resets the editor/preview for every new lab
                template="react"
                theme="dark"
                files={currentStep.files}
                options={{ activeFile: "/App.js" }}
              >
                <SandpackLayout style={{ height: '100%', border: 'none', borderRadius: 0 }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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