/*
 *  App.js is the primary application.
 *
 */

import React, { useState } from "react";
import "./App.css";
import TextZone from "./components/TextZone";

const App = props => {
	// State for input text
	const [inputText, setInputText] = useState("");

	// Event handler for input
	const inputHandle = event => {
		setInputText(event.target.value);
    };

    // Output text
    const output = inputText;

	return (
		<div>
			<h1>Replacer</h1>

			<TextZone inputText={inputText} inputHandle={inputHandle} outputText={output}/>
		</div>
	);
};

export default App;
