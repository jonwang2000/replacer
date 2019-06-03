import React from "react";

class TextZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "Hello" };

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

export default TextZone;
