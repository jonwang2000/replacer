import React from "react";
import "./App.css";
//import ReplaceRules from "./components/ReplaceRules";
//import TextZone from "./components/TextZone";

function rupper(text) {
	return text.toUpperCase();
}

class App extends React.Component {
	// State contains value of inputted text from TextZone
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			rules: [rupper]
		};
		this.updateValue = this.updateValue.bind(this);
	}

	// Update value for state
	updateValue(v) {
		this.setState({ value: v });
	}

	// TEMPORARY FUNCTION ***** CHANGE LATER *************
	// transText changes given text to uppercase
	transText = text => {
		for (let func of this.state.rules) {
			console.log(func);
			text =  func(text);
		}
		return text;
	};

	render() {
		const value = this.state.value;

		return (
			<div className="app-container">
				<TextZone
					value={value}
					onChange={this.updateValue}
					change={this.transText}
				/>
				<ReplaceRules />
			</div>
		);
	}
}

class ReplaceRules extends React.Component {
	render() {
		return (
			<div className="rule">
				<h3>rule</h3>
				<input type="text" className="rule-input" placeholder="input" />
				->
				<input
					type="text"
					className="rule-output"
					placeholder="output"
				/>
			</div>
		);
	}
}

class TextZone extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	// Handlechange is triggered everytime a change happens in the input textbox
	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		// Constants passed down from App.js, value being text value, change being change-rules
		const value = this.props.value;
		const change = this.props.change;

		// Input/Output textboxes, with an arrow in between
		// Output will take change(value)'d text
		return (
			<div className="textzone-div">
				<textarea
					id="input-zone"
					className="zone-area"
					value={value}
					onChange={this.handleChange}
				/>
				->
				<textarea
					readOnly
					id="output-zone"
					className="zone-area"
					value={change(value)}
				/>
			</div>
		);
	}
}

export default App;
