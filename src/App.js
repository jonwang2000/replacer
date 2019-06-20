/*
 *  App.js is the primary application.
 *  Nothing too out of ordinary.
 *  State:  inputText - stores current text in the input field
 *			rules - contains array of objects with inRule, outRule, id, turned into functions
 *					by functionArr constant.
 *	Current status: done logic, need to do styling
 *
 */

import React, { useState } from "react";
import TextZone from "./components/TextZone";
import ReplaceRules from "./components/ReplaceRules";
import uuidv4 from "uuid/v4";

const App = () => {
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

	// Creates an array of functions based on the current rules
	const functionArr = rules
		.filter(rule => rule.inRule !== "")
		.map(rule => text =>
			text.replace(new RegExp(rule.inRule, "g"), rule.outRule)
		);

	// Runs the rules against a copy of inputText
	let transitionText = inputText;
	functionArr.forEach(func => {
		transitionText = func(transitionText);
	});

	// Set output to transformed text
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
