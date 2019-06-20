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

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import uuidv4 from "uuid/v4";

const useStyles = makeStyles(theme => ({
	base: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}));

const App = () => {
	const classes = useStyles;

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
		<Container component="main" maxWidth="xs">
			<CssBaseline />

			<div className={classes.base}>
				<Typography variant="h3" component="h1" align="center">
					Replacer
				</Typography>

				<TextZone
					inputText={inputText}
					inputHandle={inputHandle}
					outputText={output}
				/>

				<ReplaceRules rules={rules} setRules={setRules} />
			</div>
		</Container>
	);
};

export default App;
