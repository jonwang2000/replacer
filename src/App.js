import React from "react";
import "./App.css";
import ReplaceRules from "./components/ReplaceRules";
import TextArea from "./components/TextArea";

class App extends React.Component {
	render() {
		return (
			<div class="app-container">
				<TextArea />
				<ReplaceRules />
			</div>
		);
	}
}

export default App;
