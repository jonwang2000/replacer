/*
 *  TextZone consists of the input and output text fields.
 *  It only should be inputting data from the input field.
 */

import React from "react";

const TextZone = props => {
	const { inputText, inputHandle, outputText } = props;

	return (
		<div>
			<textarea
				className="zone-area"
				value={inputText}
				onChange={inputHandle}
			/>
			<div>-></div>
			<textarea className="zone-area" value={outputText} readOnly />
		</div>
	);
};

export default TextZone;
