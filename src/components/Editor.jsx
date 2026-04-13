import React from "react";
import Editor from "@monaco-editor/react";
import { useSandpack } from "@codesandbox/sandpack-react";

export function MonacoEditor() {
  const { sandpack } = useSandpack();
  const { files, activeFile, updateFile } = sandpack;
  
  // 1. Get the current code from Sandpack's internal state
  const code = files[activeFile].code;

  const handleEditorChange = (value) => {
    // 2. THIS IS THE BRIDGE: 
    // This tells Sandpack: "The user typed something, re-bundle now!"
    updateFile(activeFile, value || "");
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Editor
        height="100%"
        theme="vs-dark"
        language="javascript"
        value={code} 
        onChange={handleEditorChange} // 3. Must be linked to updateFile
        options={{
          automaticLayout: true,
        }}
      />
    </div>
  );
}