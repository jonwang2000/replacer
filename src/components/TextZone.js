import React from "react";

class TextZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "Hello" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
        const value = this.props.value;
        const change = this.props.change;

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
