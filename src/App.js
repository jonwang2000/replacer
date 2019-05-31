import React from "react";
import "./App.css";
import ReplaceRules from "./components/ReplaceRules";
import TextZone from "./components/TextZone";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="app-container">
				<TextZone />
				<ReplaceRules />
			</div>
		);
	}
}

export default App;
