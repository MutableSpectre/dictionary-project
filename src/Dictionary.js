import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
       
        let apiKey = "40e28c77t4bb5368od54b9ccc0f6fad9"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKewordChange(event) {
        setKeyword(event.target.value);

    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKewordChange} autoFocus={true}/>
            </form>
            <Results results={results} />
        </div>
    );
}