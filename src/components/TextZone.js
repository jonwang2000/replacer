import React from "react";
import { arrayTypeAnnotation } from "@babel/types";

class TextZone extends React.Component {
	render() {
		return (
			<div className="textzone-div">
				<textarea id="input-zone" className="zone-area">
					{" "}
				</textarea>
				->
				<textarea
					readonly="readonly"
					id="output-zone"
					className="zone-area"
				>
					{" "}
				</textarea>
			</div>
		);
	}
}

export default TextZone;
