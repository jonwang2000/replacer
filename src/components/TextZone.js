import React from "react";

const TextZone = props => {
	const { inputText, inputHandle, outputText } = props;

	return (
		<div>
			<textarea value={inputText} onChange={inputHandle} />
			<div>-></div>
			<textarea value={outputText} readOnly/>
		</div>
	);
};

export default TextZone;
