import React from "react";

class ReplaceRules extends React.Component {
	render() {
		return (
			<div className="rule">
				<h3>rule</h3>
				<input type="text" class="rule-input"/>
				->
				<input type="text" className="rule-output"/>
			</div>
		);
	}
}

export default ReplaceRules;
