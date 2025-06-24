import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p className="definition">Definition: {props.meaning.definition}</p>
      <p className="example">Example: {props.meaning.example}</p>
    </div>
  );
}