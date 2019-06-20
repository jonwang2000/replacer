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

	const functionArr = rules
		.filter(rule => rule.inRule !== "")
		.map(rule => text =>
			text.replace(new RegExp(rule.inRule, "g"), rule.outRule)
		);

	let transitionText = inputText;
	functionArr.forEach(func => {
		transitionText = func(transitionText);
	});

	const output = transitionText;

	return (
		<div className="app-container">
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
