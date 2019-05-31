import React from "react";

class ReplaceRules extends React.Component {
	render() {
		return (
			<div className="rule">
				<h3>rule</h3>
				<input type="text" className="rule-input" placeholder="input"/>
				->
				<input type="text" className="rule-output" placeholder="output"/>
			</div>
		);
	}
}

export default ReplaceRules;
