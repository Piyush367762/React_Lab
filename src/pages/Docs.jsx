import ReactMarkdown from "react-markdown";
import Docs from "./docs/all.md?raw";


export default function DocsPage(){
    return (
        <div style={{padding: "20px"}}>
            <ReactMarkdown>{Docs}</ReactMarkdown>
        </div>
    );
}