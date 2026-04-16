import ReactMarkdown from "react-markdown";
import Docs from "./docs/all.md?raw";
import "./Docs.css"

export default function DocsPage(){
    return (
        <div className="docs-container">
            <ReactMarkdown>{Docs}</ReactMarkdown>
        </div>
    );
}