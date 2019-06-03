import React from "react";
import "./App.css";
import ReplaceRules from "./components/ReplaceRules";
import TextZone from "./components/TextZone";

class App extends React.Component {
	// State contains value of inputted text from TextZone
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
		this.updateValue = this.updateValue.bind(this);
	}

	// Update value for state
	updateValue(v) {
		this.setState({value: v});
	}

	// TEMPORARY FUNCTION ***** CHANGE LATER *************
	// transText changes given text to uppercase
	transText = (text) => text.toUpperCase();

	render() {
		const value = this.state.value;

		return (
			<div className="app-container">
				<TextZone value={value} onChange={this.updateValue} change={this.transText}/>
				<ReplaceRules />
			</div>
		);
	}
}

export default App;