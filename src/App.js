/*
 *  App.js is the primary application.
 *
 */

import React, { useState } from "react";
import "./App.css";
import TextZone from "./components/TextZone";
import ReplaceRules from "./components/ReplaceRules";
import uuidv4 from "uuid/v4";

const App = props => {
	// State for input text
	const [inputText, setInputText] = useState("");

	// State for rules
	const [rules, setRules] = useState([
		{ inRule: "hello", outRule: "hi", id: uuidv4() }
	]);

	// Event handler for input
	const inputHandle = event => {
		setInputText(event.target.value);
	};

	// Output text
	const output = inputText;

	return (
		<div>
			<h1>Replacer</h1>

			<TextZone
				inputText={inputText}
				inputHandle={inputHandle}
				outputText={output}
			/>

			<ReplaceRules rules={rules} setRules={setRules} />
		</div>
	);
};

export default App;
