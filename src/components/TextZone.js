import React from "react";

class TextZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "Hello" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div className="textzone-div">
				<textarea
					id="input-zone"
					className="zone-area"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				->
				<textarea
					readonly="readonly"
					id="output-zone"
                    className="zone-area"
                    value = {this.state.value}
				>
				</textarea>
			</div>
		);
	}
}

export default TextZone;
