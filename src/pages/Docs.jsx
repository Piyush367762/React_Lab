import ReactMarkdown from "react-markdown";
import Docs from "./docs/react.md?raw";
import "./Docs.css"
const sections = Docs.split('---');
export default function DocsPage(){
    return (
        <div className="docs-container">
            {sections.map((section, index) => (
                <section key={index} className="doc-section">
                    <ReactMarkdown>{section}</ReactMarkdown>
                </section>
            ))}
        </div>
    );
}