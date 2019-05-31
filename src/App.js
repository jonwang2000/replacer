import React from "react";
import "./App.css";
import ReplaceRules from "./components/ReplaceRules";
import TextZone from "./components/TextZone";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
		this.updateValue = this.updateValue.bind(this);
	}

	updateValue(v) {
		this.setState({value: v});
	}

	render() {
		const value = this.state.value;

		return (
			<div className="app-container">
				<TextZone value={value} onChange={this.updateValue} />
				<ReplaceRules />
			</div>
		);
	}
}

export default App;
